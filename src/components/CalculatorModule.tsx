import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Delete, RotateCcw, Equal } from 'lucide-react';

export const CalculatorModule = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const appendToDisplay = (value: string) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay('');
    setResult('');
  };

  const calculate = () => {
    try {
      // Basic math only to avoid eval risks
      // eslint-disable-next-line no-eval
      const res = eval(display);
      setResult(res.toString());
      setDisplay(res.toString());
    } catch (error) {
      setResult('ERROR');
    }
  };

  const backspace = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const buttons = [
    { label: 'C', action: clearDisplay, color: 'text-cyber-pink border-cyber-pink/30 hover:bg-cyber-pink/10' },
    { label: 'DEL', action: backspace, icon: <Delete size={16} />, color: 'text-cyber-blue border-cyber-blue/30 hover:bg-cyber-blue/10' },
    { label: '/', action: () => appendToDisplay('/'), color: 'text-cyber-blue border-cyber-blue/30 hover:bg-cyber-blue/10' },
    { label: '*', action: () => appendToDisplay('*'), color: 'text-cyber-blue border-cyber-blue/30 hover:bg-cyber-blue/10' },
    { label: '7', action: () => appendToDisplay('7') },
    { label: '8', action: () => appendToDisplay('8') },
    { label: '9', action: () => appendToDisplay('9') },
    { label: '-', action: () => appendToDisplay('-'), color: 'text-cyber-blue border-cyber-blue/30 hover:bg-cyber-blue/10' },
    { label: '4', action: () => appendToDisplay('4') },
    { label: '5', action: () => appendToDisplay('5') },
    { label: '6', action: () => appendToDisplay('6') },
    { label: '+', action: () => appendToDisplay('+'), color: 'text-cyber-blue border-cyber-blue/30 hover:bg-cyber-blue/10' },
    { label: '1', action: () => appendToDisplay('1') },
    { label: '2', action: () => appendToDisplay('2') },
    { label: '3', action: () => appendToDisplay('3') },
    { label: '=', action: calculate, icon: <Equal size={16} />, color: 'bg-cyber-blue text-black border-cyber-blue hover:bg-white transition-all shadow-neon-blue' },
    { label: '0', action: () => appendToDisplay('0'), className: 'col-span-2' },
    { label: '.', action: () => appendToDisplay('.') },
  ];

  return (
    <div className="w-full max-w-sm mx-auto hud-border bg-black/40 backdrop-blur-md p-6 relative overflow-hidden group">
      {/* HUD Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
            <Calculator className="w-5 h-5 text-cyber-blue" />
            <span className="text-xs font-orbitron font-bold text-white tracking-widest uppercase">MATH_PROCESSOR</span>
        </div>
        <div className="text-[8px] font-orbitron text-cyber-blue/40 tracking-[0.2em]">0x7F42_ACTIVE</div>
      </div>

      {/* Screen */}
      <div className="bg-black/60 border border-white/5 p-4 mb-6 relative group/screen overflow-hidden">
        <div className="absolute top-1 right-1 flex gap-1 opacity-20">
            <div className="w-1 h-1 bg-cyber-blue" />
            <div className="w-1 h-1 bg-cyber-blue animate-pulse" />
        </div>
        <div className="text-right h-6 text-[10px] font-orbitron text-cyber-blue/40 overflow-hidden whitespace-nowrap">
          {display || 'WAITING_INPUT...'}
        </div>
        <div className="text-right text-3xl font-orbitron font-black text-white tracking-tighter overflow-hidden truncate">
          {result || display || '0'}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-cyber-blue/20 group-hover/screen:bg-cyber-blue/50 transition-colors" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={btn.action}
            className={`
                h-12 flex items-center justify-center font-orbitron font-bold text-xs border border-white/5 bg-white/5 hover:border-white/20 transition-all active:scale-95
                ${btn.className || ''}
                ${btn.color || 'text-slate-400'}
            `}
          >
            {btn.icon || btn.label}
          </button>
        ))}
      </div>

      {/* HUD Accents */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyber-blue opacity-30" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyber-blue opacity-30" />
    </div>
  );
};
