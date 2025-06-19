// File: src/components/ui/OptimizedImage.jsx
import Image from 'next/image';
import { useState } from 'react';

const OptimizedImage = ({ src, alt, className = '', priority = false, ...props }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      className={`
        duration-700 ease-in-out
        ${isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'}
        ${className}
      `}
      onLoadingComplete={() => setLoading(false)}
      quality={75}
      loading={priority ? 'eager' : 'lazy'}
      priority={priority}
      sizes="(max-width: 768px) 100vw, 50vw"
      {...props}
    />
  );
};

export default OptimizedImage;