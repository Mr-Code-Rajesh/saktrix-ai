import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { componentSections } from "../Json/ComponentSection";


export default function MarketingUI() {
  return (
    
    <section className="w-full px-4 sm:px-8 py-16 md:py-15 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto">
{/*       
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            Explore Saktrix UI Components
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
            Handcrafted ultra-level components with smooth animations and cross-theme support.
          </p>
        </div> */}

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 border p-10 rounded-md border-black/20 dark:border-white/20">
          {componentSections.map((section, index) => (
            <Link to={`/components/${section.route}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transform hover:scale-[1.015] transition-all duration-300"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 pointer-events-none" />

                {/* Badge */}
                {section.badge && (
                  <span className="absolute top-3 right-3 z-50 text-xs bg-gradient-to-r from-purple-600 to-pink-500 text-white px-2 py-0.5 rounded-full shadow-md font-medium">
                    {section.badge}
                  </span>
                )}

                {/* Image Section */}
                <div className=" w-[368px] h-52 bg-gray-100 dark:bg-zinc-800 flex items-center justify-center relative z-10">
                  <img
                    src={section.image}
                    alt={section.name}
                    className=" bg-cover w-full h-full"
                  />
                </div>

                {/* Text Content */}
                <div className="p-5 space-y-1 relative z-10">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight">
                    {section.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {section.count} components available
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
