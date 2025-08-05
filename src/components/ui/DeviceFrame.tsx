import React from 'react';
import { cn } from '@/lib/utils';

type DeviceType = 'web' | 'ios' | 'macos' | 'cli';

interface DeviceFrameProps {
  type: DeviceType;
  children: React.ReactNode;
  className?: string;
}

/**
 * DeviceFrame component provides consistent device mockup frames for different platforms
 * Used to display screenshots and content within realistic device contexts
 */
export const DeviceFrame: React.FC<DeviceFrameProps> = ({ type, children, className }) => {
  if (type === 'web') {
    return (
      <div className={cn('relative', className)}>
        <div className="bg-background-secondary rounded-t-lg p-2 flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-border" />
            <div className="w-3 h-3 rounded-full bg-border" />
            <div className="w-3 h-3 rounded-full bg-border" />
          </div>
          <div className="flex-1 bg-background rounded px-2 py-1 text-xs text-foreground-tertiary">
            localhost:3000
          </div>
        </div>
        <div className="bg-background border-x border-b border-border rounded-b-lg overflow-hidden">
          {children}
        </div>
      </div>
    );
  }

  if (type === 'ios') {
    return (
      <div className={cn('relative mx-auto', className)} style={{ maxWidth: '300px' }}>
        <div className="bg-background-tertiary rounded-[2.5rem] p-4 shadow-2xl">
          <div className="bg-background rounded-[2rem] overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'macos') {
    return (
      <div className={cn('relative', className)}>
        <div className="bg-background-secondary rounded-t-lg p-2 flex items-center">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
        </div>
        <div className="bg-background border-x border-b border-border rounded-b-lg overflow-hidden">
          {children}
        </div>
      </div>
    );
  }

  if (type === 'cli') {
    return (
      <div className={cn('bg-background-tertiary rounded-lg p-4 font-mono text-sm', className)}>
        <div className="flex items-center gap-2 mb-2 text-foreground-secondary">
          <span className="text-green-500">$</span>
          <span>terminal</span>
        </div>
        <div className="bg-background rounded p-4">
          {children}
        </div>
      </div>
    );
  }

  return <>{children}</>;
};