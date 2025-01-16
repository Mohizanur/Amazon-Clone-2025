"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function CartNotification() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const lastAddedItem = cartItems[cartItems.length - 1];

  return (
    <AnimatePresence>
      {lastAddedItem && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg"
        >
          <p className="font-semibold">Added to Cart!</p>
          <p className="text-sm">{lastAddedItem.name}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
