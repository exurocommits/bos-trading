'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, BarChart3, Activity, Settings, Download, Play, Pause, RefreshCw } from 'lucide-react';

const mockSignals = [
  { id: 1, pair: 'EUR/USD', action: 'BUY', entry: 1.0845, stopLoss: 1.0800, takeProfit: 1.0950, confidence: 85, time: '2026-02-20 10:30', status: 'active' },
  { id: 2, pair: 'GBP/USD', action: 'SELL', entry: 1.2630, stopLoss: 1.2700, takeProfit: 1.2500, confidence: 72, time: '2026-02-20 11:15', status: 'active' },
  { id: 3, pair: 'USD/JPY', action: 'BUY', entry: 149.80, stopLoss: 149.00, takeProfit: 151.50, confidence: 91, time: '2026-02-20 09:00', status: 'active' },
  { id: 4, pair: 'AUD/USD', action: 'SELL', entry: 0.6520, stopLoss: 0.6600, takeProfit: 0.6400, confidence: 78, time: '2026-02-19 16:45', status: 'completed', profit: 125 },
  { id: 5, pair: 'USD/CHF', action: 'BUY', entry: 0.8750, stopLoss: 0.8700, takeProfit: 0.8850, confidence: 83, time: '2026-02-19 14:20', status: 'completed', profit: -50 },
];

const performanceData = [
  { month: 'Sep', profit: 1250, trades: 24 },
  { month: 'Oct', profit: 2100, trades: 31 },
  { month: 'Nov', profit: 1850, trades: 28 },
  { month: 'Dec', profit: 3200, trades: 35 },
  { month: 'Jan', profit: 2750, trades: 30 },
  { month: 'Feb', profit: 1950, trades: 22 },
];

export default function HomePage() {
  const [isRunning, setIsRunning] = useState(true);

  const totalProfit = performanceData.reduce((sum, d) => sum + d.profit, 0);
  const totalTrades = performanceData.reduce((sum, d) => sum + d.trades, 0);
  const winRate = 68;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="bg-slate-900/50 border-b border-slate-700 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">BOS Trading Strategy</h1>
                <p className="text-xs text-slate-400">Break of Structure MT5 Indicator</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
                  isRunning ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isRunning ? 'Stop' : 'Start'}
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-slate-200 rounded-lg text-sm font-medium hover:bg-slate-600">
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-sm text-slate-400">Total Profit</span>
            </div>
            <p className="text-2xl font-bold text-green-400">${totalProfit.toLocaleString()}</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Activity className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-sm text-slate-400">Total Trades</span>
            </div>
            <p className="text-2xl font-bold text-white">{totalTrades}</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <BarChart3 className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-sm text-slate-400">Win Rate</span>
            </div>
            <p className="text-2xl font-bold text-white">{winRate}%</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <RefreshCw className="w-5 h-5 text-orange-400" />
              </div>
              <span className="text-sm text-slate-400">Active Signals</span>
            </div>
            <p className="text-2xl font-bold text-white">{mockSignals.filter(s => s.status === 'active').length}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trading Signals */}
          <div className="lg:col-span-2 bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-sm">
            <div className="p-6 border-b border-slate-700">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-400" />
                Trading Signals
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {mockSignals.map((signal) => (
                <div
                  key={signal.id}
                  className={`p-4 rounded-lg border ${
                    signal.status === 'active' ? 'bg-slate-700/50 border-slate-600' : 'bg-slate-800/50 border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        signal.action === 'BUY' ? 'bg-green-500/20' : 'bg-red-500/20'
                      }`}>
                        {signal.action === 'BUY' ? (
                          <TrendingUp className="w-5 h-5 text-green-400" />
                        ) : (
                          <TrendingDown className="w-5 h-5 text-red-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{signal.pair}</h3>
                        <p className="text-sm text-slate-400">{signal.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        signal.status === 'active'
                          ? 'bg-green-500/20 text-green-400'
                          : signal.profit! > 0
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {signal.status === 'active' ? 'ACTIVE' : signal.profit! > 0 ? `+$${signal.profit}` : `-$${Math.abs(signal.profit)}`}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400">Entry</p>
                      <p className="font-semibold text-white">{signal.entry}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Stop Loss</p>
                      <p className="font-semibold text-red-400">{signal.stopLoss}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Take Profit</p>
                      <p className="font-semibold text-green-400">{signal.takeProfit}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Confidence</p>
                      <p className={`font-semibold ${
                        signal.confidence >= 80 ? 'text-green-400' : signal.confidence >= 60 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {signal.confidence}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Chart */}
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-sm p-6">
            <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              Monthly Performance
            </h2>

            {/* Simple Bar Chart */}
            <div className="space-y-4">
              {performanceData.map((data) => {
                const maxProfit = Math.max(...performanceData.map(d => d.profit));
                const height = (data.profit / maxProfit) * 100;

                return (
                  <div key={data.month} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">{data.month}</span>
                      <span className={`font-semibold ${data.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        ${data.profit >= 0 ? '+' : ''}{data.profit}
                      </span>
                    </div>
                    <div className="h-8 bg-slate-700 rounded-lg overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          data.profit >= 0 ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${height}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-500 text-center">{data.trades} trades</p>
                  </div>
                );
              })}
            </div>

            {/* Download MT5 Indicator */}
            <div className="mt-8 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
              <h3 className="font-semibold text-white mb-2">MT5 Indicator</h3>
              <p className="text-sm text-slate-400 mb-4">
                Download the MetaTrader 5 indicator to use BOS Trading Strategy
              </p>
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:opacity-90">
                <Download className="w-5 h-5" />
                Download MT5 Indicator
              </button>
            </div>

            {/* Strategy Info */}
            <div className="mt-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
              <h3 className="font-semibold text-white mb-2">Strategy Overview</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex justify-between">
                  <span>Strategy Type:</span>
                  <span className="text-white">Break of Structure</span>
                </div>
                <div className="flex justify-between">
                  <span>Timeframes:</span>
                  <span className="text-white">H1, H4, D1</span>
                </div>
                <div className="flex justify-between">
                  <span>Risk/Reward:</span>
                  <span className="text-white">1:2</span>
                </div>
                <div className="flex justify-between">
                  <span>Pairs:</span>
                  <span className="text-white">Major Pairs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-700 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500">
          <p>⚠️ Trading involves risk. Past performance is not indicative of future results.</p>
          <p className="mt-1">Use at your own risk. This is for educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
}
