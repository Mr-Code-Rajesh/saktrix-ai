import React, { useEffect, useRef, useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import clsx from 'clsx';

const componentsList = [
  {
    id: 'buttons',
    name: 'Buttons',
    description: 'Use for actions, CTAs',
    install: 'npm install @saktrix/ui',
    code: `<Button className="bg-blue-500 text-white">Click Me</Button>`,
    preview: <button className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>,
  },
  {
    id: 'cards',
    name: 'Cards',
    description: 'Use to display grouped content',
    install: 'npm install @saktrix/ui',
    code: `<Card className="shadow-lg p-4">Card content here</Card>`,
    preview: <div className="bg-white text-black shadow p-4 rounded">Card content here</div>,
  },
  // Add more components easily here
];

export const ComponentShowcase = () => {
  const [activeComponent, setActiveComponent] = useState(componentsList[0].id);
  const sectionRefs = useRef({});
  const [copiedCode, setCopiedCode] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveComponent(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach((section) => {
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

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="grid grid-cols-12 gap-1 px-6 max-w-[1440px] mx-auto py-16 bg-[#0f0f0f] text-white">
      
      {/* Left Sidebar */}
      <aside className="w-64 p-6 border-r border-white/10 sticky top-14 h-screen col-span-2 overflow-y-auto text-sm">
        <h2 className="text-xl font-bold mb-4">Components</h2>
        <ul className="space-y-2">
          {componentsList.map((comp) => (
            <li key={comp.id}>
              <a
                href={`#${comp.id}`}
                className={clsx(
                  'block px-4 py-2 rounded-lg transition-all duration-200',
                  activeComponent === comp.id
                    ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold'
                    : 'text-gray-400 hover:bg-white/10'
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToComponent(comp.id);
                }}
              >
                {comp.name}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Section */}
      <main className="col-span-10 px-10 space-y-32">
        {componentsList.map((comp) => (
          <section
            key={comp.id}
            id={comp.id}
            ref={(el) => (sectionRefs.current[comp.id] = el)}
            className="min-h-[80vh] p-8 border border-dashed border-gray-600 rounded-2xl bg-white/5 backdrop-blur shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-2">{comp.name}</h2>
            <p className="text-gray-300 mb-6">{comp.description}</p>

            {/* Preview Block */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">🔍 Preview</h3>
              <div className="p-6 bg-white text-black rounded-lg border shadow inline-block">
                {comp.preview}
              </div>
            </div>

            {/* Install Block */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">📦 Install</h3>
              <div className="bg-gray-900 p-4 rounded-lg text-green-400 font-mono text-sm">
                {comp.install}
              </div>
            </div>

            {/* Code Block */}
            <div className="mb-6 relative">
              <h3 className="text-xl font-semibold mb-2">💻 Code</h3>
              <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm text-purple-300 font-mono whitespace-pre-wrap">
                {comp.code}
              </pre>
              <button
                onClick={() => handleCopy(comp.code, comp.id)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded transition-all"
              >
                {copiedCode === comp.id ? (
                  <FaCheck className="text-green-400" />
                ) : (
                  <FaCopy className="text-gray-300" />
                )}
              </button>
            </div>

            {/* Usage Tips Placeholder */}
            <div>
              <h3 className="text-xl font-semibold mb-2">💡 Tips</h3>
              <ul className="list-disc ml-6 text-gray-400">
                <li>Use with consistent padding/margin for spacing.</li>
                <li>Combine with icons for better usability.</li>
                {/* You can make this dynamic too later */}
              </ul>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};
