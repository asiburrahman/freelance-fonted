import React, { useEffect, useState } from 'react';

const Theme = () => {

const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

    return (
         <button
      onClick={() => setIsDark(!isDark)}

      // bg-gray-200 dark:bg-gray-800 text-black dark:text-white
      className={`px-2 py-2 rounded ${isDark? `bg-gray-200 text-black` : `bg-gray-800 text-white` }`} 
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
    );
};

export default Theme;