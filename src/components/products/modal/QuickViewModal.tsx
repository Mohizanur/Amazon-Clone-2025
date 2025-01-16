"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Star, ShoppingCart } from "lucide-react";
import AddToCartButton from "@/components/cart/AddToCartButton";

interface QuickViewModalProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({
  product,
  isOpen,
  onClose,
}: QuickViewModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <p className="text-3xl font-bold text-amazon-yellow">
                  ${product.price}
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-amazon-yellow fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="space-y-4">
                  <AddToCartButton product={product} />
                  <button className="w-full bg-gray-100 py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
