import React, { useRef, useId, useEffect, useState, useMemo, useCallback } from 'react';

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

// Frame rate limiter for animation updates
const useAnimationFrame = (callback: (time: number) => void, fps: number = 30) => {
  const frameTime = 1000 / fps;
  const lastFrameTime = useRef(0);
  const rafId = useRef<number>();
  const isPaused = useRef(false);

  const animate = useCallback((time: number) => {
    if (isPaused.current) {
      rafId.current = requestAnimationFrame(animate);
      return;
    }

    const elapsed = time - lastFrameTime.current;
    if (elapsed >= frameTime) {
      lastFrameTime.current = time - (elapsed % frameTime);
      callback(time);
    }
    rafId.current = requestAnimationFrame(animate);
  }, [callback, frameTime]);

  useEffect(() => {
    rafId.current = requestAnimationFrame(animate);
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [animate]);

  return {
    pause: () => { isPaused.current = true; },
    resume: () => { isPaused.current = false; }
  };
};

// Styles
const styles = {
  container: {
    position: 'fixed' as const,
    inset: 0,
    overflow: 'hidden',
    zIndex: 0,
    willChange: 'transform',
  },
  filterLayer: {
    position: 'absolute' as const,
    inset: 0,
    willChange: 'filter, transform',
    transition: 'transform 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out, left 0.3s ease-out, top 0.3s ease-out',
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
  const filterRef = useRef<SVGFilterElement>(null);
  const colorMatrixRef = useRef<SVGFEColorMatrixElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const capability = useDeviceCapability();
  const animationTime = useRef(0);
  
  // Performance configuration based on device capability
  const config = useMemo(() => {
    switch (capability) {
      case 'low':
        return {
          renderScale: 0.25,
          animationScale: 25,
          animationSpeed: 15,
          noiseOpacity: 0.3,
          noiseScale: 2,
          numOctaves: 1,
          blur: 2,
          simplifiedFilter: true,
          fps: 20,
        };
      case 'medium':
        return {
          renderScale: 0.5,
          animationScale: 50,
          animationSpeed: 25,
          noiseOpacity: 0.5,
          noiseScale: 1.5,
          numOctaves: 1,
          blur: 4,
          simplifiedFilter: true,
          fps: 25,
        };
      default:
        return {
          renderScale: 0.75,
          animationScale: 75,
          animationSpeed: 40,
          noiseOpacity: 0.65,
          noiseScale: 1.3,
          numOctaves: 2,
          blur: 6,
          simplifiedFilter: false,
          fps: 30,
        };
    }
  }, [capability]);
  
  const displacementScale = mapRange(config.animationScale, 1, 100, 5, 30);

  // Animation callback that updates the color matrix for smooth morphing
  const updateAnimation = useCallback((time: number) => {
    if (!colorMatrixRef.current || !isVisible) return;
    
    // Smooth animation using sine waves
    animationTime.current = time * 0.0001 * config.animationSpeed;
    
    // Animate the color matrix values for smooth color transitions
    const phase = animationTime.current;
    const r = 2.5 + Math.sin(phase) * 0.5;
    const g = 2.5 + Math.sin(phase + Math.PI * 0.667) * 0.5;
    const b = 2.5 + Math.sin(phase + Math.PI * 1.333) * 0.5;
    
    const matrixValues = `${r} 0 0 0 0.8  0 ${g} 0 0 0.8  0 0 ${b} 0 0.8  0 0 0 1 0`;
    colorMatrixRef.current.setAttribute('values', matrixValues);
  }, [isVisible, config.animationSpeed]);

  const { pause, resume } = useAnimationFrame(updateAnimation, config.fps);

  // Intersection Observer for visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          resume();
        } else {
          pause();
        }
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
  }, [pause, resume]);

  // Pause animation when page is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pause();
      } else {
        resume();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [pause, resume]);

  // Delay scaling to prevent initial layout jump
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Don't render complex filter if not visible
  if (!isVisible) {
    return <div ref={containerRef} style={styles.container} className={className} />;
  }

  const filterContent = config.simplifiedFilter ? (
    // Simplified filter for low-end devices - just displacement, no color animation
    <filter 
      ref={filterRef}
      id={id} 
      x="-50%" 
      y="-50%" 
      width="200%" 
      height="200%"
    >
      <feTurbulence
        result="turbulence"
        numOctaves={config.numOctaves}
        baseFrequency={`${mapRange(config.animationScale, 0, 100, 0.002, 0.001)}`}
        seed="1"
        type="fractalNoise"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="turbulence"
        scale={displacementScale}
        result="output"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  ) : (
    // Standard filter for capable devices with animated color matrix
    <filter 
      ref={filterRef}
      id={id} 
      x="-50%" 
      y="-50%" 
      width="200%" 
      height="200%"
    >
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
      <feColorMatrix
        ref={colorMatrixRef}
        in="turbulence"
        result="coloredNoise"
        type="matrix"
        values="3 0 0 0 0.8  0 3 0 0 0.8  0 0 3 0 0.8  0 0 0 1 0"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="coloredNoise"
        scale={displacementScale}
        result="output"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  );

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
          transform: isReady ? `scale(${1 / config.renderScale})` : 'scale(1)',
          transformOrigin: 'center',
          width: isReady ? `${100 * config.renderScale}%` : '100%',
          height: isReady ? `${100 * config.renderScale}%` : '100%',
          left: isReady ? `${50 - (50 * config.renderScale)}%` : '0',
          top: isReady ? `${50 - (50 * config.renderScale)}%` : '0',
        }}
      >
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            {filterContent}
          </defs>
        </svg>
        <div
          style={{
            ...styles.backgroundLayer,
            maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
            WebkitMaskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
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