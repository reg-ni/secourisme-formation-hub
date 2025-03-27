
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-24 h-auto',
    md: 'w-32 h-auto',
    lg: 'w-40 h-auto',
  };

  return (
    <div className={`${className} ${sizeClasses[size]}`}>
      <img 
        src="/lovable-uploads/ede27336-ca5f-4bba-8776-03aca6d59ae9.png" 
        alt="SEMA PREV" 
        className="w-full h-auto"
      />
    </div>
  );
};

export default Logo;
