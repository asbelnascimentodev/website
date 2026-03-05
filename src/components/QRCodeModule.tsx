import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, Download, RefreshCw, Send, ClipboardCheck } from 'lucide-react';
import { Button } from './ui/button';

export const QRCodeModule = () => {
  const [text, setText] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (text.trim()) {
      setIsGenerated(true);
    }
  };

  const handleReset = () => {
    setText('');
    setIsGenerated(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadQR = () => {
    const svg = document.getElementById('qr-svg');
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      if (ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.download = `qrcode_${Date.now()}.png`;
        downloadLink.href = pngFile;
        downloadLink.click();
      }
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <div className="w-full max-w-md mx-auto hud-border bg-black/40 backdrop-blur-md p-6 sm:p-8 relative overflow-hidden group">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 p-2 text-[8px] font-orbitron text-cyber-blue/20 tracking-[0.3em]">
        QR_GEN_v2.0
      </div>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue shadow-neon-blue/20">
          <QrCode className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-orbitron font-bold text-white tracking-tight uppercase italic">QR_ENCODER</h3>
          <p className="text-[10px] font-orbitron text-cyber-blue/60 tracking-widest">ENCRYPTION_READY</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <label className="block text-[10px] font-orbitron text-slate-500 uppercase tracking-[0.2em] mb-2 ml-1">
            Data Input
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
                setText(e.target.value);
                if (isGenerated) setIsGenerated(false);
            }}
            placeholder="ENTER_URL_OR_TEXT..."
            className="w-full bg-black/60 border border-white/10 rounded-none p-4 text-white font-exo focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/50 transition-all placeholder:text-slate-700"
          />
          {text && (
            <button 
                onClick={copyToClipboard}
                className="absolute right-4 bottom-4 text-slate-500 hover:text-cyber-blue transition-colors"
                title="Copy input"
            >
                {copied ? <ClipboardCheck size={16} className="text-cyber-blue" /> : <Send size={16} />}
            </button>
          )}
        </div>

        <div className="flex gap-4">
          <Button 
            onClick={handleGenerate}
            disabled={!text.trim()}
            className="flex-1 h-12 bg-cyber-blue text-black font-orbitron text-xs hover:bg-white transition-all shadow-neon-blue rounded-none disabled:opacity-30 disabled:shadow-none"
          >
            GENERATE_NODE
          </Button>
          <Button 
            onClick={handleReset}
            variant="outline"
            className="w-12 h-12 border-white/10 text-white hover:bg-white/5 rounded-none p-0"
          >
            <RefreshCw size={18} />
          </Button>
        </div>

        <AnimatePresence>
          {isGenerated && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-8 flex flex-col items-center gap-6 p-6 border border-cyber-blue/20 bg-cyber-blue/5 relative"
            >
              <div className="p-4 bg-white shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <QRCodeSVG 
                  id="qr-svg"
                  value={text} 
                  size={160}
                  level="H"
                  includeMargin={true}
                />
              </div>
              
              <Button 
                onClick={downloadQR}
                className="w-full h-10 border border-cyber-blue/50 bg-transparent text-cyber-blue font-orbitron text-[10px] hover:bg-cyber-blue hover:text-black transition-all group/dl"
              >
                <Download className="w-3 h-3 mr-2 group-hover/dl:animate-bounce" />
                EXTRACT_ASSET.PNG
              </Button>

              {/* Scanning Effect Overlay */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-cyber-blue shadow-neon-blue animate-scan opacity-50" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* HUD corner accents inside the component */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyber-blue opacity-40" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyber-blue opacity-40" />
    </div>
  );
};
