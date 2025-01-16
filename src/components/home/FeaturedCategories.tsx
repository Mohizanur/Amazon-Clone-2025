"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  { id: 1, name: "Electronics", image: "/categories/electronics.jpg" },
  { id: 2, name: "Fashion", image: "/categories/fashion.jpg" },
  { id: 3, name: "Home & Kitchen", image: "/categories/home.jpg" },
  { id: 4, name: "Books", image: "/categories/books.jpg" },
];

export default function FeaturedCategories() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="relative rounded-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={category.image}
              alt={category.name}
              width={300}
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{category.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
