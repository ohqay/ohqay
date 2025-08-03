import React, { useRef, useId, useEffect, useState, useMemo } from 'react';
import styles from './EtherealBackground.module.css';

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

export const EtherealBackground: React.FC<EtherealBackgroundProps> = React.memo(({ className }) => {
  const id = useInstanceId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const capability = useDeviceCapability();
  
  // Performance configuration based on device capability
  const config = useMemo(() => {
    switch (capability) {
      case 'low':
        return {
          renderScale: 0.25, // Render at 25% resolution
          animationScale: 25,
          animationSpeed: 20,
          noiseOpacity: 0.3,
          noiseScale: 2,
          numOctaves: 1,
          blur: 2,
          simplifiedFilter: true,
        };
      case 'medium':
        return {
          renderScale: 0.5, // Render at 50% resolution
          animationScale: 50,
          animationSpeed: 30,
          noiseOpacity: 0.5,
          noiseScale: 1.5,
          numOctaves: 1,
          blur: 4,
          simplifiedFilter: true,
        };
      default:
        return {
          renderScale: 0.75, // Render at 75% resolution for performance
          animationScale: 75,
          animationSpeed: 45,
          noiseOpacity: 0.65,
          noiseScale: 1.3,
          numOctaves: 2,
          blur: 6,
          simplifiedFilter: false,
        };
    }
  }, [capability]);
  
  const displacementScale = mapRange(config.animationScale, 1, 100, 5, 30);

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

  // Pause animation when page is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      const elements = containerRef.current?.querySelectorAll(`.${styles.etherealFilter}`);
      elements?.forEach(el => {
        (el as HTMLElement).style.animationPlayState = document.hidden ? 'paused' : 'running';
      });
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Don't render complex filter if not visible
  if (!isVisible) {
    return <div ref={containerRef} className={styles.container} />;
  }

  const filterContent = config.simplifiedFilter ? (
    // Simplified filter for low-end devices
    <filter id={id} x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence
        result="turbulence"
        numOctaves={config.numOctaves}
        baseFrequency={`${mapRange(config.animationScale, 0, 100, 0.002, 0.001)}`}
        seed="0"
        type="fractalNoise"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="turbulence"
        scale={displacementScale}
        result="output"
      />
    </filter>
  ) : (
    // Standard filter for capable devices
    <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
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
        seed="0"
        type="turbulence"
      />
      <feColorMatrix
        in="turbulence"
        result="coloredNoise"
        type="matrix"
        values="3 0 0 0 0.8  3 0 0 0 0.8  3 0 0 0 0.8  1 0 0 0 0"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="coloredNoise"
        scale={displacementScale}
        result="output"
      />
    </filter>
  );

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className || ''}`}
    >
      <div
        className={styles.filterLayer}
        style={{
          inset: -displacementScale,
          filter: `url(#${id}) blur(${config.blur}px)`,
          transform: `scale(${1 / config.renderScale})`,
          transformOrigin: 'center',
          width: `${100 * config.renderScale}%`,
          height: `${100 * config.renderScale}%`,
          left: `${50 - (50 * config.renderScale)}%`,
          top: `${50 - (50 * config.renderScale)}%`,
        }}
      >
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            {filterContent}
          </defs>
        </svg>
        <div
          className={`${styles.backgroundLayer} ${styles.etherealFilter}`}
          style={{
            maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
            WebkitMaskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
            animationDuration: `${config.animationSpeed / 15}s`,
          }}
        />
      </div>

      {/* Noise overlay - also scaled for performance */}
      <div
        className={styles.noiseOverlay}
        style={{
          backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
          backgroundSize: config.noiseScale * 200,
          opacity: config.noiseOpacity / 2,
          transform: `scale(${1 / (config.renderScale * 0.8)})`,
          transformOrigin: 'center',
        }}
      />
    </div>
  );
});