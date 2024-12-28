import React from "react";

export default function Footer() {
  return (
    <footer className="bg-var(--background) text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Brand Info */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold text-white">Smart Performance</h1>
            <p className="text-sm mt-2">
              Optimizing cars with cutting-edge chip tuning. Your ride,
              redefined.
            </p>
          </div>

          {/* Navigation Links */}

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-white">Contact Us</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <span className="block">📞 Phone: 0045 xxxxxxxx</span>
              </li>
              <li>
                <span className="block">✉️ Email: mh@mheitmann.dk</span>
              </li>
              <li>
                <span className="block">📍 Address: Lundevej 4, Hove</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
          <p>© 2024 Smart Performance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
