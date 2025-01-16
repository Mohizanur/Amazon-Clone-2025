"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Eye } from "lucide-react";
import AddToCartButton from "../cart/AddToCartButton";
import QuickViewModal from "./modal/QuickViewModal";

const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 99.99,
    image: "/products/earbuds.jpg",
    rating: 4.5,
    reviews: 2547,
  },
  {
    id: 2,
    name: "Smart Watch Series 7",
    price: 399.99,
    image: "/products/smartwatch.jpg",
    rating: 4.8,
    reviews: 1823,
  },
  {
    id: 3,
    name: "Noise Cancelling Headphones",
    price: 249.99,
    image: "/products/headphones.jpg",
    rating: 4.7,
    reviews: 3642,
  },
  {
    id: 4,
    name: "4K Ultra HD Smart TV",
    price: 699.99,
    image: "/products/tv.jpg",
    rating: 4.6,
    reviews: 1256,
  },
];

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative group">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProduct(product)}
                  className="bg-white text-black p-3 rounded-full shadow-lg"
                >
                  <Eye className="w-5 h-5" />
                </motion.button>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-2 right-2 bg-amazon-yellow p-2 rounded-full shadow-md"
              >
                <Star className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-amazon-yellow font-bold text-xl">
                ${product.price}
              </p>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "text-amazon-yellow fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  ({product.reviews})
                </span>
              </div>
              <AddToCartButton product={product} />
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
