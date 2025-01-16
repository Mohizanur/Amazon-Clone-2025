import Image from "next/image";
import ProductGrid from "@/components/products/ProductGrid";
import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FeaturedCategories />
        <ProductGrid />
      </div>
    </div>
  );
}
