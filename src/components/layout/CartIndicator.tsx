"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function CartIndicator() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button className="bg-amazon-yellow p-4 rounded-full shadow-lg">
          <ShoppingCart className="w-6 h-6" />
        </button>
        <AnimatePresence>
          {cartItems.length > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
            >
              {cartItems.length}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
