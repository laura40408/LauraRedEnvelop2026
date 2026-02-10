
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative py-12 text-center overflow-hidden border-b-4 border-yellow-600 shadow-2xl lucky-gradient">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-5 left-10 text-8xl transform -rotate-12">
          <i className="fas fa-horse"></i>
        </div>
        <div className="absolute bottom-5 right-10 text-8xl transform rotate-12">
          <i className="fas fa-horse"></i>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] opacity-5">
          馬
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="bg-yellow-500 text-red-900 w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-4 shadow-inner border-4 border-yellow-200">
          <i className="fas fa-horse-head"></i>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-widest text-yellow-400 drop-shadow-lg mb-2">
          馬到成功
        </h1>
        <p className="text-xl md:text-2xl font-bold text-yellow-200 opacity-90">
          新春大紅包 ‧ 好運龍總來
        </p>
        
        {/* Festive Paper Cut Decor */}
        <div className="mt-6 flex gap-4">
          <span className="bg-red-800 px-4 py-1 rounded-full border border-yellow-600 text-yellow-400 text-sm font-bold">
            萬事如意
          </span>
          <span className="bg-red-800 px-4 py-1 rounded-full border border-yellow-600 text-yellow-400 text-sm font-bold">
            一馬當先
          </span>
          <span className="bg-red-800 px-4 py-1 rounded-full border border-yellow-600 text-yellow-400 text-sm font-bold">
            財源廣進
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
