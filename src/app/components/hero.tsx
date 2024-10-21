import React from "react";
const HeroSection = () => {
  return (
    <section className="flex flex-col text-left bg-green-50 p-8 md:p-16">
      <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4"></h2>
        
        {/* Left Side: Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-4xl font-bold mb-4 text-[#677E53]">
            Let Nuova help <br /> you look your best
          </h1>
          <p className="text-[#000000] mb-6">
          Discover NUOVA, where beauty innovation meets <br /> luxury. <br />
Our eco-friendly, high-quality cosmetics enhance your <br /> natural glow. Explore our range and experience the <br /> future of beauty today.
          </p>
          <a href="#about" className="bg-[#677E53] text-white py-3 px-6 rounded-full hover:bg-green-700 transition duration-300">
            Learn More About Us
          </a>
        
   </div>

  

</section>


      
  );
};

export default HeroSection;
      
  