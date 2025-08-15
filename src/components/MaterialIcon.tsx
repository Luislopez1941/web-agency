interface MaterialIconProps {
  name: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  filled?: boolean;
}

export function MaterialIcon({ name, className = '', size = 'medium', filled = true }: MaterialIconProps) {
  const sizeClasses = {
    small: 'text-lg', // 18px
    medium: 'text-2xl', // 24px  
    large: 'text-4xl' // 36px
  };

  const iconClass = filled ? 'material-symbols-rounded' : 'material-icons-round';
  
  return (
    <span 
      className={`${iconClass} ${sizeClasses[size]} ${className}`}
      style={{ 
        fontVariationSettings: filled ? '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' : '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24'
      }}
    >
      {name}
    </span>
  );
}
