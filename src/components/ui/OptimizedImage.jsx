// File: src/components/ui/OptimizedImage.jsx
import Image from 'next/image';
import { useState } from 'react';

const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'}
        `}
        onLoadingComplete={() => setLoading(false)}
        quality={75} // Balanced quality
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;