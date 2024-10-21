import React from 'react';
export default function Category() {
        const categories = [
      { name: 'Makeup', image: '../images/makeupcategory.png' },
      { name: 'Skincare', image:'../images/skincarecategory.png' },
      { name: 'Fragrance', image: '../images/fragrancecategory.png' },
      { name: 'Men’s grooming', image: '../images/mensgrooming.png' },
    ];
  
    return (
      <section className="p-8 md:p-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold relative inline-block text-[#000000]">
          Shop By Category
          <span className="block w-[158px] h-[1px] bg-[#C4B494] absolute left-1/2 transform -translate-x-1/2 bottom-[-8px]"></span>
        </h3>
      </div>
     
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.name} className="text-center">
            <div className="aspect-w-4 aspect-h-3 rounded-tl-[60px] rounded-br-[60px] overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="mt-4 text-lg font-semibold text-[#C4B494]">{category.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};












  