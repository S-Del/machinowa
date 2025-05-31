import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgb(130,110,100)] text-gray-100 p-3 mt-auto text-center text-xs">
      {/* mt-auto は親がflex flex-col min-h-screenの場合にフッターを下部に押しやる */}
      <a href="https://gitlab.com/S-Del" target="_blank" rel="noopener noreferrer">
        <p>&copy; {new Date().getFullYear()} S-Del</p>
      </a>
    </footer>
  );
};
