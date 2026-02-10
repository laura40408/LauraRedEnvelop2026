
import React from 'react';
import { PrizeConfig } from '../types';

interface PoolStatusProps {
  pool: number[];
  prizeConfigs: PrizeConfig[];
}

const PoolStatus: React.FC<PoolStatusProps> = ({ pool, prizeConfigs }) => {
  const getCount = (amount: number) => pool.filter(a => a === amount).length;

  return (
    <section className="bg-red-800/50 p-6 rounded-2xl border border-red-700 shadow-xl">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <i className="fas fa-treasure-chest text-yellow-400"></i> 目前紅包剩餘數量
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        {prizeConfigs.map((prize) => {
          const currentCount = getCount(prize.amount);
          const isEmpty = currentCount === 0;
          
          return (
            <div 
              key={prize.amount}
              className={`
                p-4 rounded-xl flex flex-col items-center justify-center border-2 transition-all
                ${isEmpty 
                  ? 'bg-red-950 border-gray-800 opacity-50 grayscale' 
                  : 'bg-red-700/50 border-yellow-600/30'}
              `}
            >
              <div className="text-sm font-bold opacity-70 mb-1">
                {prize.amount}元獎項
              </div>
              <div className={`text-2xl font-black ${isEmpty ? 'text-gray-500' : 'text-yellow-400'}`}>
                {currentCount} <span className="text-sm">份</span>
              </div>
              
              <div className="mt-2 w-full bg-red-900 h-1 rounded-full overflow-hidden">
                <div 
                  className="bg-yellow-500 h-full transition-all duration-500" 
                  style={{ width: `${prize.initialCount > 0 ? (currentCount / prize.initialCount) * 100 : 0}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-red-700 flex justify-between items-center px-2">
        <span className="text-sm font-bold opacity-70">總計剩餘：</span>
        <span className="text-2xl font-black text-white">{pool.length} <span className="text-sm font-normal">個</span></span>
      </div>
    </section>
  );
};

export default PoolStatus;
