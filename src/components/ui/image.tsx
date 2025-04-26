import React from "react";

export function Image({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={`rounded-lg ${className}`} />;
}
