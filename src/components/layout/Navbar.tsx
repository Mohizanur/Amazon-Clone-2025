import Link from "next/link";
import { Search, User } from "lucide-react";
import CartIndicator from "./CartIndicator";

export default function Navbar() {
  return (
    <header className="bg-amazon-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="/amazon-logo-white.png"
              alt="Amazon"
            />
          </Link>

          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <div className="relative">
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                  placeholder="Search products"
                  type="search"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/account" className="text-white p-2">
              <User className="h-6 w-6" />
            </Link>
            <CartIndicator />
          </div>
        </div>
      </div>
    </header>
  );
}
