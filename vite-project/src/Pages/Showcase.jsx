// File: src/pages/Components.jsx

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { CardList } from '../Component/CardDesign';


const componentsList = [
  { id: 'buttons', name: 'Buttons', instructions: 'Use for actions, CTAs' },
  { id: 'cards', name: 'Cards', instructions: 'Use to display grouped content' },
  { id: 'modals', name: 'Modals', instructions: 'Use for dialogs and popups' },
  { id: 'input', name: 'Inputs', instructions: 'Use for collecting user input' },
  { id: 'inp', name: 'Inputs', instructions: 'Use for collecting user input' },
  { id: 'inpufff', name: 'Inputs', instructions: 'Use for collecting user input' },
  { id: 'inpufe', name: 'Inputs', instructions: 'Use for collecting user input' },
  { id: 'inputgg', name: 'Inputs', instructions: 'Use for collecting user input' },
  { id: 'inputsc', name: 'Inputs', instructions: 'Use for collecting user input' },
  { id: 'inputshhh', name: 'Inputs', instructions: 'Use for collecting user input' },
  { id: 'inputsjj', name: 'Inputs', instructions: 'Use for collecting user input' },
  { id: 'inputskk', name: 'Inputs', instructions: 'Use for collecting user input' },
  { id: 'inputsll', name: 'Inputs', instructions: 'Use for collecting user input' },
  { id: 'inputsxx', name: 'Inputs', instructions: 'Use for collecting user input' },
  // Add more here
];

export const Showcase = () => {
  const [activeComponent, setActiveComponent] = useState(componentsList[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveComponent(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToComponent = (id) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
    <div className="grid grid-cols-12 gap-1 px-6 max-w-[1440px] mx-auto py-16">

      {/* Left Sidebar */}
      <aside className="w-64 p-6  border-r border-white/10 sticky top-14 h-screen bg-black text-white col-span-2  overflow-y-auto text-sm">
        <h2 className="text-xl font-bold mb-4">Components</h2>
        <ul className="space-y-3">
          {componentsList.map((comp) => (
            // <li
            //   key={comp.id}
            //   className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 ${
            //     activeComponent === comp.id ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white' : 'hover:bg-white/10'
            //   }`}
            //   onClick={() => scrollToComponent(comp.id)}
            // >
            //   {comp.name}
            // </li>

        <li key={comp.id}>
            <a
              href={`#${comp.id}`}
              className={clsx(
                'block px-4 py-2 rounded-md transition-all duration-200',
                activeComponent === comp.id
                  ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white'
                  : 'text-gray-400 hover:bg-white/10 dark:hover:bg-white/10'
              )} onClick={() => scrollToComponent(comp.id)}
            >
              {comp.name}
            </a>
          </li>

          ))}
        </ul>
      </aside>

      {/* Center Preview Area */}
      <main className="overflow-y-auto mx-auto px-32 py-12 space-y-24 scroll-smooth col-span-10  border-r  border-r-white/20 border-l border-l-white/20 p-8">
        {componentsList.map((comp) => (
          <section
            key={comp.id}
            id={comp.id}
            ref={(el) => (sectionRefs.current[comp.id] = el)}
            className="min-h-[80vh] border border-dashed border-gray-500 rounded-xl p-8 shadow-md bg-white/5 backdrop-blur"
          >
            <h2 className="text-3xl font-bold text-white mb-4">{comp.name}</h2>
            <p className="text-gray-300 mb-8">This is the {comp.name} preview section. You can drop live demos here.</p>
            {/* Replace this with actual component */}
            <div className="p-4 bg-black/10 text-white border rounded-md">{comp.name} Component Here</div>
          </section>
        ))}
      </main>

      

    </div>

    <CardList/>
    </>
  );
};
