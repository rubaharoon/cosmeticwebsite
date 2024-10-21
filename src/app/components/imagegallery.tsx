import Image from 'next/image';

export default function ProductGallery() {
  const products = [
    { src: '/images/lipstick.png', alt: 'Product 1' },
    { src: '/images/spray.png', alt: 'Product 2' },
    { src: '/images/perfume.png', alt: 'Product 3' },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Product Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="p-4">
            {/* Product Card */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={product.src}
                alt={product.alt}
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
