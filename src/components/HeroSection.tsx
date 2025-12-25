
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
            <div className="flex justify-center relative group">
              {/* 背景のグロー効果 - 心臓の鼓動のようなアニメーション */}
              <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-foreground/20 via-foreground/10 to-foreground/20 opacity-0 group-hover:opacity-100 group-hover:animate-heartbeat-glow transition-opacity duration-700"></div>
              <div className="absolute inset-0 blur-2xl bg-gradient-to-br from-foreground/15 via-transparent to-foreground/15 opacity-0 group-hover:opacity-100 group-hover:animate-heartbeat-glow transition-opacity duration-700" style={{ animationDelay: '0.1s' }}></div>

              {/* ロゴ本体 - 心臓の鼓動 */}
              <div className="relative">
                <img
                  src="/LUMINA LOGO.png"
                  alt="LUMINA LLC"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain
                  transition-all duration-300 ease-out
                  group-hover:drop-shadow-2xl
                  group-hover:animate-heartbeat
                  cursor-pointer"
                />

                {/* ホバー時の輝きエフェクト */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </div>

              {/* 周囲の波紋エフェクト - 心臓の鼓動のような広がり */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-foreground/10 rounded-full animate-heartbeat-glow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-foreground/15 rounded-full animate-heartbeat-glow" style={{ animationDelay: '0.15s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border border-foreground/20 rounded-full animate-heartbeat-glow" style={{ animationDelay: '0.3s' }}></div>
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
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs font-light text-muted-foreground tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground to-transparent opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
