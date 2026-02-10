
import React from 'react';
import { Winner } from '../types';

interface HistoryListProps {
  winners: Winner[];
}

const HistoryList: React.FC<HistoryListProps> = ({ winners }) => {
  return (
    <section className="bg-red-800/50 rounded-3xl border border-red-700 shadow-xl overflow-hidden">
      <div className="bg-red-700/50 px-8 py-4 border-b border-red-700 flex items-center justify-between">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <i className="fas fa-list-ul text-yellow-400"></i> 已抽中得獎名單
        </h3>
        <span className="bg-red-900/80 px-3 py-1 rounded-full text-xs font-bold border border-yellow-600/30">
          共 {winners.length} 位幸運兒
        </span>
      </div>
      
      <div className="max-h-[500px] overflow-y-auto">
        {winners.length === 0 ? (
          <div className="p-12 text-center opacity-40 italic">
            目前還沒有人中獎，快來試試手氣吧！
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-red-900/50 text-xs font-bold uppercase tracking-wider text-red-300">
              <tr>
                <th className="px-8 py-3 text-left">姓名</th>
                <th className="px-8 py-3 text-left">抽中金額</th>
                <th className="px-8 py-3 text-right">時間</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-red-800">
              {winners.map((winner, index) => (
                <tr 
                  key={winner.id} 
                  className={`
                    hover:bg-red-700/20 transition-colors
                    ${index === 0 ? 'bg-yellow-400/10' : ''}
                  `}
                >
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center font-black text-xs
                        ${winner.amount === 888 ? 'bg-yellow-500 text-red-900' : 'bg-red-700 text-white'}
                      `}>
                        {winner.name.charAt(0)}
                      </div>
                      <span className="font-bold">{winner.name}</span>
                      {index === 0 && (
                        <span className="text-[10px] bg-yellow-500 text-red-900 px-1.5 py-0.5 rounded font-black uppercase">NEW</span>
                      )}
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <span className={`
                      font-black text-xl
                      ${winner.amount >= 168 ? 'text-yellow-400 drop-shadow-sm' : 'text-white'}
                    `}>
                      <span className="text-sm mr-1">$</span>{winner.amount}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-right text-sm opacity-50 font-mono">
                    {winner.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default HistoryList;
