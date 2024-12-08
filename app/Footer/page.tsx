// components/Footer.jsx
import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 ">
      <div className="w-[95%] mx-auto ">
        <div className="grid grid-cols-4 gap-8 mb-12">
          {/* First Column */}
          <div className="space-y-4">
            <Link
              href="/store-locator"
              className="block text-sm hover:text-gray-400"
            >
              FIND A STORE
            </Link>
            <Link
              href="/membership"
              className="block text-sm hover:text-gray-400"
            >
              BECOME A MEMBER
            </Link>
            <Link
              href="/email-signup"
              className="block text-sm hover:text-gray-400"
            >
              SIGN UP FOR EMAIL
            </Link>
            <Link
              href="/feedback"
              className="block text-sm hover:text-gray-400"
            >
              Send Us Feedback
            </Link>
            <Link
              href="/student-discount"
              className="block text-sm hover:text-gray-400"
            >
              STUDENT DISCOUNT
            </Link>
          </div>

          {/* Second Column */}
          <div>
            <h3 className="text-sm font-bold mb-4">GET HELP</h3>
            <div className="space-y-4">
              <Link
                href="/order-status"
                className="block text-xs text-gray-400 hover:text-white"
              >
                Order Status
              </Link>
              <Link
                href="/delivery"
                className="block text-xs text-gray-400 hover:text-white"
              >
                Delivery
              </Link>
              <Link
                href="/returns"
                className="block text-xs text-gray-400 hover:text-white"
              >
                Returns
              </Link>
              <Link
                href="/payment"
                className="block text-xs text-gray-400 hover:text-white"
              >
                Payment Options
              </Link>
              <Link
                href="/contact"
                className="block text-xs text-gray-400 hover:text-white"
              >
                Contact Us on Nike.com Inquiries
              </Link>
              <Link
                href="/contact-other"
                className="block text-xs text-gray-400 hover:text-white"
              >
                Contact Us On All Other Inquiries
              </Link>
            </div>
          </div>

          {/* Third Column */}
          <div>
            <h3 className="text-sm font-bold mb-4">ABOUT NIKE</h3>
            <div className="space-y-4">
              <Link
                href="/news"
                className="block text-xs text-gray-400 hover:text-white"
              >
                News
              </Link>
              <Link
                href="/careers"
                className="block text-xs text-gray-400 hover:text-white"
              >
                Careers
              </Link>
              <Link
                href="/investors"
                className="block text-xs text-gray-400 hover:text-white"
              >
                Investors
              </Link>
              <Link
                href="/sustainability"
                className="block text-xs text-gray-400 hover:text-white"
              >
                Sustainability
              </Link>
            </div>
          </div>

          {/* Fourth Column - Social Icons */}
          <div className="space-y-8">
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaYoutube size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-xs text-gray-400">
            <span>© 2023 Nike, Inc. All Rights Reserved</span>
            <span>India</span>
          </div>
          <div className="flex space-x-4 text-xs text-gray-400">
            <Link href="/guides" className="hover:text-white">
              Guides
            </Link>
            <Link href="/terms-of-sale" className="hover:text-white">
              Terms of Sale
            </Link>
            <Link href="/terms-of-use" className="hover:text-white">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Nike Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
