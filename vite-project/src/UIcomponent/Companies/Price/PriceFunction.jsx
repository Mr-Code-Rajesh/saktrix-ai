import { motion } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif';
import { useState } from 'react';
import { FaCheckCircle, FaRocket, FaStar ,FaCopy} from 'react-icons/fa';
import { FaRobot, FaMicrochip, FaServer } from 'react-icons/fa';
import { FaUserGraduate, FaChalkboardTeacher, FaUniversity, FaCheck } from 'react-icons/fa';
import { FaHeartbeat, FaUserMd, FaHospitalAlt } from 'react-icons/fa';
import { FaShoppingCart, FaStore, FaHeadset } from 'react-icons/fa';
import { FaWallet, FaChartLine } from 'react-icons/fa';
import { FaPenNib, FaBrush, FaPalette } from 'react-icons/fa';
import { FaMapMarkedAlt, FaPlaneDeparture } from 'react-icons/fa';


const plansEight = [
  {
    name: 'Explorer',
    price: '$49/trip',
    icon: <FaMapMarkedAlt className="text-yellow-500 text-2xl" />,
    features: ['Access to Group Tours', 'Daily Itineraries', 'Basic Travel Insurance'],
    bg: 'from-yellow-100 to-orange-200 dark:from-yellow-900 dark:to-orange-900',
    cta: 'Book Now',
  },
  {
    name: 'Jetsetter',
    price: '$149/trip',
    icon: <FaPlaneDeparture className="text-blue-500 text-2xl" />,
    features: [
      'Flight Booking Help',
      'Priority Hotel Deals',
      'Local Sim & Support',
      'Premium Itineraries',
    ],
    bg: 'from-blue-100 to-cyan-200 dark:from-blue-900 dark:to-cyan-900',
    highlight: true,
    cta: 'Upgrade',
  },
  {
    name: 'VIP Pass',
    price: '$349/trip',
    icon: <FaStar className="text-purple-500 text-2xl" />,
    features: [
      'Private Travel Concierge',
      'Custom Routes',
      'VIP Event Entry',
      '24/7 Priority Support',
    ],
    bg: 'from-purple-100 to-pink-200 dark:from-purple-900 dark:to-pink-900',
    cta: 'Join VIP',
  },
];

const plansSeven = [
  {
    name: 'Basic',
    price: '$12/mo',
    icon: <FaPenNib className="text-indigo-500 text-2xl" />,
    features: ['Portfolio Hosting', 'Custom Domain', 'Basic SEO'],
    bg: 'from-indigo-200 to-indigo-300 dark:from-indigo-900 dark:to-indigo-800',
    cta: 'Get Started',
  },
  {
    name: 'Pro Creator',
    price: '$34/mo',
    icon: <FaBrush className="text-pink-500 text-2xl" />,
    features: [
      'Client Galleries',
      'HD Image Hosting',
      'Blog & Newsletter',
      'Priority Support',
    ],
    bg: 'from-pink-200 to-pink-300 dark:from-pink-900 dark:to-pink-800',
    highlight: true,
    cta: 'Go Pro',
  },
  {
    name: 'Agency Bundle',
    price: '$99/mo',
    icon: <FaPalette className="text-purple-500 text-2xl" />,
    features: [
      'Unlimited Projects',
      'Team Collaboration',
      'White-label Design',
      'Account Manager',
    ],
    bg: 'from-purple-200 to-purple-300 dark:from-purple-900 dark:to-purple-800',
    cta: 'Talk to Us',
  },
];

const plansSix = [
  {
    name: 'Personal',
    price: '$0/mo',
    icon: <FaWallet className="text-emerald-500 text-2xl" />,
    features: ['Basic Analytics', 'Spend Tracking', 'Standard Reports'],
    bg: 'from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800',
    cta: 'Start Free',
  },
  {
    name: 'Business',
    price: '$49/mo',
    icon: <FaChartLine className="text-blue-500 text-2xl" />,
    features: [
      'Multi-Account Support',
      'Custom Alerts',
      'Advanced Insights',
      'Priority Email Support',
    ],
    bg: 'from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800',
    highlight: true,
    cta: 'Upgrade Plan',
  },
  {
    name: 'Enterprise API',
    price: 'Custom',
    icon: <FaServer className="text-gray-600 dark:text-gray-300 text-2xl" />,
    features: [
      'Unlimited API Access',
      'Real-Time Sync',
      'Dedicated Manager',
      'SLA & Security Suite',
    ],
    bg: 'from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700',
    cta: 'Contact Sales',
  },
];

const plansTwo = [
  {
    name: 'Student',
    price: '$9/mo',
    icon: <FaUserGraduate className="text-indigo-500 text-2xl" />,
    features: ['Access to courses', 'Community support', 'Progress tracking'],
    bg: 'from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800',
    cta: 'Join Now',
  },
  {
    name: 'Teacher',
    price: '$29/mo',
    icon: <FaChalkboardTeacher className="text-purple-600 text-2xl" />,
    features: ['Course creation', 'Student analytics', 'Priority support'],
    bg: 'from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800',
    cta: 'Start Teaching',
    highlight: true,
  },
  {
    name: 'Institution',
    price: 'Custom',
    icon: <FaUniversity className="text-green-600 text-2xl" />,
    features: ['Multiple seats', 'Admin dashboard', 'Dedicated manager'],
    bg: 'from-green-100 to-green-200 dark:from-green-900 dark:to-green-800',
    cta: 'Contact Us',
  },
];

const plans = [
  {
    name: 'Basic',
    price: '$19/mo',
    icon: <FaStar className="text-blue-500" />,
    features: ['1 Project', 'Basic Support', 'Email Notifications'],
    gradient: 'from-white to-gray-100 dark:from-gray-900 dark:to-gray-800',
  },
  {
    name: 'Pro',
    price: '$49/mo',
    icon: <FaRocket className="text-purple-600" />,
    features: ['10 Projects', 'Priority Support', 'Team Access', 'Analytics'],
    gradient: 'from-purple-500 to-indigo-600 dark:from-purple-700 dark:to-indigo-800',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    icon: <FaCheckCircle className="text-green-500" />,
    features: ['Unlimited Projects', 'Dedicated Manager', 'Custom Integrations'],
    gradient: 'from-white to-gray-100 dark:from-gray-900 dark:to-gray-800',
  },
];

const plansThree = [
  {
    name: 'Starter',
    price: '$29/mo',
    icon: <FaRobot className="text-blue-500 text-2xl" />,
    features: [
      '5,000 API calls/mo',
      'Basic NLP & Vision',
      'Community Support',
    ],
    bg: 'from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800',
    cta: 'Start Free',
  },
  {
    name: 'Pro AI',
    price: '$99/mo',
    icon: <FaMicrochip className="text-purple-500 text-2xl" />,
    features: [
      '50,000 API calls/mo',
      'Advanced AI Models',
      'Priority Support',
      'Team Collaboration',
    ],
    bg: 'from-purple-600 to-indigo-700 dark:from-purple-800 dark:to-indigo-900',
    highlight: true,
    cta: 'Go Pro',
  },
  {
    name: 'Enterprise AI',
    price: 'Custom',
    icon: <FaServer className="text-green-500 text-2xl" />,
    features: [
      'Unlimited API calls',
      'Dedicated AI Ops',
      '24/7 Support',
      'Custom Infrastructure',
    ],
    bg: 'from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800',
    cta: 'Contact Us',
  },
];

const plansFour = [
  {
    name: 'Basic Care',
    price: '$39/mo',
    icon: <FaHeartbeat className="text-sky-500 text-2xl" />,
    features: ['1 Virtual Visit/mo', 'Basic Reports', '24/7 Chat Support'],
    gradient: 'from-sky-100 to-sky-200 dark:from-sky-900 dark:to-sky-800',
    cta: 'Get Started',
  },
  {
    name: 'Plus Care',
    price: '$89/mo',
    icon: <FaUserMd className="text-teal-500 text-2xl" />,
    features: [
      '3 Virtual Visits/mo',
      'Advanced Reports',
      'Wellness Dashboard',
      'Priority Doctor Access',
    ],
    gradient: 'from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800',
    highlight: true,
    cta: 'Subscribe Now',
  },
  {
    name: 'Full Care',
    price: 'Custom',
    icon: <FaHospitalAlt className="text-green-600 text-2xl" />,
    features: [
      'Unlimited Visits',
      'Dedicated Physician',
      'Lab Integration',
      'Custom Health Plan',
    ],
    gradient: 'from-green-100 to-green-200 dark:from-green-900 dark:to-green-800',
    cta: 'Contact Us',
  },
];

const plansFive = [
  {
    name: 'Starter Shop',
    price: '$19/mo',
    icon: <FaShoppingCart className="text-pink-500 text-2xl" />,
    features: ['Up to 50 Products', 'Basic Storefront', 'Email Support'],
    bg: 'from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800',
    cta: 'Start Selling',
  },
  {
    name: 'Business Pro',
    price: '$79/mo',
    icon: <FaStore className="text-amber-500 text-2xl" />,
    features: [
      'Unlimited Products',
      'Advanced Themes',
      'Analytics Dashboard',
      'Priority Support',
    ],
    bg: 'from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-800',
    highlight: true,
    cta: 'Upgrade Now',
  },
  {
    name: 'Marketplace Enterprise',
    price: 'Custom',
    icon: <FaHeadset className="text-teal-500 text-2xl" />,
    features: [
      'Multi-vendor Support',
      'White-label Branding',
      'Dedicated Manager',
      '24/7 Assistance',
    ],
    bg: 'from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800',
    cta: 'Contact Sales',
  },
];




function PriceComponents ({htmlCode,reactCode,SectionShow}){
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

{/* must Covert to (Pure HTML + Tailwind + Font Awesome or if need addtional css use inside the header style tag  other free icons cdn as your wish)*/}

export function PricingDemoOne(){
  return(
<>
<PriceComponents
htmlCode={
`
`
}
reactCode={
String.raw`
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaRocket, FaStar } from 'react-icons/fa';

const plans = [
  {
    name: 'Basic',
    price: '$19/mo',
    icon: <FaStar className="text-blue-500" />,
    features: ['1 Project', 'Basic Support', 'Email Notifications'],
    gradient: 'from-white to-gray-100 dark:from-gray-900 dark:to-gray-800',
  },
  {
    name: 'Pro',
    price: '$49/mo',
    icon: <FaRocket className="text-purple-600" />,
    features: ['10 Projects', 'Priority Support', 'Team Access', 'Analytics'],
    gradient: 'from-purple-500 to-indigo-600 dark:from-purple-700 dark:to-indigo-800',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    icon: <FaCheckCircle className="text-green-500" />,
    features: ['Unlimited Projects', 'Dedicated Manager', 'Custom Integrations'],
    gradient: 'from-white to-gray-100 dark:from-gray-900 dark:to-gray-800',
  },
];

const SaaSPricing = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-gray-900 dark:text-white"
        >
          Flexible Plans for Every Team
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Choose a plan that works best for your SaaS business.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={\`rounded-2xl shadow-xl p-8 transition-colors duration-300 bg-gradient-to-br \${plan.gradient} \${
              plan.highlight ? 'text-white' : 'text-gray-800 dark:text-white'
            }\`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              {plan.icon}
            </div>
            <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
            <ul className="space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={\`mt-6 w-full py-2 px-4 rounded-lg font-medium transition \${
                plan.highlight
                  ? 'bg-white text-indigo-600 hover:bg-gray-100'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }\`}
            >
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SaaSPricing;

`}

SectionShow={
 <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-gray-900 dark:text-white"
        >
          Flexible Plans for Every Team
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Choose a plan that works best for your SaaS business.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-2xl shadow-xl p-8 transition-colors duration-300 bg-gradient-to-br ${plan.gradient} ${
              plan.highlight ? 'text-white' : 'text-gray-800 dark:text-white'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              {plan.icon}
            </div>
            <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
            <ul className="space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full py-2 px-4 rounded-lg font-medium transition ${
                plan.highlight
                  ? 'bg-white text-indigo-600 hover:bg-gray-100'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
            </button>
          </motion.div>
        ))}
      </div>
 </div>
}/>

</>
)
}

export function PricingDemoTwo(){
  return(
<>
<PriceComponents
htmlCode={
String.raw`


`}

reactCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaChalkboardTeacher, FaUniversity, FaCheck } from 'react-icons/fa';

const plansTwo = [
  {
    name: 'Student',
    price: '$9/mo',
    icon: <FaUserGraduate className="text-indigo-500 text-2xl" />,
    features: ['Access to courses', 'Community support', 'Progress tracking'],
    bg: 'from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800',
    cta: 'Join Now',
  },
  {
    name: 'Teacher',
    price: '$29/mo',
    icon: <FaChalkboardTeacher className="text-purple-600 text-2xl" />,
    features: ['Course creation', 'Student analytics', 'Priority support'],
    bg: 'from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800',
    cta: 'Start Teaching',
    highlight: true,
  },
  {
    name: 'Institution',
    price: 'Custom',
    icon: <FaUniversity className="text-green-600 text-2xl" />,
    features: ['Multiple seats', 'Admin dashboard', 'Dedicated manager'],
    bg: 'from-green-100 to-green-200 dark:from-green-900 dark:to-green-800',
    cta: 'Contact Us',
  },
];

const EdTechPricing = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Empower Your Learning Journey
        </motion.h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Choose a plan that fits your educational needs.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {plansTwo.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className={\`p-8 rounded-2xl shadow-md bg-gradient-to-br \${plan.bg} transition duration-300 \${
              plan.highlight
                ? 'border-4 border-purple-400 dark:border-purple-600'
                : ''
            }\`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              {plan.icon}
            </div>

            <p className="text-2xl font-extrabold mb-4 text-gray-800 dark:text-white">
              {plan.price}
            </p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <FaCheck className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={\`w-full py-2 rounded-lg font-semibold transition-all \${
                plan.highlight
                  ? 'bg-white text-purple-600 hover:bg-purple-100'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }\`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EdTechPricing;


`}
SectionShow={
<section className="py-16 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Empower Your Learning Journey
        </motion.h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Choose a plan that fits your educational needs.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {plansTwo.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className={`p-8 rounded-2xl shadow-md bg-gradient-to-br ${plan.bg} transition duration-300 ${
              plan.highlight
                ? 'border-4 border-purple-400 dark:border-purple-600'
                : ''
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              {plan.icon}
            </div>

            <p className="text-2xl font-extrabold mb-4 text-gray-800 dark:text-white">
              {plan.price}
            </p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <FaCheck className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 rounded-lg font-semibold transition-all ${
                plan.highlight
                  ? 'bg-white text-purple-600 hover:bg-purple-100'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
</section>
}
/>
</>
  )
}

export function PricingDemoThree(){
  return(
<>
<PriceComponents
htmlCode={
String.raw`


`}

reactCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaMicrochip, FaServer, FaCheckCircle } from 'react-icons/fa';

const plansThree = [
  {
    name: 'Starter',
    price: '$29/mo',
    icon: <FaRobot className="text-blue-500 text-2xl" />,
    features: [
      '5,000 API calls/mo',
      'Basic NLP & Vision',
      'Community Support',
    ],
    bg: 'from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800',
    cta: 'Start Free',
  },
  {
    name: 'Pro AI',
    price: '$99/mo',
    icon: <FaMicrochip className="text-purple-500 text-2xl" />,
    features: [
      '50,000 API calls/mo',
      'Advanced AI Models',
      'Priority Support',
      'Team Collaboration',
    ],
    bg: 'from-purple-600 to-indigo-700 dark:from-purple-800 dark:to-indigo-900',
    highlight: true,
    cta: 'Go Pro',
  },
  {
    name: 'Enterprise AI',
    price: 'Custom',
    icon: <FaServer className="text-green-500 text-2xl" />,
    features: [
      'Unlimited API calls',
      'Dedicated AI Ops',
      '24/7 Support',
      'Custom Infrastructure',
    ],
    bg: 'from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800',
    cta: 'Contact Us',
  },
];

const AIPricing = () => {
  return (
    <section className="py-20 px-6 bg-black dark:bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-white"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Power Your Platform with AI
        </motion.h2>
        <p className="mt-4 text-lg text-gray-400">
          Flexible plans for AI startups, devs, and enterprise teams.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {plansThree.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className={\`rounded-2xl p-8 shadow-lg bg-gradient-to-br \${plan.bg} \${
              plan.highlight ? 'ring-4 ring-purple-500' : ''
            }\`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              {plan.icon}
            </div>

            <p className="text-3xl font-bold text-white mb-6">{plan.price}</p>

            <ul className="space-y-4 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2 text-gray-300">
                  <FaCheckCircle className="text-green-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={\`w-full py-2 px-4 text-lg font-semibold rounded-lg transition \${
                plan.highlight
                  ? 'bg-white text-indigo-700 hover:bg-indigo-100'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }\`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AIPricing;


`}
SectionShow={
  <section className="py-20 px-6 bg-black dark:bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-white"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Power Your Platform with AI
        </motion.h2>
        <p className="mt-4 text-lg text-gray-400">
          Flexible plans for AI startups, devs, and enterprise teams.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {plansThree.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl p-8 shadow-lg bg-gradient-to-br ${plan.bg} ${
              plan.highlight ? 'ring-4 ring-purple-500' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              {plan.icon}
            </div>

            <p className="text-3xl font-bold text-white mb-6">{plan.price}</p>

            <ul className="space-y-4 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2 text-gray-300">
                  <FaCheckCircle className="text-green-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 px-4 text-lg font-semibold rounded-lg transition ${
                plan.highlight
                  ? 'bg-white text-indigo-700 hover:bg-indigo-100'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
  </section>
}
/>
</>
  )
}

export function PricingDemoFour(){
  return(
<>
<PriceComponents
htmlCode={
String.raw`


`}

reactCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaUserMd, FaHospitalAlt, FaCheck } from 'react-icons/fa';

const plansFour = [
  {
    name: 'Basic Care',
    price: '$39/mo',
    icon: <FaHeartbeat className="text-sky-500 text-2xl" />,
    features: ['1 Virtual Visit/mo', 'Basic Reports', '24/7 Chat Support'],
    gradient: 'from-sky-100 to-sky-200 dark:from-sky-900 dark:to-sky-800',
    cta: 'Get Started',
  },
  {
    name: 'Plus Care',
    price: '$89/mo',
    icon: <FaUserMd className="text-teal-500 text-2xl" />,
    features: [
      '3 Virtual Visits/mo',
      'Advanced Reports',
      'Wellness Dashboard',
      'Priority Doctor Access',
    ],
    gradient: 'from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800',
    highlight: true,
    cta: 'Subscribe Now',
  },
  {
    name: 'Full Care',
    price: 'Custom',
    icon: <FaHospitalAlt className="text-green-600 text-2xl" />,
    features: [
      'Unlimited Visits',
      'Dedicated Physician',
      'Lab Integration',
      'Custom Health Plan',
    ],
    gradient: 'from-green-100 to-green-200 dark:from-green-900 dark:to-green-800',
    cta: 'Contact Us',
  },
];

const HealthcarePricing = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Affordable Healthcare Plans
        </motion.h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Choose a plan that fits your wellness journey.
        </p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {plansFour.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className={\`p-8 rounded-2xl shadow-md bg-gradient-to-br \${plan.gradient} transition \${
              plan.highlight ? 'ring-4 ring-teal-400 dark:ring-teal-600' : ''
            }\`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              {plan.icon}
            </div>
            <p className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              {plan.price}
            </p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <FaCheck className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={\`w-full py-2 px-4 text-base font-semibold rounded-lg transition \${
                plan.highlight
                  ? 'bg-white text-teal-600 hover:bg-teal-100'
                  : 'bg-teal-600 text-white hover:bg-teal-700'
              }\`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HealthcarePricing;


`}
SectionShow={
 <section className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Affordable Healthcare Plans
        </motion.h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Choose a plan that fits your wellness journey.
        </p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {plansFour.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className={`p-8 rounded-2xl shadow-md bg-gradient-to-br ${plan.gradient} transition ${
              plan.highlight ? 'ring-4 ring-teal-400 dark:ring-teal-600' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              {plan.icon}
            </div>
            <p className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              {plan.price}
            </p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <FaCheck className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 px-4 text-base font-semibold rounded-lg transition ${
                plan.highlight
                  ? 'bg-white text-teal-600 hover:bg-teal-100'
                  : 'bg-teal-600 text-white hover:bg-teal-700'
              }`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
}

/>
</>
  )
}

export function PricingDemoFive(){
  return(
<>
<PriceComponents
htmlCode={
String.raw`


`}

reactCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaStore, FaHeadset, FaCheck } from 'react-icons/fa';

const plansFive = [
  {
    name: 'Starter Shop',
    price: '$19/mo',
    icon: <FaShoppingCart className="text-pink-500 text-2xl" />,
    features: ['Up to 50 Products', 'Basic Storefront', 'Email Support'],
    bg: 'from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800',
    cta: 'Start Selling',
  },
  {
    name: 'Business Pro',
    price: '$79/mo',
    icon: <FaStore className="text-amber-500 text-2xl" />,
    features: [
      'Unlimited Products',
      'Advanced Themes',
      'Analytics Dashboard',
      'Priority Support',
    ],
    bg: 'from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-800',
    highlight: true,
    cta: 'Upgrade Now',
  },
  {
    name: 'Marketplace Enterprise',
    price: 'Custom',
    icon: <FaHeadset className="text-teal-500 text-2xl" />,
    features: [
      'Multi-vendor Support',
      'White-label Branding',
      'Dedicated Manager',
      '24/7 Assistance',
    ],
    bg: 'from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800',
    cta: 'Contact Sales',
  },
];

const EcommercePricing = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Scale Your Storefront with Confidence
        </motion.h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Flexible pricing to grow your e-commerce business.
        </p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {plansFive.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04 }}
            className={\`p-8 rounded-2xl shadow-lg bg-gradient-to-br \${plan.bg} \${
              plan.highlight ? 'ring-4 ring-amber-400 dark:ring-amber-600' : ''
            } transition-all\`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              {plan.icon}
            </div>

            <p className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              {plan.price}
            </p>

            <ul className="space-y-4 mb-6">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                >
                  <FaCheck className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={\`w-full py-2 px-4 text-base font-semibold rounded-lg transition \${
                plan.highlight
                  ? 'bg-white text-amber-600 hover:bg-amber-100'
                  : 'bg-amber-500 text-white hover:bg-amber-600'
              }\`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EcommercePricing;


`}

SectionShow={
 <section className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Scale Your Storefront with Confidence
        </motion.h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Flexible pricing to grow your e-commerce business.
        </p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {plansFive.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04 }}
            className={`p-8 rounded-2xl shadow-lg bg-gradient-to-br ${plan.bg} ${
              plan.highlight ? 'ring-4 ring-amber-400 dark:ring-amber-600' : ''
            } transition-all`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              {plan.icon}
            </div>

            <p className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              {plan.price}
            </p>

            <ul className="space-y-4 mb-6">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                >
                  <FaCheck className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 px-4 text-base font-semibold rounded-lg transition ${
                plan.highlight
                  ? 'bg-white text-amber-600 hover:bg-amber-100'
                  : 'bg-amber-500 text-white hover:bg-amber-600'
              }`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
}
/>
</>
  )
}

export function PricingDemoSix(){
  return(
<>
<PriceComponents
htmlCode={
String.raw`


`}

reactCode={
String.raw
`
import React from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaChartLine, FaServer, FaCheckCircle } from 'react-icons/fa';

const plansSix = [
  {
    name: 'Personal',
    price: '$0/mo',
    icon: <FaWallet className="text-emerald-500 text-2xl" />,
    features: ['Basic Analytics', 'Spend Tracking', 'Standard Reports'],
    bg: 'from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800',
    cta: 'Start Free',
  },
  {
    name: 'Business',
    price: '$49/mo',
    icon: <FaChartLine className="text-blue-500 text-2xl" />,
    features: [
      'Multi-Account Support',
      'Custom Alerts',
      'Advanced Insights',
      'Priority Email Support',
    ],
    bg: 'from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800',
    highlight: true,
    cta: 'Upgrade Plan',
  },
  {
    name: 'Enterprise API',
    price: 'Custom',
    icon: <FaServer className="text-gray-600 dark:text-gray-300 text-2xl" />,
    features: [
      'Unlimited API Access',
      'Real-Time Sync',
      'Dedicated Manager',
      'SLA & Security Suite',
    ],
    bg: 'from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700',
    cta: 'Contact Sales',
  },
];

const FinancePricing = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transparent Plans for Every Financial Goal
        </motion.h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Whether you're budgeting, scaling, or integrating — we’ve got a tier for you.
        </p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {plansSix.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04 }}
            className={\`p-8 rounded-2xl shadow-md bg-gradient-to-br \${plan.bg} \${
              plan.highlight ? 'ring-4 ring-blue-400 dark:ring-blue-600' : ''
            } transition-all\`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              {plan.icon}
            </div>

            <p className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              {plan.price}
            </p>

            <ul className="space-y-4 mb-6">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                >
                  <FaCheckCircle className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={\`w-full py-2 px-4 text-base font-semibold rounded-lg transition \${
                plan.highlight
                  ? 'bg-white text-blue-700 hover:bg-blue-100'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }\`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FinancePricing;

`}
SectionShow={
 <section className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transparent Plans for Every Financial Goal
        </motion.h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Whether you're budgeting, scaling, or integrating — we’ve got a tier for you.
        </p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {plansSix.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04 }}
            className={`p-8 rounded-2xl shadow-md bg-gradient-to-br ${plan.bg} ${
              plan.highlight ? 'ring-4 ring-blue-400 dark:ring-blue-600' : ''
            } transition-all`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              {plan.icon}
            </div>

            <p className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              {plan.price}
            </p>

            <ul className="space-y-4 mb-6">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                >
                  <FaCheckCircle className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 px-4 text-base font-semibold rounded-lg transition ${
                plan.highlight
                  ? 'bg-white text-blue-700 hover:bg-blue-100'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
  </section>
}

/>
</>
  )
}

export function PricingDemoSeven(){
  return(
<>
<PriceComponents
htmlCode={
String.raw`


`}

reactCode={
String.raw
`
import React from 'react';
import { motion } from 'framer-motion';
import { FaPenNib, FaBrush, FaPalette, FaCheck } from 'react-icons/fa';

const plansSeven = [
  {
    name: 'Basic',
    price: '$12/mo',
    icon: <FaPenNib className="text-indigo-500 text-2xl" />,
    features: ['Portfolio Hosting', 'Custom Domain', 'Basic SEO'],
    bg: 'from-indigo-200 to-indigo-300 dark:from-indigo-900 dark:to-indigo-800',
    cta: 'Get Started',
  },
  {
    name: 'Pro Creator',
    price: '$34/mo',
    icon: <FaBrush className="text-pink-500 text-2xl" />,
    features: [
      'Client Galleries',
      'HD Image Hosting',
      'Blog & Newsletter',
      'Priority Support',
    ],
    bg: 'from-pink-200 to-pink-300 dark:from-pink-900 dark:to-pink-800',
    highlight: true,
    cta: 'Go Pro',
  },
  {
    name: 'Agency Bundle',
    price: '$99/mo',
    icon: <FaPalette className="text-purple-500 text-2xl" />,
    features: [
      'Unlimited Projects',
      'Team Collaboration',
      'White-label Design',
      'Account Manager',
    ],
    bg: 'from-purple-200 to-purple-300 dark:from-purple-900 dark:to-purple-800',
    cta: 'Talk to Us',
  },
];

const CreativePricing = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-zinc-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Design Plans That Grow With You
        </motion.h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">
          Whether you're freelancing or building a studio, pick the perfect portfolio plan.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {plansSeven.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className={\`rounded-3xl p-8 shadow-lg bg-gradient-to-br \${plan.bg} \${
              plan.highlight ? 'ring-4 ring-pink-400 dark:ring-pink-600' : ''
            } backdrop-blur-md bg-opacity-60 transition-all\`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                {plan.name}
              </h3>
              {plan.icon}
            </div>

            <p className="text-3xl font-semibold text-zinc-800 dark:text-white mb-6">
              {plan.price}
            </p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-zinc-700 dark:text-zinc-300">
                  <FaCheck className="text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={\`w-full py-2 px-4 font-medium rounded-lg \${
                plan.highlight
                  ? 'bg-white text-pink-600 hover:bg-pink-100'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              } transition \`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CreativePricing;

`}

SectionShow={
<section className="py-20 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-zinc-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Design Plans That Grow With You
        </motion.h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">
          Whether you're freelancing or building a studio, pick the perfect portfolio plan.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {plansSeven.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl p-8 shadow-lg bg-gradient-to-br ${plan.bg} ${
              plan.highlight ? 'ring-4 ring-pink-400 dark:ring-pink-600' : ''
            } backdrop-blur-md bg-opacity-60 transition-all`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                {plan.name}
              </h3>
              {plan.icon}
            </div>

            <p className="text-3xl font-semibold text-zinc-800 dark:text-white mb-6">
              {plan.price}
            </p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-zinc-700 dark:text-zinc-300">
                  <FaCheck className="text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 px-4 font-medium rounded-lg ${
                plan.highlight
                  ? 'bg-white text-pink-600 hover:bg-pink-100'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              } transition`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
</section>
}

/>
</>
  )
}

export function PricingDemoEight(){
  return(
<>
<PriceComponents
htmlCode={
String.raw`


`}

reactCode={
String.raw
`
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaPlaneDeparture, FaStar, FaCheck } from 'react-icons/fa';

const plansEight = [
  {
    name: 'Explorer',
    price: '$49/trip',
    icon: <FaMapMarkedAlt className="text-yellow-500 text-2xl" />,
    features: ['Access to Group Tours', 'Daily Itineraries', 'Basic Travel Insurance'],
    bg: 'from-yellow-100 to-orange-200 dark:from-yellow-900 dark:to-orange-900',
    cta: 'Book Now',
  },
  {
    name: 'Jetsetter',
    price: '$149/trip',
    icon: <FaPlaneDeparture className="text-blue-500 text-2xl" />,
    features: [
      'Flight Booking Help',
      'Priority Hotel Deals',
      'Local Sim & Support',
      'Premium Itineraries',
    ],
    bg: 'from-blue-100 to-cyan-200 dark:from-blue-900 dark:to-cyan-900',
    highlight: true,
    cta: 'Upgrade',
  },
  {
    name: 'VIP Pass',
    price: '$349/trip',
    icon: <FaStar className="text-purple-500 text-2xl" />,
    features: [
      'Private Travel Concierge',
      'Custom Routes',
      'VIP Event Entry',
      '24/7 Priority Support',
    ],
    bg: 'from-purple-100 to-pink-200 dark:from-purple-900 dark:to-pink-900',
    cta: 'Join VIP',
  },
];

const TravelPricing = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your Journey Package
        </motion.h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          From explorers to elite travelers — we’ve got your trip mapped out.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {plansEight.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={\`p-8 rounded-3xl shadow-lg bg-gradient-to-br \${plan.bg} \${
              plan.highlight ? 'ring-4 ring-blue-400 dark:ring-blue-600' : ''
            } transition-all \`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              {plan.icon}
            </div>

            <p className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              {plan.price}
            </p>

            <ul className="space-y-4 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                  <FaCheck className="text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={\`w-full py-2 px-4 font-semibold rounded-lg \${
                plan.highlight
                  ? 'bg-white text-blue-700 hover:bg-blue-100'
                  : 'bg-yellow-600 text-white hover:bg-yellow-700'
              } transition \`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TravelPricing;

`}

SectionShow={
 <section className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your Journey Package
        </motion.h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          From explorers to elite travelers — we’ve got your trip mapped out.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {plansEight.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`p-8 rounded-3xl shadow-lg bg-gradient-to-br ${plan.bg} ${
              plan.highlight ? 'ring-4 ring-blue-400 dark:ring-blue-600' : ''
            } transition-all`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              {plan.icon}
            </div>

            <p className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              {plan.price}
            </p>

            <ul className="space-y-4 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                  <FaCheck className="text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 px-4 font-semibold rounded-lg ${
                plan.highlight
                  ? 'bg-white text-blue-700 hover:bg-blue-100'
                  : 'bg-yellow-600 text-white hover:bg-yellow-700'
              } transition`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
 </section>
}

/>
</>
  )
}



