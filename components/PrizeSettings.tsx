
import React, { useState, useEffect } from 'react';
import { PrizeConfig } from '../types';

interface PrizeSettingsProps {
  prizeConfigs: PrizeConfig[];
  onUpdate: (newConfigs: PrizeConfig[]) => void;
}

const PrizeSettings: React.FC<PrizeSettingsProps> = ({ prizeConfigs, onUpdate }) => {
  const [localConfigs, setLocalConfigs] = useState<PrizeConfig[]>(prizeConfigs);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setLocalConfigs(prizeConfigs);
  }, [prizeConfigs]);

  const handleCountChange = (amount: number, newCount: string) => {
    const val = parseInt(newCount) || 0;
    setLocalConfigs(prev => prev.map(p => p.amount === amount ? { ...p, initialCount: val } : p));
  };

  const handleSave = () => {
    onUpdate(localConfigs);
    setIsEditing(false);
  };

  return (
    <section className="bg-red-800/50 p-6 rounded-2xl border border-red-700 shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <i className="fas fa-sliders-h text-yellow-400"></i> 獎項數量設定
        </h3>
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="text-xs bg-red-700 hover:bg-red-600 px-3 py-1 rounded-lg border border-red-600 transition-colors"
          >
            修改設定
          </button>
        ) : (
          <div className="flex gap-2">
             <button 
              onClick={() => { setLocalConfigs(prizeConfigs); setIsEditing(false); }}
              className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg border border-gray-600 transition-colors"
            >
              取消
            </button>
            <button 
              onClick={handleSave}
              className="text-xs bg-green-700 hover:bg-green-600 px-3 py-1 rounded-lg border border-green-600 transition-colors"
            >
              儲存並重置
            </button>
          </div>
        )}
      </div>

      <div className="space-y-3">
        {localConfigs.map((prize) => (
          <div key={prize.amount} className="flex items-center justify-between bg-red-900/40 p-3 rounded-xl border border-red-700/50">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 font-bold w-12 text-right">${prize.amount}</span>
              <span className="text-xs opacity-60">面額</span>
            </div>
            
            {isEditing ? (
              <div className="flex items-center gap-2">
                <input 
                  type="number"
                  min="0"
                  max="99"
                  value={prize.initialCount}
                  onChange={(e) => handleCountChange(prize.amount, e.target.value)}
                  className="w-16 bg-white text-red-900 font-black px-2 py-1 rounded text-center outline-none focus:ring-2 ring-yellow-400"
                />
                <span className="text-sm font-bold">份</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-lg font-black text-white">{prize.initialCount}</span>
                <span className="text-xs opacity-60">份</span>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {isEditing && (
        <p className="mt-4 text-[10px] text-yellow-500/80 italic leading-tight">
          * 儲存設定將會「自動重置」目前的抽獎池。
        </p>
      )}
    </section>
  );
};

export default PrizeSettings;
