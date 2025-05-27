
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [randomQuote, setRandomQuote] = useState("");
  const [fullQuote, setFullQuote] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  
  // ランダムに表示する言葉の配列
  const quotes = [
    "Less is more",
    "Stay hungry. Stay foolish.",
    "Think different",
    "Design is intelligence made visible",
    "Simplicity is the ultimate sophistication",
    "Form follows function",
    "Quality over quantity",
    "Details matter",
    "Unconscious of beauty",
    "It just alters your entire existence",
    "I think, therefore I am",
    "Dressing is a way of life"
  ];

  // タイプライターエフェクトの実装
  useEffect(() => {
    setIsVisible(true);
    // ページ読み込み時にランダムな言葉を選択
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    setFullQuote(selectedQuote);
    
    // カーソル点滅のエフェクト
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // タイピングエフェクト
  useEffect(() => {
    if (typingIndex < fullQuote.length) {
      const typingTimeout = setTimeout(() => {
        setRandomQuote(prev => prev + fullQuote.charAt(typingIndex));
        setTypingIndex(prev => prev + 1);
      }, 20);
      
      return () => clearTimeout(typingTimeout);
    } else {
      setIsTyping(false);
    }
  }, [typingIndex, fullQuote]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-900 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-copper rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 text-center px-8 lg:px-12 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-1xl text-slate-900 text-opacity-85 mb-2 tracking-tight leading-tight">
            {randomQuote}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} ${isTyping ? 'inline-block' : 'hidden'}`}>|</span>
            <br />
          </h1>
          <div className="h-px bg-copper bg-opacity-30 mx-auto mb-12"></div>
        </div>
      </div>
      
      {/* Animated element */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-pulse">
        <div className="w-px h-16 bg-gradient-to-b from-copper to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
