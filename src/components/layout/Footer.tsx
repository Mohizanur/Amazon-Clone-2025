export default function Footer() {
  return (
    <footer className="bg-amazon-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Get to Know Us</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Make Money with Us</h3>
            <ul className="space-y-2">
              <li>Sell products</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Payment Products</h3>
            <ul className="space-y-2">
              <li>Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Let Us Help You</h3>
            <ul className="space-y-2">
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© 2024 Amazon Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
