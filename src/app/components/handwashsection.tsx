import React from "react";
const HandwashSection = () => {
  return (
    <section className="bg-[#677E53] py-12">
      <div className="container mx-auto px-4">
        {/* Responsive grid or flexbox layout */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          {/* Image Section - on the right side for larger screens */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
            <img
              src="../images/handwash.png"  // Replace with actual path
              alt="NUOVA Revitalizing Handwash"
              className="w-full max-h-screen max-w-xl md:max-w-md lg:max-w-lg rounded-xl"
            />
          </div>

          {/* Text Section - on the left side for larger screens */}
          <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#FDF9EE] mb-4">
              NUOVA Revitalizing Handwash
            </h2>
            <p className="text-lg text-[#FDF9EE] mb-6">
              Discover NUOVA Revitalizing Handwash for clean, nourished hands.<br />
              Its unique formula deeply cleanses while hydrating, leaving hands
              refreshed and smooth. Suitable for all skin types with a delightful fragrance.
            </p>
            <a
              href="/shop"
              className="bg-[#FDF9EE] text-[#677E53] font-bold py-3 px-8 rounded-full w-[136px] h-[50px] hover:bg-[#FDF9EE] radius:corner[15px_15px_15px_15px] transition duration-300">
                Shop Now
            </a>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default HandwashSection;