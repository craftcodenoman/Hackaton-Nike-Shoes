// import Image from "next/image";
// import Link from "next/link";
// import image from "next/image";

// const Navbar = () => {
//   return (
//     <nav className="w-[95%] mx-auto  justify-between flex-col  space-x-6 text-sm">
//       {/* Left side - Logo */}
//       <div className=" mt-6 ml-48px">
//         <Link href="/">
//           <Image
//             src="/air jorden.jpg" // Make sure to add your logo in public folder
//             alt="Nike Logo"
//             width={24}
//             height={24}
//             className="cursor-pointer  "
//           />
//         </Link>
//       </div>

//       {/* Top Navbar - Existing */}

//         <div className="flex items-center space-x-6 text-sm">
//           <Link
//             href="/store-locator"
//             className="hover:text-gray-500 transition-colors"
//           >
//             Find a Store
//           </Link>
//           <Link href="/help" className="hover:text-gray-500 transition-colors">
//             Help
//           </Link>
//           <Link href="/join" className="hover:text-gray-500 transition-colors">
//             Join Us
//           </Link>
//           <Link
//             href="/signin"
//             className="hover:text-gray-500 transition-colors"
//           >
//             Sign In
//           </Link>

//       {/* Bottom Navbar - New Categories */}
//       <nav className="w-[95%] mx-auto h-16 flex items-center justify-center border-t">
//       <Image
//               src="/nike-logo.svg"
//               alt="Nike Logo"
//               width={60}
//               height={60}
//               className="cursor-pointer"
//             />
//         <div className="flex items-center space-x-8 text-base font-medium">
//           <Link href="/new" className="hover:text-gray-500 transition-colors">
//             New & Featured
//           </Link>
//           <Link href="/men" className="hover:text-gray-500 transition-colors">
//             Men
//           </Link>
//           <Link href="/women" className="hover:text-gray-500 transition-colors">
//             Women
//           </Link>
//           <Link href="/kids" className="hover:text-gray-500 transition-colors">
//             Kids
//           </Link>
//           <Link href="/sale" className="hover:text-gray-500 transition-colors">
//             Sale
//           </Link>
//           <Link href="/snkrs" className="hover:text-gray-500 transition-colors">
//             SNKRS
//           </Link>
//           </div>
//           </nav>
//         </div>

//     </nav>
//   );
// };

// export default Navbar;

// components/Navbar.jsx
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingCart, FiHeart } from "react-icons/fi"; // Adding icons

const Navbar = () => {
  return (
    <div>
      {/* Top Navbar */}
      <nav className="w-[95%] mx-auto h-16 flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/air jorden.jpg"
              alt="Air Jorden Logo"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Right side - Search & Icons */}
        <div className="flex items-center space-x-6">
          <Link
            href="/store-locator"
            className="hover:text-gray-500 transition-colors text-sm"
          >
            Find a Store
          </Link>
          <Link
            href="/help"
            className="hover:text-gray-500 transition-colors text-sm"
          >
            Help
          </Link>
          <Link
            href="/join"
            className="hover:text-gray-500 transition-colors text-sm"
          >
            Join Us
          </Link>
          <Link
            href="/signin"
            className="hover:text-gray-500 transition-colors text-sm"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Bottom Navbar - Categories */}
      <nav className="w-[95%] mx-auto h-16 flex items-center justify-between border-t">
        {/* Left - Logo */}
        <div className="flex items-center mt-9 ml-38">
          <Link href="/">
            <Image
              src="/nike logo.png"
              alt="Nike Logo"
              width={78}
              height={78}
              className="cursor-pointer mb-8"
            />
          </Link>
        </div>

        {/* Center - Categories */}
        <div className="flex items-center space-x-8 text-base font-medium">
          <Link href="/new" className="hover:text-gray-500 transition-colors">
            New & Featured
          </Link>
          <Link href="/men" className="hover:text-gray-500 transition-colors">
            Men
          </Link>
          <Link href="/women" className="hover:text-gray-500 transition-colors">
            Women
          </Link>
          <Link href="/kids" className="hover:text-gray-500 transition-colors">
            Kids
          </Link>
          <Link href="/sale" className="hover:text-gray-500 transition-colors">
            Sale
          </Link>
          <Link href="/snkrs" className="hover:text-gray-500 transition-colors">
            SNKRS
          </Link>
        </div>

        {/* Right - Search & Icons */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <FiSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
          <button className="hover:text-gray-500 transition-colors">
            <FiHeart size={24} />
          </button>
          <button className="hover:text-gray-500 transition-colors">
            <FiShoppingCart size={24} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
