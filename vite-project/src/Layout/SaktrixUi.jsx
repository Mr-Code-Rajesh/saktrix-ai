// SaktrixUI.jsx (Main Layout)
import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
import clsx from 'clsx';



export const SaktrixUI= ()=> {
  const [activeId, setActiveId] = useState('button');
  const observer = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]');
    observer.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -60% 0px' }
    );

    sections.forEach(sec => observer.current.observe(sec));
    return () => observer.current.disconnect();
  }, []); 

  return (
    <div className="grid grid-cols-12 gap-4 px-6 max-w-[1440px] mx-auto py-16">
      {/* Left Sidebar */}
      <aside className="col-span-2 sticky top-24 pr-4 h-[80vh] overflow-y-auto text-sm">
        <ul className="space-y-3">
          {components.map(c => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className={clsx(
                  'block px-4 py-2 rounded-md transition-all duration-200',
                  activeId === c.id
                    ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white'
                    : 'text-gray-400 hover:bg-white/10 dark:hover:bg-white/10'
                )}
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="col-span-7 space-y-24 border-r  border-r-white/20 border-l border-l-white/20 p-8">
        {components.map(c => (
          <section
            key={c.id}
            id={c.id}
            data-section
            className="scroll-mt-24 border border-white/10 rounded-xl p-8 shadow-lg bg-white/5 backdrop-blur"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              {c.label} Component
            </h2>
            <p className="text-gray-300">This is a preview of the {c.label} component.</p>
          </section>
        ))}
      </main>

      {/* Right Sidebar */}
      <aside className="col-span-3 sticky top-24 h-[80vh] hidden xl:block ">
        <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="text-lg font-semibold text-pink-400 mb-2">Usage Guide</h3>
          <p className="text-sm text-gray-300">
            View code and tips on how to implement the <strong>{activeId}</strong> component.
          </p>
        </div>
      </aside>
    </div>
  );
}
