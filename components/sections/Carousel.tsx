"use client"

import { Carousel } from "@material-tailwind/react";
import { CarouselDefaultProps } from "@/app/utils";
 
export function CarouselDefault({ images }: CarouselDefaultProps) {
  // Validate input to ensure it's an array
  if (!images || !Array.isArray(images)) {
    console.error("The provided argument is not a valid array of images:", images);
    return <p>No images available</p>; // Fallback UI if invalid data is passed
  }
  
  return (
    <Carousel className="rounded-xl w-full max-w-[800px]">
      {images.map((item, index) => (
        <div key={index} className="relative w-full aspect-[8/5]">
          <img
            src={item.href.src}
            alt={item.alt}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
}