import * as Icons from 'lucide-react';

interface LucideIconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function LucideIcon({ name, size = 20, className = '' }: LucideIconProps) {
  // Safe lookup for dynamic icon names in Lucide
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    // Return a default circle indicator if not found
    const Fallback = Icons.Circle;
    return <Fallback size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
}
