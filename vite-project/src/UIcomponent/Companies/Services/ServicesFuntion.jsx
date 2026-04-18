import { motion } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif';
import { FaCopy } from "react-icons/fa";
import { useState } from 'react';
import { FaCloud, FaRobot, FaLaptopCode, FaDatabase } from 'react-icons/fa';
import { FaCog, FaChartLine, FaTasks, FaUsers } from 'react-icons/fa';
import { FaDollarSign, FaBullhorn, FaChartBar, FaLightbulb } from 'react-icons/fa';
import { FaStethoscope, FaHeartbeat, FaHandHoldingMedical, FaSyringe, FaAmbulance } from 'react-icons/fa';
import { FaSearch, FaShareAlt, FaEnvelope } from 'react-icons/fa';
import { FaPiggyBank, FaShieldAlt, FaFileInvoiceDollar } from 'react-icons/fa';
import { FaPaintBrush, FaCamera, FaPen, FaFilm } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { SiBlockchaindotcom } from "react-icons/si";

const servicesEight = [
    { icon: <FaMobileAlt />, title: 'App Development', description: 'Innovative mobile apps for modern businesses' },
    { icon: <FaRobot />, title: 'AI & Machine Learning', description: 'Automate and optimize with cutting-edge AI' },
    { icon: <FaCloud />, title: 'Cloud Computing', description: 'Seamless and scalable cloud solutions' },
    { icon: <SiBlockchaindotcom />, title: 'Blockchain Development', description: 'Decentralized and secure blockchain solutions' },
    { icon: <FaShieldAlt />, title: 'Cybersecurity', description: 'Protect your digital assets with robust security' },
];
const servicesSeven = [
    { icon: <FaPaintBrush />, title: 'Graphic Design', description: 'Create stunning visuals and designs' },
    { icon: <FaLaptopCode />, title: 'Web Development', description: 'Build interactive and engaging websites' },
    { icon: <FaCamera />, title: 'Photography', description: 'Capture the essence of your story through photos' },
    { icon: <FaPen />, title: 'Branding', description: 'Craft a unique identity for your brand' },
    { icon: <FaFilm />, title: 'Animation', description: 'Bring your ideas to life with motion' },
];
const servicesSix = [
    { icon: <FaPiggyBank />, title: 'Financial Planning', description: 'Plan your financial future with expert advice' },
    { icon: <FaUsers />, title: 'Corporate Consulting', description: 'Get business strategies that drive success' },
    { icon: <FaChartBar />, title: 'Investment Strategies', description: 'Maximize returns with tailored investment plans' },
    { icon: <FaShieldAlt />, title: 'Risk Management', description: 'Minimize business risks with our expert solutions' },
    { icon: <FaFileInvoiceDollar />, title: 'Tax Services', description: 'Simplify tax filing and planning with professionals' },
];
const servicesFive = [
    { icon: <FaSearch />, title: 'SEO', description: 'Improve your website ranking on search engines' },
    { icon: <FaBullhorn />, title: 'PPC Advertising', description: 'Targeted ads to boost your business visibility' },
    { icon: <FaShareAlt />, title: 'Social Media Marketing', description: 'Engage your audience across social platforms' },
    { icon: <FaEnvelope />, title: 'Email Marketing', description: 'Personalized email campaigns to connect with customers' },
    { icon: <FaChartLine />, title: 'Analytics', description: 'Measure and optimize your marketing efforts' },
  ];
const servicesFour = [
    { icon: <FaStethoscope />, title: 'Medical Consultation', description: 'Consult with top doctors online' },
    { icon: <FaHeartbeat />, title: 'Emergency Care', description: '24/7 emergency services when you need it most' },
    { icon: <FaHandHoldingMedical />, title: 'Patient Care', description: 'Dedicated care for patients at home or in the hospital' },
    { icon: <FaSyringe />, title: 'Vaccination', description: 'Stay protected with our vaccination services' },
    { icon: <FaAmbulance />, title: 'Ambulance Services', description: 'Quick and reliable ambulance service' },
];
const servicesthree = [
    { icon: <FaDollarSign />, title: 'Funding', description: 'Get the capital needed to grow' },
    { icon: <FaBullhorn />, title: 'Marketing', description: 'Build your brand and reach new customers' },
    { icon: <FaChartBar />, title: 'Growth Strategy', description: 'Plan your way to success with data-driven strategies' },
    { icon: <FaLightbulb />, title: 'Innovation', description: 'Create unique solutions that disrupt the market' },
];

const servicesTwo = [
    { icon: <FaCog />, title: 'Automation', description: 'Automate your workflows for efficiency' },
    { icon: <FaChartLine />, title: 'Analytics', description: 'Real-time analytics for better decision-making' },
    { icon: <FaTasks />, title: 'Project Management', description: 'Organize and manage your team\'s projects' },
    { icon: <FaUsers />, title: 'Customer Support', description: '24/7 support to keep your customers happy' },
];
const services = [
    { icon: <FaCloud />, title: 'Cloud Hosting', description: 'Reliable and scalable hosting services' },
    { icon: <FaRobot />, title: 'AI Solutions', description: 'Cutting-edge artificial intelligence solutions' },
    { icon: <FaLaptopCode />, title: 'Web Development', description: 'Full-stack web development' },
    { icon: <FaDatabase />, title: 'Database Management', description: 'Efficient database solutions' },
];



function ServicesComponents ({htmlCode,reactCode,SectionShow}){
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


export function ServiceOne(){
  return(
<>
<ServicesComponents
htmlCode={
String.raw
`

`
}
reactCode={
String.raw
`import { motion } from 'framer-motion';
import { FaCloud, FaRobot, FaLaptopCode, FaDatabase } from 'react-icons/fa';

const TechServicesComponent = () => {
  const services = [
    { icon: <FaCloud />, title: 'Cloud Hosting', description: 'Reliable and scalable hosting services' },
    { icon: <FaRobot />, title: 'AI Solutions', description: 'Cutting-edge artificial intelligence solutions' },
    { icon: <FaLaptopCode />, title: 'Web Development', description: 'Full-stack web development' },
    { icon: <FaDatabase />, title: 'Database Management', description: 'Efficient database solutions' },
  ];

  return (
   <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-700 p-10 rounded-lg shadow-lg dark:bg-gray-800">
         <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>
   
         <motion.div
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }}
         >
           {services.map((service, index) => (
             <motion.div
               key={index}
               className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
             >
               <div className="flex justify-center mb-4">
                 <div className="text-4xl text-teal-500 dark:text-teal-300">
                   {service.icon}
                 </div>
               </div>
               <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white">{service.title}</h3>
               <p className="text-center text-gray-600 dark:text-gray-300 mt-2">{service.description}</p>
               <motion.div
                 className="absolute inset-0 border-4 border-transparent group-hover:border-teal-500 rounded-lg transition-all duration-500"
                 whileHover={{ borderWidth: '4px', borderColor: '#38b2ac' }}
               ></motion.div>
             </motion.div>
           ))}
         </motion.div>
     </div>
  );
};

export default TechServicesComponent;

`
}
SectionShow={
<> 
<div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-700 p-10 rounded-lg shadow-lg dark:bg-gray-800">
      <div className=" flex flex-col gap-2 items-center mb-10">
        <h2 className='text-3xl font-medium '> Our Services</h2>
        <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="text-4xl text-teal-500 dark:text-teal-300">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white">{service.title}</h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-2">{service.description}</p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-teal-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#38b2ac' }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
</div>
</>
}


/>
</>
)
}

export function ServiceTwo(){
  return(
<>
<ServicesComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion';
import { FaCog, FaChartLine, FaTasks, FaUsers } from 'react-icons/fa';

const SaaSServicesComponent = () => {
  const servicesTwo = [
    { icon: <FaCog />, title: 'Automation', description: 'Automate your workflows for efficiency' },
    { icon: <FaChartLine />, title: 'Analytics', description: 'Real-time analytics for better decision-making' },
    { icon: <FaTasks />, title: 'Project Management', description: 'Organize and manage your team\'s projects' },
    { icon: <FaUsers />, title: 'Customer Support', description: '24/7 support to keep your customers happy' },
  ];

  return (
    <div className=" min-h-screen bg-gradient-to-r from-indigo-500 to-purple-700 p-10 rounded-lg shadow-lg dark:bg-gray-800">
       <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {servicesTwo.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="text-4xl text-indigo-500 dark:text-indigo-300">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white">{service.title}</h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-2">{service.description}</p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-indigo-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#4c51bf' }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SaaSServicesComponent;


`
}
SectionShow={
<> 
  <div className=" min-h-screen bg-gradient-to-r from-indigo-500 to-purple-700 p-10 rounded-lg shadow-lg dark:bg-gray-800">
       <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {servicesTwo.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="text-4xl text-indigo-500 dark:text-indigo-300">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white">{service.title}</h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-2">{service.description}</p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-indigo-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#4c51bf' }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
</>
}


/>
</>
)
}

export function ServiceThre(){
  return(
<>
<ServicesComponents
htmlCode={
String.raw
`

`
}
reactCode={
String.raw
`import { motion } from 'framer-motion';
import { FaDollarSign, FaBullhorn, FaChartBar, FaLightbulb } from 'react-icons/fa';

const StartupServicesComponent = () => {
  const servicesthree = [
    { icon: <FaDollarSign />, title: 'Funding', description: 'Get the capital needed to grow' },
    { icon: <FaBullhorn />, title: 'Marketing', description: 'Build your brand and reach new customers' },
    { icon: <FaChartBar />, title: 'Growth Strategy', description: 'Plan your way to success with data-driven strategies' },
    { icon: <FaLightbulb />, title: 'Innovation', description: 'Create unique solutions that disrupt the market' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-500 to-red-600 p-10 rounded-lg shadow-lg dark:bg-gray-800">
       <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {servicesthree.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }} // Scale effect on hover for the entire card
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-4xl text-yellow-500 dark:text-yellow-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2 }} // Scale effect on hover for the icon
              >
                {service.icon}
              </motion.div>
            </div>
            <motion.h3
              className="text-xl font-semibold text-center text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-300 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {service.description}
            </motion.p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-yellow-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#f6ad55' }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StartupServicesComponent;

`
}
SectionShow={
<> 
 <div className="min-h-screen bg-gradient-to-r from-yellow-500 to-red-600 p-10 rounded-lg shadow-lg dark:bg-gray-800">
       <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {servicesthree.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }} // Scale effect on hover for the entire card
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-4xl text-yellow-500 dark:text-yellow-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2 }} // Scale effect on hover for the icon
              >
                {service.icon}
              </motion.div>
            </div>
            <motion.h3
              className="text-xl font-semibold text-center text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-300 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {service.description}
            </motion.p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-yellow-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#f6ad55' }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
</>
}


/>
</>
)
}

export function ServiceFour(){
  return(
<>
<ServicesComponents
htmlCode={
String.raw
`

`
}
reactCode={
String.raw
`import { motion } from 'framer-motion';
import { FaStethoscope, FaHeartbeat, FaHandHoldingMedical, FaSyringe, FaAmbulance } from 'react-icons/fa';

const HealthcareServicesComponent = () => {
  const servicesFour = [
    { icon: <FaStethoscope />, title: 'Medical Consultation', description: 'Consult with top doctors online' },
    { icon: <FaHeartbeat />, title: 'Emergency Care', description: '24/7 emergency services when you need it most' },
    { icon: <FaHandHoldingMedical />, title: 'Patient Care', description: 'Dedicated care for patients at home or in the hospital' },
    { icon: <FaSyringe />, title: 'Vaccination', description: 'Stay protected with our vaccination services' },
    { icon: <FaAmbulance />, title: 'Ambulance Services', description: 'Quick and reliable ambulance service' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-green-600 p-10 rounded-lg shadow-lg dark:bg-gray-800">
       <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {servicesFour.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-4xl text-teal-500 dark:text-teal-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2 }} // Icon hover scale effect
              >
                {service.icon}
              </motion.div>
            </div>
            <motion.h3
              className="text-xl font-semibold text-center text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-300 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {service.description}
            </motion.p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-teal-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#38b2ac' }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HealthcareServicesComponent;

`
}
SectionShow={
<> 
  <div className="min-h-screen bg-gradient-to-r from-teal-500 to-green-600 p-10 rounded-lg shadow-lg dark:bg-gray-800">
       <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {servicesFour.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-4xl text-teal-500 dark:text-teal-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2 }} // Icon hover scale effect
              >
                {service.icon}
              </motion.div>
            </div>
            <motion.h3
              className="text-xl font-semibold text-center text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-300 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {service.description}
            </motion.p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-teal-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#38b2ac' }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
</>
}


/>
</>
)
}

export function ServiceFive(){
  return(
<>
<ServicesComponents
htmlCode={
String.raw
`

`
}
reactCode={
String.raw
`import { motion } from 'framer-motion';
import { FaSearch, FaBullhorn, FaShareAlt, FaEnvelope, FaChartLine } from 'react-icons/fa';

const DigitalMarketingServicesComponent = () => {
  const servicesFive = [
    { icon: <FaSearch />, title: 'SEO', description: 'Improve your website ranking on search engines' },
    { icon: <FaBullhorn />, title: 'PPC Advertising', description: 'Targeted ads to boost your business visibility' },
    { icon: <FaShareAlt />, title: 'Social Media Marketing', description: 'Engage your audience across social platforms' },
    { icon: <FaEnvelope />, title: 'Email Marketing', description: 'Personalized email campaigns to connect with customers' },
    { icon: <FaChartLine />, title: 'Analytics', description: 'Measure and optimize your marketing efforts' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-orange-500 p-10 rounded-lg shadow-lg dark:bg-gray-800">
       <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {servicesFive.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-4xl text-blue-500 dark:text-blue-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2 }} // Scale effect on icon hover
              >
                {service.icon}
              </motion.div>
            </div>
            <motion.h3
              className="text-xl font-semibold text-center text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-300 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {service.description}
            </motion.p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#2b6cb0' }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DigitalMarketingServicesComponent;

`
}
SectionShow={
<> 
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-orange-500 p-10 rounded-lg shadow-lg dark:bg-gray-800">
       <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {servicesFive.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-4xl text-blue-500 dark:text-blue-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2 }} // Scale effect on icon hover
              >
                {service.icon}
              </motion.div>
            </div>
            <motion.h3
              className="text-xl font-semibold text-center text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-300 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {service.description}
            </motion.p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#2b6cb0' }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
</>
}


/>
</>
)
}

export function ServiceSix(){
  return(
<>
<ServicesComponents
htmlCode={
String.raw
`

`
}
reactCode={
String.raw
`import { motion } from 'framer-motion';
import { FaPiggyBank, FaUsers, FaChartBar, FaShieldAlt, FaFileInvoiceDollar } from 'react-icons/fa';

const FinanceCorporateServicesComponent = () => {
  const servicesSix = [
    { icon: <FaPiggyBank />, title: 'Financial Planning', description: 'Plan your financial future with expert advice' },
    { icon: <FaUsers />, title: 'Corporate Consulting', description: 'Get business strategies that drive success' },
    { icon: <FaChartBar />, title: 'Investment Strategies', description: 'Maximize returns with tailored investment plans' },
    { icon: <FaShieldAlt />, title: 'Risk Management', description: 'Minimize business risks with our expert solutions' },
    { icon: <FaFileInvoiceDollar />, title: 'Tax Services', description: 'Simplify tax filing and planning with professionals' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-gray-600 p-10 rounded-lg shadow-lg dark:bg-gray-800">
       <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {servicesSix.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-4xl text-blue-500 dark:text-blue-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2 }} // Scale effect on icon hover
              >
                {service.icon}
              </motion.div>
            </div>
            <motion.h3
              className="text-xl font-semibold text-center text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-300 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {service.description}
            </motion.p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#2b6cb0' }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FinanceCorporateServicesComponent;

`
}
SectionShow={
<> 
   <div className="min-h-screen bg-gradient-to-r from-blue-900 to-gray-600 p-10 rounded-lg shadow-lg dark:bg-gray-800">
       <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {servicesSix.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-4xl text-blue-500 dark:text-blue-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2 }} // Scale effect on icon hover
              >
                {service.icon}
              </motion.div>
            </div>
            <motion.h3
              className="text-xl font-semibold text-center text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-300 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {service.description}
            </motion.p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#2b6cb0' }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
</>
}


/>
</>
)
}


export function ServiceSeven(){
  return(
<>
<ServicesComponents
htmlCode={
String.raw
`

`
}
reactCode={
String.raw
`import { motion } from 'framer-motion';
import { FaPaintBrush, FaLaptopCode, FaCamera, FaPen, FaFilm } from 'react-icons/fa';

const CreativePortfolioServicesComponent = () => {
  const servicesSeven = [
    { icon: <FaPaintBrush />, title: 'Graphic Design', description: 'Create stunning visuals and designs' },
    { icon: <FaLaptopCode />, title: 'Web Development', description: 'Build interactive and engaging websites' },
    { icon: <FaCamera />, title: 'Photography', description: 'Capture the essence of your story through photos' },
    { icon: <FaPen />, title: 'Branding', description: 'Craft a unique identity for your brand' },
    { icon: <FaFilm />, title: 'Animation', description: 'Bring your ideas to life with motion' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-pink-600 p-10 rounded-lg shadow-lg dark:bg-gray-800">
       <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {servicesSeven.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-4xl text-purple-500 dark:text-purple-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2 }} // Icon hover scale effect
              >
                {service.icon}
              </motion.div>
            </div>
            <motion.h3
              className="text-xl font-semibold text-center text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-300 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {service.description}
            </motion.p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-purple-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#9b4d96' }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CreativePortfolioServicesComponent;

`
}
SectionShow={
<> 
  <div className="min-h-screen bg-gradient-to-r from-purple-600 to-pink-600 p-10 rounded-lg shadow-lg dark:bg-gray-800">
       <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {servicesSeven.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-4xl text-purple-500 dark:text-purple-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2 }} // Icon hover scale effect
              >
                {service.icon}
              </motion.div>
            </div>
            <motion.h3
              className="text-xl font-semibold text-center text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-300 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {service.description}
            </motion.p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-purple-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#9b4d96' }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
</>
}


/>
</>
)
}


export function ServiceEight(){
  return(
<>
<ServicesComponents
htmlCode={
String.raw
`

`
}
reactCode={
String.raw
`import { motion } from 'framer-motion';
import { FaMobileAlt, FaRobot, FaCloud, FaShieldAlt } from 'react-icons/fa';
import { SiBlockchaindotcom } from "react-icons/si";

const TechAgencyMatrixServicesComponent = () => {
  const servicesEight = [
    { icon: <FaMobileAlt />, title: 'App Development', description: 'Innovative mobile apps for modern businesses' },
    { icon: <FaRobot />, title: 'AI & Machine Learning', description: 'Automate and optimize with cutting-edge AI' },
    { icon: <FaCloud />, title: 'Cloud Computing', description: 'Seamless and scalable cloud solutions' },
    { icon: <SiBlockchaindotcom />, title: 'Blockchain Development', description: 'Decentralized and secure blockchain solutions' },
    { icon: <FaShieldAlt />, title: 'Cybersecurity', description: 'Protect your digital assets with robust security' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-black p-10 rounded-lg shadow-lg dark:bg-gray-800">
       <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {servicesEight.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-black dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-4xl text-green-500 dark:text-green-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2 }} // Scale effect on icon hover
              >
                {service.icon}
              </motion.div>
            </div>
            <motion.h3
              className="text-xl font-semibold text-center text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-300 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {service.description}
            </motion.p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-green-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#32cd32' }} // Neon green border
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechAgencyMatrixServicesComponent;

`
}
SectionShow={
<> 
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-black p-10 rounded-lg shadow-lg dark:bg-gray-800">
       <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {servicesEight.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-black dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-4xl text-green-500 dark:text-green-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2 }} // Scale effect on icon hover
              >
                {service.icon}
              </motion.div>
            </div>
            <motion.h3
              className="text-xl font-semibold text-center text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-300 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {service.description}
            </motion.p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-green-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#32cd32' }} // Neon green border
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
</>
}


/>
</>
)
}








