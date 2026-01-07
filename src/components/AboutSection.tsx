
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-background relative">
      {/* ヒーロー画像セクション */}
      <div className="mb-32">
        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative h-[60vh] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1695997956965-aed69fb1cc7c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="ビジョン"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-foreground/5"></div>
          </div>
        </div>
      </div>

      {/* コンテンツセクション */}
      <div className="mx-auto px-8 lg:px-16 max-w-7xl">
        {/* コンセプトセクション */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          <div className={`lg:col-span-5 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="sticky top-32">
              <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-6 tracking-tight">
                Concept
              </h2>
              <div className="w-12 h-px bg-foreground mb-8"></div>
              <p className="text-sm font-light text-muted-foreground tracking-wider uppercase">
                Philosophy & Approach
              </p>
            </div>
          </div>

          <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <p className="text-sm md:text-base text-foreground leading-relaxed font-normal">
              ルミナ合同会社は、企業が「本当に目指したい姿」を見つけ出し、それを実現するためのブランドコンサルティングに加え、WebデザインとWebアプリ開発の分野でも企業の本質を引き出し、成長を支援します。
            </p>
            <p className="text-sm md:text-base text-foreground leading-relaxed font-normal">
              私たちは、デザインや広告の枠を超え、哲学や人類学、経営学といった深い知識を重視します。
              これに加え、ユーザー体験（UX）やインターフェース設計（UI）、フロントエンドからバックエンドまでの技術開発を融合させ、単なる見た目の美しさや操作性を超えた、企業の核となる価値をデジタル空間に表現します。
            </p>
            <p className="text-sm md:text-base text-foreground leading-relaxed font-normal">
              私たちの特徴は、合理性だけではなく感性や美意識、そしてデジタル技術を駆使して、矛盾を超えて新たな価値を生み出すことです。
              テクノロジーとクリエイティビティを掛け合わせることで、見る人、使う人の心を動かし、企業と顧客の絆をより深く、より広く繋ぎます。
            </p>
          </div>
        </div>

        {/* 画像セクション */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative h-[50vh] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1692432248156-91e5c8cd84d7?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="ワークスペース"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-foreground/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
