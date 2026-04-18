import React from 'react'
import { BsSun, BsMoon } from 'react-icons/bs';

export const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

  return (
    <div className={darkMode ? 'dark' : ''}>
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500">
      
      {/* Toggle Button */}
      <div className="p-4 flex justify-end">
        <button onClick={toggleDarkMode} className="text-2xl">
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>
      </div>

      {/* Your App Content */}
      <h1 className="text-center text-3xl font-bold">Hello {darkMode ? 'Dark' : 'Light'} World</h1>
    </div>
  </div>
  )
}
