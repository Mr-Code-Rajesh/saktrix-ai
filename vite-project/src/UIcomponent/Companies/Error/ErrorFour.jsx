import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import { FaArrowLeft } from "react-icons/fa";

export default function NotFoundMinimal() {
  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-20 bg-white dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-7xl font-extrabold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-4">
          Page not found
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition"
        >
          <FaArrowLeft className="text-lg" />
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
