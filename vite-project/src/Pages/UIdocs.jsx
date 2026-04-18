import React, { useEffect, useRef, useState } from 'react';
import { FaCopy, FaCheckCircle } from 'react-icons/fa';
import clsx from 'clsx';

const componentsList = [
  {
    id: 'buttons',
    name: 'Buttons',
    instructions: 'Use for actions and call-to-actions',
    install: 'npm install @saktrix/ui',
    code: `<Button className="bg-blue-500 text-white">Click Me</Button>`,
    preview: <button className="px-4 py-2 bg-blue-500 text-white rounded">Click Me</button>,
    tips: 'Use consistent button size across the app.',
  },
  {
    id: 'cards',
    name: 'Cards',
    instructions: 'Use to display grouped content attractively',
    install: 'npm install @saktrix/ui',
    code: `<Card className="p-4 shadow-lg">Your content here</Card>`,
    preview: <div className="p-4 bg-white/10 border rounded">Card Preview</div>,
    tips: 'Use cards for modular UI pieces like profiles, product previews, etc.',
  },
  // Add more...
];

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative bg-black text-white p-4 rounded-md overflow-auto">
      <pre className="text-sm">{code}</pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-white/10 text-white p-2 rounded hover:bg-white/20"
      >
        {copied ? <FaCheckCircle className="text-green-400" /> : <FaCopy />}
      </button>
    </div>
  );
};

export const ShowcaseUI = () => {
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
      { rootMargin: '-40% 0px -40% 0px', threshold: 0.3 }
    );

    Object.values(sectionRefs.current).forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToComponent = (id) => {
    const section = sectionRefs.current[id];
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="grid grid-cols-12 max-w-[1440px] mx-auto min-h-screen">
      
      {/* Sidebar */}
      <aside className="col-span-2 sticky top-14 h-screen overflow-y-auto bg-black text-white border-r border-white/10 p-6 text-sm">
        <h2 className="text-xl font-semibold mb-4">Components</h2>
        <ul className="space-y-2">
          {componentsList.map((comp) => (
            <li key={comp.id}>
              <button
                onClick={() => scrollToComponent(comp.id)}
                className={clsx(
                  'w-full text-left px-4 py-2 rounded-md transition-all duration-200',
                  activeComponent === comp.id
                    ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white'
                    : 'text-gray-400 hover:bg-white/10'
                )}
              >
                {comp.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Content Area */}
      <main className="col-span-10 px-24 py-12 space-y-24 scroll-smooth">
        {componentsList.map((comp) => (
          <section
            key={comp.id}
            id={comp.id}
            ref={(el) => (sectionRefs.current[comp.id] = el)}
            className="min-h-[80vh] border border-dashed border-white/20 rounded-xl p-8 bg-white/5 backdrop-blur-md text-white shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-2">{comp.name}</h2>
            <p className="text-sm text-gray-400 mb-4">{comp.instructions}</p>

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Live Preview</h3>
              <div className="bg-white/10 p-4 rounded-md border text-white inline-block">
                {comp.preview}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Installation</h3>
              <CodeBlock code={comp.install} />
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Code Example</h3>
              <CodeBlock code={comp.code} />
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Usage Tip</h3>
              <p className="text-gray-300">{comp.tips}</p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};
