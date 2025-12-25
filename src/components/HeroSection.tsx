
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [randomQuote, setRandomQuote] = useState("");
  const [fullQuote, setFullQuote] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // ランダムに表示する言葉の配列 - BEES&HONEY風の哲学的な引用
  const quotes = [
    { text: "The essence transcends phenomenon", author: "Georg Wilhelm Friedrich Hegel" },
    { text: "Beauty over correctness", author: "BEES&HONEY" },
    { text: "Less is more", author: "Ludwig Mies van der Rohe" },
    { text: "Simplicity is the ultimate sophistication", author: "Leonardo da Vinci" },
    { text: "Form follows function", author: "Louis Sullivan" },
    { text: "Design is thinking made visual", author: "Saul Bass" },
    { text: "Details are not details", author: "Charles Eames" },
    { text: "The whole is greater than the sum of its parts", author: "Aristotle" }
  ];

  const [selectedQuote, setSelectedQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    setIsVisible(true);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    setSelectedQuote(quote);
    setFullQuote(quote.text);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

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
    <section id="home" className="min-h-screen flex flex-col justify-between relative bg-background overflow-hidden pt-24 pb-8">
      {/* Minimal background - very subtle */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-8 lg:px-16 max-w-5xl mx-auto flex-grow flex items-center justify-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* ロゴを大きく表示 */}
          <div className="space-y-12">
            <div className="flex justify-center">
              <div className="relative group inline-block">
                {/* 背景のグロー効果 - 心臓の鼓動のようなアニメーション */}
                <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-foreground/20 via-foreground/10 to-foreground/20 group-hover:animate-heartbeat-glow"></div>
                <div className="absolute inset-0 blur-2xl bg-gradient-to-br from-foreground/15 via-transparent to-foreground/15 group-hover:animate-heartbeat-glow" style={{ animationDelay: '0.1s' }}></div>

                {/* ロゴ本体 - 心臓の鼓動 */}
                <div className="relative">
                  <img
                    src="/LUMINA LOGO.png"
                    alt="LUMINA LLC"
                    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain
                    drop-shadow-2xl
                    animate-heartbeat
                    group-hover:animate-heartbeat-intense
                    cursor-pointer"
                  />

                  {/* 輝きエフェクト */}
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                </div>

                {/* 静電気と粒子エフェクト */}
                <div className="absolute inset-0">
                  {/* 静電気エフェクト - ロゴ周辺の小さな光の点 */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* 上部の電気 */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground/80 rounded-full animate-electric-flash blur-sm"></div>
                    {/* 右上の電気 */}
                    <div className="absolute top-[15%] right-[15%] w-1.5 h-1.5 bg-foreground/60 rounded-full animate-electric-flash blur-sm" style={{ animationDelay: '0.3s' }}></div>
                    {/* 右の電気 */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-foreground/70 rounded-full animate-electric-flash blur-sm" style={{ animationDelay: '0.5s' }}></div>
                    {/* 右下の電気 */}
                    <div className="absolute bottom-[15%] right-[15%] w-1.5 h-1.5 bg-foreground/80 rounded-full animate-electric-flash blur-sm" style={{ animationDelay: '0.7s' }}></div>
                    {/* 下部の電気 */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground/60 rounded-full animate-electric-flash blur-sm" style={{ animationDelay: '0.2s' }}></div>
                    {/* 左下の電気 */}
                    <div className="absolute bottom-[15%] left-[15%] w-1.5 h-1.5 bg-foreground/70 rounded-full animate-electric-flash blur-sm" style={{ animationDelay: '0.4s' }}></div>
                    {/* 左の電気 */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-foreground/80 rounded-full animate-electric-flash blur-sm" style={{ animationDelay: '0.6s' }}></div>
                    {/* 左上の電気 */}
                    <div className="absolute top-[15%] left-[15%] w-1.5 h-1.5 bg-foreground/60 rounded-full animate-electric-flash blur-sm" style={{ animationDelay: '0.1s' }}></div>
                  </div>

                  {/* 浮遊する粒子エフェクト */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-[20%] left-[30%] w-3 h-3 bg-foreground/60 rounded-full animate-particle-float blur-[1px]"></div>
                    <div className="absolute top-[60%] right-[25%] w-2.5 h-2.5 bg-foreground/70 rounded-full animate-particle-float blur-[1px]" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-[30%] left-[40%] w-3 h-3 bg-foreground/60 rounded-full animate-particle-float blur-[1px]" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-[40%] right-[35%] w-2.5 h-2.5 bg-foreground/70 rounded-full animate-particle-float blur-[1px]" style={{ animationDelay: '1.5s' }}></div>
                    <div className="absolute top-[70%] left-[20%] w-3 h-3 bg-foreground/60 rounded-full animate-particle-float blur-[1px]" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-[40%] right-[30%] w-2.5 h-2.5 bg-foreground/70 rounded-full animate-particle-float blur-[1px]" style={{ animationDelay: '2.5s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-16 h-px bg-foreground mx-auto"></div>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-sm md:text-base font-light text-muted-foreground tracking-[0.3em] uppercase leading-relaxed">
                {randomQuote}
              </p>
              <p className="text-sm md:text-base font-light text-muted-foreground tracking-[0.3em] uppercase">
                — {selectedQuote.author}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* スクロール指示 */}
      <div className="relative z-10 flex justify-center pb-1">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs font-light text-muted-foreground tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground to-transparent opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
