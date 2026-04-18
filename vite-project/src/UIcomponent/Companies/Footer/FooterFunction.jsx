import { motion } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif';
import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLinkedin, FaInstagram, FaRocket } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import { FaGithub, FaRobot } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";



function FooterComponents ({htmlCode,reactCode,SectionShow}){
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

export function FooterDemoOne(){
return(
<>
<FooterComponents
htmlCode={
String.raw
`
`
}

reactCode={
`import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa';

const FooterSaaS = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-sky-900 to-black dark:from-gray-900 dark:via-gray-950 dark:to-black text-white py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-3xl font-bold mb-2">SaasyWave</h2>
          <p className="text-gray-300 dark:text-gray-400">Empowering your business with scalable SaaS solutions.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
            <li><a href="#" className="hover:text-white transition">Cloud Hosting</a></li>
            <li><a href="#" className="hover:text-white transition">API Integration</a></li>
            <li><a href="#" className="hover:text-white transition">Data Analytics</a></li>
            <li><a href="#" className="hover:text-white transition">Consulting</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
          <div className="flex gap-4 mb-4">
            <a href="#"><FaFacebookF className="text-blue-400 hover:text-white hover:scale-110 transition" size={20} /></a>
            <a href="#"><FaTwitter className="text-sky-400 hover:text-white hover:scale-110 transition" size={20} /></a>
            <a href="#"><FaLinkedinIn className="text-blue-600 hover:text-white hover:scale-110 transition" size={20} /></a>
            <a href="#"><FaDribbble className="text-pink-400 hover:text-white hover:scale-110 transition" size={20} /></a>
          </div>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} SaasyWave. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSaaS;

`
}

SectionShow={
 <footer className="bg-gradient-to-br from-indigo-900 via-sky-900 to-black dark:from-gray-900 dark:via-gray-950 dark:to-black text-white py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-3xl font-bold mb-2">SaasyWave</h2>
          <p className="text-gray-300 dark:text-gray-400">Empowering your business with scalable SaaS solutions.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
            <li><a href="#" className="hover:text-white transition">Cloud Hosting</a></li>
            <li><a href="#" className="hover:text-white transition">API Integration</a></li>
            <li><a href="#" className="hover:text-white transition">Data Analytics</a></li>
            <li><a href="#" className="hover:text-white transition">Consulting</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
          <div className="flex gap-4 mb-4">
            <a href="#"><FaFacebookF className="text-blue-400 hover:text-white hover:scale-110 transition" size={20} /></a>
            <a href="#"><FaTwitter className="text-sky-400 hover:text-white hover:scale-110 transition" size={20} /></a>
            <a href="#"><FaLinkedinIn className="text-blue-600 hover:text-white hover:scale-110 transition" size={20} /></a>
            <a href="#"><FaDribbble className="text-pink-400 hover:text-white hover:scale-110 transition" size={20} /></a>
          </div>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} SaasyWave. All rights reserved.</p>
        </div>
      </motion.div>
 </footer>
}
/>
</>
)
}

export function FooterDemoFour(){
return(
<>
<FooterComponents
htmlCode={
String.raw
`
`
}

reactCode={
`import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FooterMedical = () => {
  return (
    <footer className="bg-gradient-to-br from-teal-600 to-cyan-800 dark:from-gray-900 dark:to-gray-950 text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {/* Logo & Brief */}
        <div>
          <h2 className="text-3xl font-bold mb-2">MediCore</h2>
          <p className="text-sm text-white/80">
            MediCore is your trusted partner for telemedicine and health tech solutions. We're here to care.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-white/90">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-white/70" /> +1 (800) 123-4567
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-white/70" /> support@medicore.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white/70" /> 123 Health St, Wellness City, USA
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="#" className="hover:underline">Our Services</a></li>
            <li><a href="#" className="hover:underline">Doctors</a></li>
            <li><a href="#" className="hover:underline">Patient Portal</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} MediCore. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterMedical;

`
}

SectionShow={
 <footer className="bg-gradient-to-br from-teal-600 to-cyan-800 dark:from-gray-900 dark:to-gray-950 text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {/* Logo & Brief */}
        <div>
          <h2 className="text-3xl font-bold mb-2">MediCore</h2>
          <p className="text-sm text-white/80">
            MediCore is your trusted partner for telemedicine and health tech solutions. We're here to care.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-white/90">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-white/70" /> +1 (800) 123-4567
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-white/70" /> support@medicore.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white/70" /> 123 Health St, Wellness City, USA
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="#" className="hover:underline">Our Services</a></li>
            <li><a href="#" className="hover:underline">Doctors</a></li>
            <li><a href="#" className="hover:underline">Patient Portal</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} MediCore. All rights reserved.
      </div>
 </footer>
}
/>
</>
)
}

export function FooterDemoTwo(){
return(
<>
<FooterComponents
htmlCode={
String.raw
`
`
}

reactCode={
`import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram, FaRocket } from 'react-icons/fa';

const FooterStartup = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-600 to-fuchsia-600 dark:from-gray-900 dark:to-gray-950 text-white px-6 py-14">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {/* Brand & Mission */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FaRocket className="text-white text-2xl" />
            <span className="text-2xl font-bold">Launchly</span>
          </div>
          <p className="text-sm text-white/80">
            Fueling early-stage startups with growth tools, analytics, and branding support. Let’s go to the moon 🚀.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Guides</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:scale-110 transition"><FaTwitter size={20} /></a>
            <a href="#" className="hover:scale-110 transition"><FaInstagram size={20} /></a>
            <a href="#" className="hover:scale-110 transition"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-white/20 pt-5 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Launchly Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterStartup;

`
}

SectionShow={
 <footer className="bg-gradient-to-br from-indigo-600 to-fuchsia-600 dark:from-gray-900 dark:to-gray-950 text-white px-6 py-14">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {/* Brand & Mission */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FaRocket className="text-white text-2xl" />
            <span className="text-2xl font-bold">Launchly</span>
          </div>
          <p className="text-sm text-white/80">
            Fueling early-stage startups with growth tools, analytics, and branding support. Let’s go to the moon 🚀.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Guides</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:scale-110 transition"><FaTwitter size={20} /></a>
            <a href="#" className="hover:scale-110 transition"><FaInstagram size={20} /></a>
            <a href="#" className="hover:scale-110 transition"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-white/20 pt-5 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Launchly Inc. All rights reserved.
      </div>
 </footer>
}
/>
</>
)
}

export function FooterDemoThree(){
return(
<>
<FooterComponents
htmlCode={
String.raw
`
`
}

reactCode={
`import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaBehance, FaEnvelope } from 'react-icons/fa';

const FooterDigitalMarketing = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#1a1a40] via-[#0f0f2f] to-[#1a1a40] dark:from-gray-950 dark:to-black text-white px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
      >
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">Adverzo</h1>
          <p className="text-white/70 mt-4 text-sm">
            We help brands grow through digital creativity, content campaigns, and conversion-first strategy.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#"><FaFacebookF className="hover:text-blue-500 transition" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-400 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-cyan-400 transition" /></a>
            <a href="#"><FaBehance className="hover:text-indigo-400 transition" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Services</h2>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><a href="#" className="hover:underline">SEO Optimization</a></li>
            <li><a href="#" className="hover:underline">Content Marketing</a></li>
            <li><a href="#" className="hover:underline">Brand Strategy</a></li>
            <li><a href="#" className="hover:underline">Social Ads</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-4">Subscribe</h2>
          <p className="text-white/70 text-sm mb-4">Get insights, strategy tips, and the latest trends right in your inbox.</p>
          <form className="flex items-center border border-white/20 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-transparent text-sm focus:outline-none placeholder:text-white/60"
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 px-4 py-2 text-white flex items-center gap-1"
            >
              <FaEnvelope /> Join
            </button>
          </form>
        </div>
      </motion.div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-sm text-white/50 border-t border-white/20 pt-5">
        © {new Date().getFullYear()} Adverzo Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterDigitalMarketing;

`
}

SectionShow={
  <footer className="bg-gradient-to-tr from-[#1a1a40] via-[#0f0f2f] to-[#1a1a40] dark:from-gray-950 dark:to-black text-white px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
      >
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">Adverzo</h1>
          <p className="text-white/70 mt-4 text-sm">
            We help brands grow through digital creativity, content campaigns, and conversion-first strategy.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#"><FaFacebookF className="hover:text-blue-500 transition" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-400 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-cyan-400 transition" /></a>
            <a href="#"><FaBehance className="hover:text-indigo-400 transition" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Services</h2>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><a href="#" className="hover:underline">SEO Optimization</a></li>
            <li><a href="#" className="hover:underline">Content Marketing</a></li>
            <li><a href="#" className="hover:underline">Brand Strategy</a></li>
            <li><a href="#" className="hover:underline">Social Ads</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-4">Subscribe</h2>
          <p className="text-white/70 text-sm mb-4">Get insights, strategy tips, and the latest trends right in your inbox.</p>
          <form className="flex items-center border border-white/20 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-transparent text-sm focus:outline-none placeholder:text-white/60"
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 px-4 py-2 text-white flex items-center gap-1"
            >
              <FaEnvelope /> Join
            </button>
          </form>
        </div>
      </motion.div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-sm text-white/50 border-t border-white/20 pt-5">
        © {new Date().getFullYear()} Adverzo Agency. All rights reserved.
      </div>
  </footer>
}
/>
</>
)
}

export function FooterDemoFive(){
return(
<>
<FooterComponents
htmlCode={
String.raw
`
`
}

reactCode={
`import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterBusiness = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 to-white dark:from-[#0d0d0d] dark:to-[#1a1a1a] text-gray-800 dark:text-gray-300 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
      >
        {/* Company */}
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">Nexura Corp</h1>
          <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
            Premium consulting and enterprise solutions tailored to grow your business effectively.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Consulting</a></li>
            <li><a href="#" className="hover:underline">Business Audit</a></li>
            <li><a href="#" className="hover:underline">Tech Solutions</a></li>
            <li><a href="#" className="hover:underline">Training</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
          <p className="text-sm mb-4">Get monthly updates, tips, and insights for scaling your business.</p>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-3 py-2 rounded-l-md bg-gray-200 dark:bg-gray-700 text-sm focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md text-sm">
              Subscribe
            </button>
          </form>
          <div className="flex gap-4">
            <a href="#"><FaLinkedin className="hover:text-blue-500 transition" /></a>
            <a href="#"><FaFacebookF className="hover:text-blue-600 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-cyan-500 transition" /></a>
            <a href="#"><FaEnvelope className="hover:text-rose-500 transition" /></a>
          </div>
        </div>
      </motion.div>

      <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-600 border-t border-gray-200 dark:border-gray-700 pt-6">
        © {new Date().getFullYear()} Nexura Corp. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterBusiness;

`
}

SectionShow={
  <footer className="bg-gradient-to-br from-gray-100 to-white dark:from-[#0d0d0d] dark:to-[#1a1a1a] text-gray-800 dark:text-gray-300 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
      >
        {/* Company */}
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">Nexura Corp</h1>
          <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
            Premium consulting and enterprise solutions tailored to grow your business effectively.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Consulting</a></li>
            <li><a href="#" className="hover:underline">Business Audit</a></li>
            <li><a href="#" className="hover:underline">Tech Solutions</a></li>
            <li><a href="#" className="hover:underline">Training</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
          <p className="text-sm mb-4">Get monthly updates, tips, and insights for scaling your business.</p>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-3 py-2 rounded-l-md bg-gray-200 dark:bg-gray-700 text-sm focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md text-sm">
              Subscribe
            </button>
          </form>
          <div className="flex gap-4">
            <a href="#"><FaLinkedin className="hover:text-blue-500 transition" /></a>
            <a href="#"><FaFacebookF className="hover:text-blue-600 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-cyan-500 transition" /></a>
            <a href="#"><FaEnvelope className="hover:text-rose-500 transition" /></a>
          </div>
        </div>
      </motion.div>

      <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-600 border-t border-gray-200 dark:border-gray-700 pt-6">
        © {new Date().getFullYear()} Nexura Corp. All Rights Reserved.
      </div>
    </footer>
}
/>
</>
)
}

export function FooterDemoSix(){
return(
<>
<FooterComponents
htmlCode={
String.raw
`
`
}

reactCode={
`import { motion } from 'framer-motion';
import { FaBehance, FaDribbble, FaInstagram, FaEnvelope } from 'react-icons/fa';

const FooterCreativeAgency = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] dark:from-[#0d0d0d] dark:via-[#1f1f1f] dark:to-[#141414] text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
      >
        {/* Brand Identity */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-500 to-red-500">
            CREOVIBE
          </h1>
          <p className="mt-3 text-sm text-gray-300">
            Turning ideas into visuals. We design, brand, and build digital vibes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Explore</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-400 transition-all">Work</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Services</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Studio</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold mb-4">What We Do</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-400 transition-all">Branding</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-all">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-all">Web Development</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-all">3D & Motion</a></li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-4">Stay in the Loop</h2>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Enter email"
              className="px-3 py-2 w-full bg-white/10 text-sm rounded-l-lg placeholder:text-gray-300 focus:outline-none"
            />
            <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-r-lg text-white text-sm">
              Send
            </button>
          </form>
          <div className="flex gap-4 mt-3">
            <a href="#"><FaDribbble className="hover:text-pink-400 transition text-xl" /></a>
            <a href="#"><FaBehance className="hover:text-blue-400 transition text-xl" /></a>
            <a href="#"><FaInstagram className="hover:text-fuchsia-500 transition text-xl" /></a>
            <a href="#"><FaEnvelope className="hover:text-yellow-400 transition text-xl" /></a>
          </div>
        </div>
      </motion.div>

      <div className="mt-12 text-center text-sm text-gray-400 dark:text-gray-600 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} CREOVIBE. Crafted with passion by the vibesmiths.
      </div>
    </footer>
  );
};

export default FooterCreativeAgency;

`
}

SectionShow={
    <footer className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] dark:from-[#0d0d0d] dark:via-[#1f1f1f] dark:to-[#141414] text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
      >
        {/* Brand Identity */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-500 to-red-500">
            CREOVIBE
          </h1>
          <p className="mt-3 text-sm text-gray-300">
            Turning ideas into visuals. We design, brand, and build digital vibes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Explore</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-400 transition-all">Work</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Services</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Studio</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold mb-4">What We Do</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-400 transition-all">Branding</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-all">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-all">Web Development</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-all">3D & Motion</a></li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-4">Stay in the Loop</h2>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Enter email"
              className="px-3 py-2 w-full bg-white/10 text-sm rounded-l-lg placeholder:text-gray-300 focus:outline-none"
            />
            <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-r-lg text-white text-sm">
              Send
            </button>
          </form>
          <div className="flex gap-4 mt-3">
            <a href="#"><FaDribbble className="hover:text-pink-400 transition text-xl" /></a>
            <a href="#"><FaBehance className="hover:text-blue-400 transition text-xl" /></a>
            <a href="#"><FaInstagram className="hover:text-fuchsia-500 transition text-xl" /></a>
            <a href="#"><FaEnvelope className="hover:text-yellow-400 transition text-xl" /></a>
          </div>
        </div>
      </motion.div>

      <div className="mt-12 text-center text-sm text-gray-400 dark:text-gray-600 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} CREOVIBE. Crafted with passion by the vibesmiths.
      </div>
    </footer>
}
/>
</>
)
}

export function FooterDemoSeven(){
return(
<>
<FooterComponents
htmlCode={
String.raw
`
`
}

reactCode={
`import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedin, FaRobot } from "react-icons/fa";

const FooterAI = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#000428] via-[#004e92] to-[#000428] dark:from-[#0f0f0f] dark:via-[#1a1a1a] dark:to-[#0f0f0f] text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
      >
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2 text-cyan-400">
            <FaRobot className="text-4xl" /> NeuroSync
          </h1>
          <p className="mt-3 text-sm text-gray-300">
            Building smarter worlds with AI. Automate, analyze, evolve.
          </p>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-cyan-300">Products</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition-all">AI Chatbot</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">Vision API</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">Auto Insights</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">Model Hub</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-cyan-300">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition-all">Documentation</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">Blog</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">Support</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">API Status</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-cyan-300">Connect</h2>
          <div className="flex gap-4 text-xl">
            <a href="#"><FaGithub className="hover:text-gray-400 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-400 transition" /></a>
            <a href="#"><FaLinkedin className="hover:text-blue-300 transition" /></a>
          </div>
          <form className="mt-6">
            <input
              type="email"
              placeholder="Subscribe to newsletter"
              className="bg-white/10 dark:bg-white/5 placeholder:text-gray-300 text-sm px-3 py-2 rounded-l-lg w-2/3 focus:outline-none"
            />
            <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-r-lg text-white text-sm">
              Join
            </button>
          </form>
        </div>
      </motion.div>

      <div className="mt-12 text-center text-sm text-gray-400 dark:text-gray-600 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} NeuroSync. Powered by intelligence, designed for the future.
      </div>
    </footer>
  );
};

export default FooterAI;

`
}

SectionShow={
 <footer className="bg-gradient-to-tr from-[#000428] via-[#004e92] to-[#000428] dark:from-[#0f0f0f] dark:via-[#1a1a1a] dark:to-[#0f0f0f] text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
      >
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2 text-cyan-400">
            <FaRobot className="text-4xl" /> NeuroSync
          </h1>
          <p className="mt-3 text-sm text-gray-300">
            Building smarter worlds with AI. Automate, analyze, evolve.
          </p>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-cyan-300">Products</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition-all">AI Chatbot</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">Vision API</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">Auto Insights</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">Model Hub</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-cyan-300">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition-all">Documentation</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">Blog</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">Support</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">API Status</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-cyan-300">Connect</h2>
          <div className="flex gap-4 text-xl">
            <a href="#"><FaGithub className="hover:text-gray-400 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-400 transition" /></a>
            <a href="#"><FaLinkedin className="hover:text-blue-300 transition" /></a>
          </div>
          <form className="mt-6">
            <input
              type="email"
              placeholder="Subscribe to newsletter"
              className="bg-white/10 dark:bg-white/5 placeholder:text-gray-300 text-sm px-3 py-2 rounded-l-lg w-2/3 focus:outline-none"
            />
            <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-r-lg text-white text-sm">
              Join
            </button>
          </form>
        </div>
      </motion.div>

      <div className="mt-12 text-center text-sm text-gray-400 dark:text-gray-600 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} NeuroSync. Powered by intelligence, designed for the future.
      </div>
 </footer>
}
/>
</>
)
}











