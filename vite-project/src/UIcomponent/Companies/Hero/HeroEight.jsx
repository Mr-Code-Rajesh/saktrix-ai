import { motion } from "framer-motion";
import DoctorImg from "/your-assets/doctor-illustration.png"; // Replace with your image path

export  const HeroMedical = ()=> {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-blue-50 to-white dark:from-zinc-900 dark:to-black transition-colors">
      
      {/* Background Light Blur */}
      <div className="absolute top-[-80px] right-[-100px] w-[400px] h-[400px] bg-cyan-300 dark:bg-cyan-500 opacity-20 blur-[180px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-xl space-y-6"
        >
          <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-medium rounded-full dark:bg-cyan-900 dark:text-cyan-200">
            🩺 Trusted Healthcare Partner
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 dark:text-white leading-tight">
            Compassionate Care, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">
              Backed by Technology
            </span>
          </h1>
          
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            We provide advanced diagnostics, world-class treatment, and personalized care — all from the comfort of your home or hospital.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition">
              Book Appointment
            </button>
            <button className="px-6 py-3 border border-blue-200 dark:border-zinc-700 text-blue-900 dark:text-white rounded-lg hover:bg-blue-50 dark:hover:bg-zinc-800 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-80 h-80 sm:w-[400px] sm:h-[400px]"
        >
          <img
            src={DoctorImg}
            alt="Doctor Illustration"
            className="w-full h-full object-contain rounded-xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
