import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import Category from "./components/category";
import HandwashSection from "./components/handwashsection";
import ProductSection from "./components/featuredproduct";
import Footer from "./components/footer";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Category />
      <HandwashSection />
      <ProductSection />
      <Footer />
      <Link href="/about">About Us</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/contact">Contact Us</Link>
    </>
  );
}