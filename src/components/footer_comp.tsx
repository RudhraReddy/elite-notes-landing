"use client";

const Footer = () => {
  return (
    <footer className="bg-background text-forground py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-medium mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">📞</span>
                <span>+91 77018 15890</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">✉️</span>
                <a
                  href="mailto:workingonmymindset@gmail.com"
                  className="hover:text-gray-100 transition-colors"
                >
                  workingonmymindset@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">📌</span>
                <span>Gurugram, Haryana 122001, INDIA</span>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="space-y-3 text-gray-300">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-gray-100 transition-colors"
              >
                <span>Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-gray-100 transition-colors"
              >
                <span>Twitter</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-gray-100 transition-colors"
              >
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <div className="space-y-3 text-gray-300">
              <a
                href="#"
                className="block hover:text-gray-100 transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="block hover:text-gray-100 transition-colors"
              >
                Careers
              </a>
              <a
                href="#"
                className="block hover:text-gray-100 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          © 2023 Elite Notes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
