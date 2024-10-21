import React from "react";
// components/ImageSection.js
import Image from 'next/image';

const ImageSection = () => {
  return (
    <section className="my-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* First Image */}
        <div className="relative w-full h-64 lg:h-auto lg:col-span-2">
          <Image
            src="/images/whiteperfume.png"  // Replace with your image path
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Second Image */}
        <div className="relative w-full h-64 lg:h-auto">
          <Image
            src="/images/oil.png"  // Replace with your image path
            alt="Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
</div>
</section>
  );
};
export default ImageSection;       

       
      
