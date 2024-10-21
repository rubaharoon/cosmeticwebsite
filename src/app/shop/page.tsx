import React from "react";

const products = [
  {
    id: 1,
    name: 'Hydra Boost Moisturizer',
    description: 'A hydrating moisturizer that nourishes and revitalizes the skin, leaving it soft and supple.',
    price: 'price: $54',
    imageUrl: '../images/moisturizer.png', // replace with actual image paths
  },
  {
    id: 2,
    name: 'Revitalizing Night Cream',
    description: 'A hydrating night cream with hyaluronic acid and vitamin E for overnight rejuvenation.',
    price: 'price: $45',
    imageUrl: '../images/nightcream.png',
  },
  {
    id: 3,
    name: 'Nourishing Hair Mask',
    description: 'A conditioning hair mask that repair and strengthens damaged hair, enriched with argan oil and keratin.',
    price: 'price: $35',
    imageUrl: '../images/hairmask.png',
  },
  {
    id: 4,
    name: 'Hydra Boost Moisturizer',
    description: 'A hydrating moisturizer that nourishes and revitalizes the skin, leaving it soft and supple.',
    price: 'price: $54',
    imageUrl: '../images/moisturizer.png', // replace with actual image paths
  },
  {
    id: 5,
    name: 'Revitalizing Night Cream',
    description: 'A hydrating night cream with hyaluronic acid and vitamin E for overnight rejuvenation.',
    price: 'price: $45',
    imageUrl: '../images/nightcream.png',
  },
  {
    id: 6,
    name: 'Nourishing Hair Mask',
    description: 'A conditioning hair mask that repair and strengthens damaged hair, enriched with argan oil and keratin.',
    price: 'price: $35',
    imageUrl: '../images/hairmask.png',
  },
  {
    id: 7,
    name: 'Hydra Boost Moisturizer',
    description: 'A hydrating moisturizer that nourishes and revitalizes the skin, leaving it soft and supple.',
    price: 'price: $54',
    imageUrl: '../images/moisturizer.png', // replace with actual image paths
  },
  {
    id: 8,
    name: 'Revitalizing Night Cream',
    description: 'A hydrating night cream with hyaluronic acid and vitamin E for overnight rejuvenation.',
    price: 'price: $45',
    imageUrl: '../images/nightcream.png',
  },
  {
    id: 9,
    name: 'Nourishing Hair Mask',
    description: 'A conditioning hair mask that repairs and strengthens damaged hair, enriched with argan oil and keratin.',
    price: 'price: $35',
    imageUrl: '../images/hairmask.png',
  },
];

export default function Shop() {
  return (
    <div className="py-12 px-4 md:px-12 lg:px-24 bg-gray-100">
      <h1 className="text-center text-4xl font-bold text-[#677E53] mb-8">
        Welcome to the Nuova <br /> Shop
      </h1>
      <p className="text-center text-lg text-[#0D0D0D] mb-12">
        Discover our wide range of premium beauty products designed to enhance your <br /> natural beauty and elevate your daily routine. From skincare essentials to luxarious <br /> fragrances, find everything you need to look and feel your best.
      </p>

      <section className="p-8 md:p-16">
      <div className="text-left mb-8">
        <h3 className="text-2xl font-bold relative inline-block text-[#C4B494]">
          Our Products
          <span className="block w-[158px] h-[1px] bg-[#C4B494] absolute left-1/2 transform -translate-x-1/2 bottom-[-8px]"></span>
        </h3>
      </div>
      </section>
    <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-xl" // Rounded top corners
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              <p className="mt-4 font-bold text-lg text-center">{product.price}</p>
              <button className="flex items-center text-[#8b5d3e] text-lg mb-2 hover:underline transition duration-300">
                  Add to Cart
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="#C4B494" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#C4B494" d="M19.5 22a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-10 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"/><path d="M5 4h17l-2 11H7zm0 0c-.167-.667-1-2-3-2m18 13H5.23c-1.784 0-2.73.781-2.73 2s.946 2 2.73 2H19.5"/></g></svg>
                </button>
              
            </div>
            <button className="bg-[#8b5d3e] text-white py-3 rounded-lg shadow-md hover:bg-[#7a4e3a] transition duration-300 mx-auto flex items-center">
            Shop Now
                </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
