import { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollTop(scrolled);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 dark:bg-gray-700 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-200 ease-out"
        style={{ width: `${scrollTop}%` }}
      ></div>
    </div>
  );
};
