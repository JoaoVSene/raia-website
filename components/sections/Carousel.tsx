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
    <Carousel className="rounded-xl">
      {images.map((item,index) => (
        <img
        key={index}
        src={item.href}
        alt={item.alt}
        className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
}