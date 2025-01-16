"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";

interface AddToCartButtonProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <motion.button
      onClick={handleAddToCart}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full bg-amazon-yellow py-2 px-4 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-amazon-yellow/90 transition-colors"
    >
      <ShoppingCart className="w-5 h-5" />
      Add to Cart
    </motion.button>
  );
}
