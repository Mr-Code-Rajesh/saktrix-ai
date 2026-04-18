import { motion } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif';
import { FaCopy } from "react-icons/fa";
import { useState } from 'react';
import { FiSend } from 'react-icons/fi'
import { FaRocket } from 'react-icons/fa'
import { FaHeartbeat } from 'react-icons/fa'
import { FaBullhorn } from 'react-icons/fa'
import { FaChartLine } from 'react-icons/fa'
import { FaPaintBrush } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { FaRobot } from 'react-icons/fa'



function NewsComponents ({htmlCode,reactCode,SectionShow}){
    const [view, setView] = useState("preview"); // 'preview' | 'code'
    const [codeType, setCodeType] = useState("html"); // 'html' | 'react'

    const handleCopy = () => {
    const code = codeType === "html" ? htmlCode : reactCode;
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
    };

  return(
    <>
        <section className="min-h-screen w-full my-15 bg-white  text-black dark:text-white flex flex-col items-center justify-center relative overflow-hidden  dark:bg-gray-900 rounded-2xl  shadow-2xl border border-gray-300  dark:border-gray-700 transition-all duration-500">
        
        <div className="min-h-screen w-full mx-auto">
          {/* Header Controls */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300  dark:border-gray-800 bg-white dark:bg-gray-800">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setView("preview")}
                className={`px-4 py-1 rounded-md font-medium ${
                  view === "preview"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Preview
              </button>
              <button
                onClick={() => setView("code")}
                className={`px-4 py-1 rounded-md font-medium ${
                  view === "code"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Code
              </button>
            </div>

            {view === "code" && (
              <div className="flex items-center space-x-2">
                <select
                  onChange={(e) => setCodeType(e.target.value)}
                  value={codeType}
                  className="rounded-md border-gray-300  dark:border-gray-600 dark:bg-gray-800 dark:text-white text-sm"
                >
                  <option value="html">HTML</option>
                  <option value="react">React</option>
                </select>
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-2 text-sm text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100"
                >
                  <FaCopy />
                  <span>Copy</span>
                </button>
              </div>
            )}
          </div>



    {/* Hero page view start  */} 

   {view === "preview" ? (
    (SectionShow)

   ) : (
    <section className=" w-full overflow-x-scroll bg-gray-100 dark:bg-gray-900">
      <pre className="text-left text-sm  text-gray-800 dark:text-gray-200 w-full h-[90%] p-4 rounded">
         {codeType === "html" ? htmlCode : reactCode}
      </pre>
    </section>
   )}


</div>
</section>
      
             
    </>
  )
}

{/* Covert to (Pure HTML + Tailwind + Font Awesome or other free icons cdn as your wish)*/}

export function NewsOne(){
  return(
<>
<NewsComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'

export default function SaaSNewsletter() {
  return (
    <section className="bg-gradient-to-br min-h-screen from-blue-50 to-blue-100 dark:from-[#0f172a] dark:to-[#1e293b] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6"
        >
          Stay Ahead With Product Updates
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Subscribe to receive the latest features, improvements & industry insights.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 w-full sm:w-80 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-lg"
          >
            Subscribe <FiSend />
          </button>
        </motion.form>
      </div>
    </section>
  )
}

`
}
SectionShow={
<>
<section className="bg-gradient-to-br min-h-screen from-blue-50 to-blue-100 dark:from-[#0f172a] dark:to-[#1e293b] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6"
        >
          Stay Ahead With Product Updates
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Subscribe to receive the latest features, improvements & industry insights.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 w-full sm:w-80 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-lg"
          >
            Subscribe <FiSend />
          </button>
        </motion.form>
      </div>
</section>
</>
}

/>
</>
)
}

export function NewsTwo(){
  return(
<>
<NewsComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion'
import { FaRocket } from 'react-icons/fa'

export default function StartupNewsletter() {
  return (
    <section className="bg-gradient-to-tr min-h-screen from-fuchsia-100 via-pink-100 to-rose-100 dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#0f3460] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-4"
        >
          🚀 Join the Next-Gen Founders Network
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Get exclusive growth hacks, startup guides & VC updates straight to your inbox.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="you@startup.com"
            className="px-5 py-3 w-full sm:w-80 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-xl transition-all shadow-xl"
          >
            Subscribe <FaRocket />
          </button>
        </motion.form>
      </div>
    </section>
  )
}

`
}
SectionShow={
<>
    <section className="bg-gradient-to-tr min-h-screen from-fuchsia-100 via-pink-100 to-rose-100 dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#0f3460] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-4"
        >
          🚀 Join the Next-Gen Founders Network
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Get exclusive growth hacks, startup guides & VC updates straight to your inbox.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="you@startup.com"
            className="px-5 py-3 w-full sm:w-80 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-xl transition-all shadow-xl"
          >
            Subscribe <FaRocket />
          </button>
        </motion.form>
      </div>
    </section>
</>
}

/>
</>
)
}

export function NewsThree(){
  return(
<>
<NewsComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion'
import { FaHeartbeat } from 'react-icons/fa'

export default function MedicalNewsletter() {
  return (
    <section className="bg-gradient-to-br min-h-screen from-cyan-50 to-teal-100 dark:from-[#0f172a] dark:to-[#134e4a] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          🩺 Stay Informed. Stay Healthy.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Get the latest healthcare updates, wellness tips, and medical news.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="px-5 py-3 w-full sm:w-80 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all shadow-md"
          >
            Subscribe <FaHeartbeat />
          </button>
        </motion.form>
      </div>
    </section>
  )
}

`
}
SectionShow={
<>
<section className="bg-gradient-to-br min-h-screen from-cyan-50 to-teal-100 dark:from-[#0f172a] dark:to-[#134e4a] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          🩺 Stay Informed. Stay Healthy.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Get the latest healthcare updates, wellness tips, and medical news.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="px-5 py-3 w-full sm:w-80 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all shadow-md"
          >
            Subscribe <FaHeartbeat />
          </button>
        </motion.form>
      </div>
    </section>
</>
}

/>
</>
)
}

export function NewsFour(){
  return(
<>
<NewsComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion'
import { FaBullhorn } from 'react-icons/fa'

export default function MarketingNewsletter() {
  return (
    <section className="bg-gradient-to-br min-h-screen from-pink-100 via-fuchsia-200 to-purple-200 dark:from-[#2e1065] dark:via-[#6b21a8] dark:to-[#581c87] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-4"
        >
          📣 Boost Your Brand With Pro Tips
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Subscribe to weekly growth hacks, trends, and social media strategies.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="px-5 py-3 w-full sm:w-80 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-xl transition-all shadow-lg"
          >
            Subscribe <FaBullhorn />
          </button>
        </motion.form>
      </div>
    </section>
  )
}

`
}
SectionShow={
<>
<section className="bg-gradient-to-br min-h-screen from-pink-100 via-fuchsia-200 to-purple-200 dark:from-[#2e1065] dark:via-[#6b21a8] dark:to-[#581c87] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-4"
        >
          📣 Boost Your Brand With Pro Tips
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Subscribe to weekly growth hacks, trends, and social media strategies.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="px-5 py-3 w-full sm:w-80 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-xl transition-all shadow-lg"
          >
            Subscribe <FaBullhorn />
          </button>
        </motion.form>
      </div>
    </section>
</>
}

/>
</>
)
}

export function NewsFive(){
  return(
<>
<NewsComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion'
import { FaChartLine } from 'react-icons/fa'

export default function FinanceNewsletter() {
  return (
    <section className="bg-gradient-to-r min-h-screen from-gray-100 via-blue-100 to-gray-200 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#1e293b] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          💼 Financial Insights. Direct to Your Inbox.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 mb-8"
        >
          Get weekly updates on markets, investing tips, and smart money moves.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="px-5 py-3 w-full sm:w-80 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-md"
          >
            Subscribe <FaChartLine />
          </button>
        </motion.form>
      </div>
    </section>
  )
}

`
}
SectionShow={
<>
  <section className="bg-gradient-to-r min-h-screen from-gray-100 via-blue-100 to-gray-200 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#1e293b] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          💼 Financial Insights. Direct to Your Inbox.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 mb-8"
        >
          Get weekly updates on markets, investing tips, and smart money moves.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="px-5 py-3 w-full sm:w-80 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-md"
          >
            Subscribe <FaChartLine />
          </button>
        </motion.form>
      </div>
  </section>
</>
}

/>
</>
)
}

export function NewsSix(){
  return(
<>
<NewsComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion'
import { FaPaintBrush } from 'react-icons/fa'

export default function CreativeNewsletter() {
  return (
    <section className="bg-gradient-to-br min-h-screen from-yellow-100 via-pink-100 to-purple-100 dark:from-[#1f1f1f] dark:via-[#2b2a35] dark:to-[#3b3b4f] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-4"
        >
          🎨 Let Your Inbox Inspire You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Get creative prompts, design tips, and curated inspiration every week.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="you@inspiration.com"
            className="px-5 py-3 w-full sm:w-80 rounded-2xl border border-pink-300 dark:border-purple-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl transition-all shadow-md"
          >
            Subscribe <FaPaintBrush />
          </button>
        </motion.form>
      </div>
    </section>
  )
}

`
}
SectionShow={
<>
 <section className="bg-gradient-to-br min-h-screen from-yellow-100 via-pink-100 to-purple-100 dark:from-[#1f1f1f] dark:via-[#2b2a35] dark:to-[#3b3b4f] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-4"
        >
          🎨 Let Your Inbox Inspire You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Get creative prompts, design tips, and curated inspiration every week.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="you@inspiration.com"
            className="px-5 py-3 w-full sm:w-80 rounded-2xl border border-pink-300 dark:border-purple-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl transition-all shadow-md"
          >
            Subscribe <FaPaintBrush />
          </button>
        </motion.form>
      </div>
    </section>
</>
}

/>
</>
)
}

export function NewsSeven(){
  return(
<>
<NewsComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'

export default function DevNewsletter() {
  return (
    <section className="bg-gradient-to-r min-h-screen from-slate-100 via-slate-200 to-slate-300 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#1e293b] py-20 font-mono">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3"
        >
          👨‍💻 Dev Logs in Your Inbox
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 mb-8"
        >
          Weekly code insights, tool updates, and productivity hacks.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="dev@you.com"
            className="px-5 py-3 w-full sm:w-80 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-all shadow-lg"
          >
            Subscribe <FaCode />
          </button>
        </motion.form>
      </div>
    </section>
  )
}

`
}
SectionShow={
<>
 <section className="bg-gradient-to-r min-h-screen from-slate-100 via-slate-200 to-slate-300 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#1e293b] py-20 font-mono">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3"
        >
          👨‍💻 Dev Logs in Your Inbox
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 mb-8"
        >
          Weekly code insights, tool updates, and productivity hacks.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="dev@you.com"
            className="px-5 py-3 w-full sm:w-80 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-all shadow-lg"
          >
            Subscribe <FaCode />
          </button>
        </motion.form>
      </div>
 </section>
</>
}

/>
</>
)
}

export function NewsEight(){
  return(
<>
<NewsComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion'
import { FaRobot } from 'react-icons/fa'

export default function AINewsletter() {
  return (
    <section className="bg-gradient-to-br min-h-screen from-[#e0f7fa] via-[#f1f1f1] to-[#f8bbd0] dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          🤖 Stay Ahead with AI Trends
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 mb-8"
        >
          Get weekly insights on artificial intelligence, innovation, and automation — right to your inbox.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="future@you.ai"
            className="px-5 py-3 w-full sm:w-80 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all shadow-lg"
          >
            Subscribe <FaRobot />
          </button>
        </motion.form>
      </div>
    </section>
  )
}

`
}
SectionShow={
<>
<section className="bg-gradient-to-br min-h-screen from-[#e0f7fa] via-[#f1f1f1] to-[#f8bbd0] dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          🤖 Stay Ahead with AI Trends
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 mb-8"
        >
          Get weekly insights on artificial intelligence, innovation, and automation — right to your inbox.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="future@you.ai"
            className="px-5 py-3 w-full sm:w-80 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all shadow-lg"
          >
            Subscribe <FaRobot />
          </button>
        </motion.form>
      </div>
</section>
</>
}

/>
</>
)
}







