
import React from 'react';

const DrawingOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-red-950/90 backdrop-blur-md">
      <div className="text-center">
        <div className="relative inline-block animate-shake-envelope">
          {/* Decorative burst background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/20 blur-3xl rounded-full animate-pulse"></div>
          
          <div className="relative bg-red-600 w-48 h-64 rounded-2xl border-4 border-yellow-400 shadow-2xl flex flex-col items-center justify-center transform hover:rotate-2 transition-transform">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-red-500 rounded-t-2xl border-b-2 border-yellow-600/30 flex items-center justify-center">
               <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-yellow-300 shadow-inner">
                  <i className="fas fa-horse-head text-red-900 text-2xl"></i>
               </div>
            </div>
            {/* 將原本的垂直文字更改為金錢符號 $$ */}
            <div className="mt-20 text-yellow-400 font-black text-7xl drop-shadow-2xl flex items-center justify-center italic">
              <span>$</span>
              <span className="-ml-2">$</span>
            </div>
          </div>
        </div>
        
        <h2 className="mt-12 text-3xl font-black text-yellow-400 tracking-widest animate-pulse">
          好運降臨中...
        </h2>
        <p className="mt-2 text-red-300 font-bold">財神爺正在挑選您的開春紅包</p>
      </div>

      <style>{`
        @keyframes shake-envelope {
          0% { transform: rotate(0deg) scale(1); }
          10% { transform: rotate(-8deg) scale(1.1); }
          20% { transform: rotate(8deg) scale(1.1); }
          30% { transform: rotate(-8deg) scale(1.1); }
          40% { transform: rotate(8deg) scale(1.1); }
          50% { transform: rotate(-8deg) scale(1.1); }
          60% { transform: rotate(8deg) scale(1.1); }
          70% { transform: rotate(-8deg) scale(1.1); }
          80% { transform: rotate(8deg) scale(1.1); }
          90% { transform: rotate(-8deg) scale(1.1); }
          100% { transform: rotate(0deg) scale(1.2); }
        }
        .animate-shake-envelope {
          animation: shake-envelope 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DrawingOverlay;
