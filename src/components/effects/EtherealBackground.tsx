import React, { useRef, useId, useEffect, useState, useMemo } from 'react';
import { animate, useMotionValue, AnimationPlaybackControls } from 'framer-motion';

interface EtherealBackgroundProps {
  className?: string;
}

function mapRange(
  value: number,
  fromLow: number,
  fromHigh: number,
  toLow: number,
  toHigh: number
): number {
  if (fromLow === fromHigh) {
    return toLow;
  }
  const percentage = (value - fromLow) / (fromHigh - fromLow);
  return toLow + percentage * (toHigh - toLow);
}

const useInstanceId = (): string => {
  const id = useId();
  const cleanId = id.replace(/:/g, '');
  const instanceId = `ethereal-${cleanId}`;
  return instanceId;
};

// Device capability detection
const useDeviceCapability = () => {
  const [capability, setCapability] = useState<'high' | 'medium' | 'low'>('high');

  useEffect(() => {
    // Check for Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    // Check GPU tier
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        // Detect Apple Silicon and Intel GPUs
        if (gpu.includes('Intel')) {
          setCapability('low');
        } else if (gpu.includes('Apple') && !gpu.includes('M1') && !gpu.includes('M2') && !gpu.includes('M3') && !gpu.includes('M4')) {
          setCapability('medium');
        }
      }
    }

    // Safari gets automatic downgrade
    if (isSafari) {
      setCapability(prev => prev === 'high' ? 'medium' : 'low');
    }

    // Check device memory if available
    if ('deviceMemory' in navigator) {
      const memory = (navigator as any).deviceMemory;
      if (memory < 4) setCapability('low');
      else if (memory < 8) setCapability(prev => prev === 'high' ? 'medium' : prev);
    }

    // Check CPU cores
    if ('hardwareConcurrency' in navigator) {
      const cores = navigator.hardwareConcurrency;
      if (cores < 4) setCapability('low');
      else if (cores < 8) setCapability(prev => prev === 'high' ? 'medium' : prev);
    }
  }, []);

  return capability;
};

export const EtherealBackground: React.FC<EtherealBackgroundProps> = ({ className }) => {
  const id = useInstanceId();
  const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null);
  const hueRotateMotionValue = useMotionValue(180);
  const hueRotateAnimation = useRef<AnimationPlaybackControls | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const capability = useDeviceCapability();

  // Performance configuration based on device capability
  const config = useMemo(() => {
    switch (capability) {
      case 'low':
        return {
          animationScale: 50,
          animationSpeed: 30,
          noiseOpacity: 0.5,
          noiseScale: 1.5,
          numOctaves: 1,
          blur: 4,
          disableSecondDisplacement: true,
        };
      case 'medium':
        return {
          animationScale: 75,
          animationSpeed: 45,
          noiseOpacity: 0.65,
          noiseScale: 1.3,
          numOctaves: 1,
          blur: 6,
          disableSecondDisplacement: true,
        };
      default:
        return {
          animationScale: 100,
          animationSpeed: 60,
          noiseOpacity: 0.75,
          noiseScale: 1.2,
          numOctaves: 2,
          blur: 8,
          disableSecondDisplacement: false,
        };
    }
  }, [capability]);
  
  const displacementScale = mapRange(config.animationScale, 1, 100, 20, 100);
  const animationDuration = mapRange(config.animationSpeed, 1, 100, 1000, 50);

  // Intersection Observer for visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('[data-ethereal-container]');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (feColorMatrixRef.current && isVisible) {
      if (hueRotateAnimation.current) {
        hueRotateAnimation.current.stop();
      }
      hueRotateMotionValue.set(0);
      hueRotateAnimation.current = animate(hueRotateMotionValue, 360, {
        duration: animationDuration / 25,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        ease: 'linear',
        delay: 0,
        onUpdate: (value: number) => {
          if (feColorMatrixRef.current) {
            feColorMatrixRef.current.setAttribute('values', String(value));
          }
        },
      });

      // Pause when page is not visible
      const handleVisibilityChange = () => {
        if (hueRotateAnimation.current) {
          if (document.hidden) {
            hueRotateAnimation.current.pause();
          } else {
            hueRotateAnimation.current.play();
          }
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        if (hueRotateAnimation.current) {
          hueRotateAnimation.current.stop();
        }
      };
    }
  }, [animationDuration, hueRotateMotionValue, isVisible]);

  return (
    <div
      data-ethereal-container
      className={className}
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: -displacementScale,
          filter: `url(#${id}) blur(${config.blur}px)`,
        }}
      >
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter id={id}>
              <feTurbulence
                result="undulation"
                numOctaves={config.numOctaves}
                baseFrequency={`${mapRange(config.animationScale, 0, 100, 0.001, 0.0005)},${mapRange(
                  config.animationScale,
                  0,
                  100,
                  0.004,
                  0.002
                )}`}
                seed="0"
                type="turbulence"
              />
              <feColorMatrix
                ref={feColorMatrixRef}
                in="undulation"
                type="hueRotate"
                values="180"
              />
              <feColorMatrix
                in="dist"
                result="circulation"
                type="matrix"
                values="3.5 0 0 0 0.9  3.5 0 0 0 0.9  3.5 0 0 0 0.9  1 0 0 0 0"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="circulation"
                scale={displacementScale}
                result="dist"
              />
              {!config.disableSecondDisplacement && (
                <feDisplacementMap
                  in="dist"
                  in2="undulation"
                  scale={displacementScale}
                  result="output"
                />
              )}
            </filter>
          </defs>
        </svg>
        <div
          style={{
            backgroundColor: 'hsl(0 0% 20%)',
            maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
            maskSize: 'cover',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
            WebkitMaskSize: 'cover',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Noise overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
          backgroundSize: config.noiseScale * 200,
          backgroundRepeat: 'repeat',
          opacity: config.noiseOpacity / 2,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
};