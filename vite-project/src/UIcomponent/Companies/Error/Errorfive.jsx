// components/NotFoundCreative3D.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";


export default function NotFoundCreative3D() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-50 dark:from-gray-900 dark:to-gray-950 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full text-center"
      >
        <img
          src="/illustrations/404-3d.png" // 🖼️ Replace this with your own illustration path
          alt="3D Illustration"
          className="mx-auto mb-8 w-full max-w-md"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
          Oops! Page not found.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          We can’t find the page you’re looking for. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition"
        >
          <FaArrowCircleLeft className="text-xl" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}



{/*

🖼️ Illustration Tip
Use a free 3D-style illustration from:

https://storyset.com

https://www.glazestock.com/3d

https://www.iconshock.com/3d-illustrations/ 
    
*/}








