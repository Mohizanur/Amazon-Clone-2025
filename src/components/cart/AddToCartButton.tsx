"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function AddToCartButton({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id.toString(), // Convert id to string
      title: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };

  return (
    <motion.button
      onClick={handleAddToCart}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full mt-4 bg-amazon-yellow py-2 rounded-md font-semibold flex items-center justify-center gap-2"
    >
      <ShoppingCart className="w-5 h-5" />
      Add to Cart
    </motion.button>
  );
}
