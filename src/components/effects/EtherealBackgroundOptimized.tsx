import React, { useRef, useId, useEffect, useState, useMemo, useCallback } from 'react';
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

// Preload mask image
const useMaskImage = (url: string) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsLoaded(true); // Still render even if mask fails
    img.src = url;
  }, [url]);

  return isLoaded;
};

// Styles
const styles = {
  container: {
    position: 'fixed' as const,
    inset: 0,
    overflow: 'hidden',
    zIndex: 0,
  },
  filterLayer: {
    position: 'absolute' as const,
    inset: 0,
    willChange: 'filter',
  },
  backgroundLayer: {
    backgroundColor: 'hsl(0 0% 20%)',
    width: '100%',
    height: '100%',
    maskSize: 'cover',
    maskRepeat: 'no-repeat',
    maskPosition: 'center',
    WebkitMaskSize: 'cover',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    willChange: 'filter',
  },
  noiseOverlay: {
    position: 'absolute' as const,
    inset: 0,
    backgroundRepeat: 'repeat',
    mixBlendMode: 'overlay' as const,
    pointerEvents: 'none' as const,
  },
};

export const EtherealBackground: React.FC<EtherealBackgroundProps> = React.memo(({ className }) => {
  const id = useInstanceId();
  const containerRef = useRef<HTMLDivElement>(null);
  const hueRotateRef = useRef<SVGFEColorMatrixElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const capability = useDeviceCapability();
  const hueRotateMotionValue = useMotionValue(0);
  const hueRotateAnimation = useRef<AnimationPlaybackControls | null>(null);
  const maskUrl = 'https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png';
  const isMaskLoaded = useMaskImage(maskUrl);
  
  // Performance configuration based on device capability
  const config = useMemo(() => {
    switch (capability) {
      case 'low':
        return {
          animationScale: 25,
          animationSpeed: 20,
          noiseOpacity: 0.3,
          noiseScale: 2,
          numOctaves: 1,
          blur: 3,
          filterRegion: 10, // Smaller filter region for performance
        };
      case 'medium':
        return {
          animationScale: 50,
          animationSpeed: 30,
          noiseOpacity: 0.5,
          noiseScale: 1.5,
          numOctaves: 1,
          blur: 5,
          filterRegion: 20,
        };
      default:
        return {
          animationScale: 75,
          animationSpeed: 45,
          noiseOpacity: 0.65,
          noiseScale: 1.3,
          numOctaves: 2,
          blur: 7,
          filterRegion: 30,
        };
    }
  }, [capability]);
  
  const displacementScale = mapRange(config.animationScale, 1, 100, 10, 40);
  const animationDuration = mapRange(config.animationSpeed, 1, 100, 1000, 50);

  // Intersection Observer for visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Hue rotate animation
  useEffect(() => {
    if (hueRotateRef.current && isVisible && isMaskLoaded) {
      if (hueRotateAnimation.current) {
        hueRotateAnimation.current.stop();
      }
      
      hueRotateMotionValue.set(0);
      hueRotateAnimation.current = animate(hueRotateMotionValue, 360, {
        duration: animationDuration / 20,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        ease: 'linear',
        onUpdate: (value: number) => {
          if (hueRotateRef.current) {
            hueRotateRef.current.setAttribute('values', String(value));
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
  }, [animationDuration, hueRotateMotionValue, isVisible, isMaskLoaded]);

  // Don't render until mask is loaded to prevent cropping
  if (!isMaskLoaded) {
    return <div ref={containerRef} style={styles.container} className={className} />;
  }

  // Don't render complex filter if not visible
  if (!isVisible) {
    return <div ref={containerRef} style={styles.container} className={className} />;
  }

  return (
    <div
      ref={containerRef}
      style={styles.container}
      className={className}
    >
      <div
        style={{
          ...styles.filterLayer,
          filter: `url(#${id}) blur(${config.blur}px)`,
        }}
      >
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter 
              id={id} 
              x={`-${config.filterRegion}%`}
              y={`-${config.filterRegion}%`}
              width={`${100 + config.filterRegion * 2}%`}
              height={`${100 + config.filterRegion * 2}%`}
            >
              {/* Create turbulence pattern */}
              <feTurbulence
                result="turbulence"
                numOctaves={config.numOctaves}
                baseFrequency={`${mapRange(config.animationScale, 0, 100, 0.001, 0.0005)},${mapRange(
                  config.animationScale,
                  0,
                  100,
                  0.004,
                  0.002
                )}`}
                seed="1"
                type="turbulence"
              />
              
              {/* Color the turbulence */}
              <feColorMatrix
                in="turbulence"
                result="coloredNoise"
                type="matrix"
                values="3 0 0 0 0.8  3 0 0 0 0.8  3 0 0 0 0.8  1 0 0 0 0"
              />
              
              {/* Displace the source graphic */}
              <feDisplacementMap
                in="SourceGraphic"
                in2="coloredNoise"
                scale={displacementScale}
                result="displaced"
                xChannelSelector="R"
                yChannelSelector="G"
              />
              
              {/* Apply hue rotation to the final displaced image for animation */}
              <feColorMatrix
                ref={hueRotateRef}
                in="displaced"
                type="hueRotate"
                values="0"
                result="output"
              />
            </filter>
          </defs>
        </svg>
        <div
          style={{
            ...styles.backgroundLayer,
            maskImage: `url(${maskUrl})`,
            WebkitMaskImage: `url(${maskUrl})`,
          }}
        />
      </div>

      {/* Noise overlay */}
      <div
        style={{
          ...styles.noiseOverlay,
          backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
          backgroundSize: config.noiseScale * 200,
          opacity: config.noiseOpacity / 2,
        }}
      />
    </div>
  );
});