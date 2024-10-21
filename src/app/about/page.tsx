import React from 'react';
import Navbar from '../components/navbar';
import OurProductSection from '../components/image';
import ProductGallery from '../components/imagegallery';
import Footer from '../components/footer'; 
import Image from 'next/image';
const AboutUs = () => {
  return (
    <>
      <Navbar />
      
      <div className="px-4 py-8 lg:px-16">
        {/* Welcome Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#677E53]">Welcome to NUOVA</h1>
          <p className="mt-4 text-lg lg:text-xl text-[#000000]">
            At Nuova, we believe that beauty is more than skin deep. <br /> It’s about feeling confident, embracing your individuality, <br /> and expressing yourself in your own unique way. Our <br /> commission is to empower you with the tools and products to <br /> enhance your natural beauty and inspire confidence <br /> every day.
          </p>
       
    </section>
    
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

  
       
      


        

        {/* Our Story Section */}
        <section className="my-12 text-center">
          <h2 className="text-3xl font-bold text-[#677E53] mb-6">Our Story</h2>
          <p className="text-lg text-[#000000] px-4 md:px-12 lg:px-32">
            Nuova was founded with a passion for beauty and a commitment to excellence. What <br /> started as a dream to create high-quality, accessible beauty products has grown into a <br /> trusted brand known for innovation, integrity, and a deep understanding of what makes <br/> our customers feel beautiful. From our humble beginnings, we have remained dedicated <br /> to bringing you the best in cosmetics and skincare.
          </p>
        </section>
      </div>

       {/* Our Quality & Innovation Section */}
       <section className="my-12 text-center">
          <h2 className="text-3xl font-bold text-[#677E53] mb-6">Quality & Innovation</h2>
          <p className="text-lg text-[#000000] px-4 md:px-12 lg:px-32">
          Quality is at the heart of everything we do. Our products are formulated with care, using <br /> only the best ingredients that are both effective and gentle on your skin. We continually <br /> strive to innovate and stay ahead of the latest beauty trends, ensuring that our products <br /> deliver outstanding results. </p>
        </section>
      
      <OurProductSection />
<ProductGallery />
  
             

<Footer />
    </>
  );
};

export default AboutUs;
