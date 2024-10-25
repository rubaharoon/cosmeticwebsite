import HeroSection from "./components/hero";
import Category from "./components/category";
import HandwashSection from "./components/handwashsection";
import ProductSection from "./components/featuredproduct";
import Footer from "./components/footer";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Category />
      <HandwashSection />
      <ProductSection />
      <Footer />
      <Link href="/about"></Link>
      <Link href="/shop"></Link>
      <Link href="/contact"></Link>
    </>
  );
}