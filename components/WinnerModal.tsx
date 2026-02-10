
import React, { useEffect } from 'react';

interface WinnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  winnerName: string;
  amount: number;
}

const WinnerModal: React.FC<WinnerModalProps> = ({ isOpen, onClose, winnerName, amount }) => {
  if (!isOpen) return null;

  const isJackpot = amount === 888;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-red-950/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Content */}
      <div className={`
        relative z-10 w-full max-w-md transform transition-all animate-bounce-in
        ${isJackpot ? 'scale-110' : 'scale-100'}
      `}>
        <div className={`
          lucky-gradient p-10 rounded-[3rem] text-center border-4 relative overflow-hidden
          ${isJackpot ? 'border-yellow-400' : 'border-red-400'}
        `}>
          {/* Confetti Decoration */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
             <div className="absolute top-10 left-10 text-xl animate-spin text-yellow-200"><i className="fas fa-sparkles"></i></div>
             <div className="absolute top-20 right-15 text-2xl animate-bounce text-yellow-200"><i className="fas fa-firecracker"></i></div>
             <div className="absolute bottom-10 left-20 text-3xl animate-pulse text-yellow-200"><i className="fas fa-star"></i></div>
          </div>

          <div className="text-6xl mb-6 text-yellow-400">
             <i className={`fas ${isJackpot ? 'fa-crown' : 'fa-certificate'}`}></i>
          </div>

          <h3 className="text-2xl font-black text-white mb-2">恭喜你中獎了！</h3>
          
          <div className="text-white text-xl mb-4 font-bold opacity-80">
            親愛的 <span className="text-yellow-400 underline decoration-2 underline-offset-4">{winnerName}</span>
          </div>

          <div className="bg-red-900/40 p-6 rounded-3xl mb-8 border border-red-500/30">
            <p className="text-sm text-yellow-200 mb-1 font-bold">獲得開春紅包金額</p>
            <div className={`
              font-black leading-none flex items-center justify-center gap-2
              ${isJackpot ? 'text-7xl text-yellow-400 animate-pulse' : 'text-6xl text-white'}
            `}>
              <span className="text-2xl">$</span>
              {amount}
            </div>
            {isJackpot && (
              <p className="mt-4 text-yellow-400 font-black animate-pulse text-lg">
                🎊 鴻兔大展 ‧ 馬到成功 🎊
              </p>
            )}
          </div>

          <button 
            onClick={onClose}
            className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-red-900 font-black rounded-2xl shadow-xl transition-all active:scale-95"
          >
            收下紅包
          </button>
        </div>
      </div>

      <style>{`
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
};

export default WinnerModal;
