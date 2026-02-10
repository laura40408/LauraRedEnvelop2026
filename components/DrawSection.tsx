
import React, { useState } from 'react';

interface DrawSectionProps {
  onDraw: (name: string) => void;
  canDraw: boolean;
  isDrawing?: boolean;
}

const DrawSection: React.FC<DrawSectionProps> = ({ onDraw, canDraw, isDrawing }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onDraw(name.trim());
      setName('');
    } else {
      alert("請輸入大名！");
    }
  };

  return (
    <section className="bg-red-800/80 p-8 rounded-3xl border-2 border-yellow-500/30 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-20 text-4xl">
         <i className="fas fa-envelope-open-text"></i>
      </div>

      <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
        <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-red-900 text-sm">
          1
        </span>
        快來試試好手氣
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="請輸入您的姓名..."
          disabled={!canDraw || isDrawing}
          className="flex-grow bg-white text-red-900 text-xl font-bold py-4 px-6 rounded-2xl border-4 border-transparent focus:border-yellow-400 outline-none transition-all placeholder:text-red-200"
        />
        <button 
          type="submit"
          disabled={!canDraw || isDrawing}
          className={`
            md:w-48 py-4 px-8 rounded-2xl text-xl font-black flex items-center justify-center gap-2 shadow-lg transform transition-all active:scale-95
            ${canDraw && !isDrawing
              ? 'bg-yellow-500 text-red-900 hover:bg-yellow-400 cursor-pointer animate-pulse-slow' 
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'}
          `}
        >
          {isDrawing ? (
            <>
              <i className="fas fa-spinner animate-spin"></i>
              正在抽取
            </>
          ) : (
            <>
              <i className="fas fa-gift"></i>
              立即抽獎
            </>
          )}
        </button>
      </form>
      
      {!canDraw && !isDrawing && (
        <p className="mt-4 text-center text-yellow-500 font-bold bg-yellow-900/40 py-2 rounded-lg">
          😭 哎呀！紅包已經全數發送完畢，明年見！
        </p>
      )}
    </section>
  );
};

export default DrawSection;
