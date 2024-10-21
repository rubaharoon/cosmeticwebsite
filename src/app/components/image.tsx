import React from "react";
// components/OurProductSection.js
import Image from "next/image";

const OurProductSection = () => {
  return (
    <section className="bg-[#C4B494] py-16"> {/* Light beige background */}
      <div className="container mx-auto px-4 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left: Product Image */}
        <div className="relative w-full h-96 lg:h-[400px]">

          <Image
            src="/images/greencream.png" // Replace with your product image path
            alt="Our Products"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right: Product Text */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">Our Products</h2>
          <p className="text-lg text-white mb-4">
            Each product in the Nuova collection is meticulously crafted using the finest ingredients and the latest scientific advancements.
          </p>
          <p className="text-lg text-white mb-4">
            We offer a wide range of cosmetics, skincare, and fragrances designed to meet the diverse needs of our customers. Whether you&apos;re looking for a radiant foundation, a nourishing hair mask, or a captivating fragrance, Nuova has something for everyone.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurProductSection;
