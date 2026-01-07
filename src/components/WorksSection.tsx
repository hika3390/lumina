import { useEffect, useRef, useState } from 'react';

const WorksSection = () => {
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

  const works = [
    {
      title: "Web Application Development",
      description: "モダンな技術スタックを活用した、スケーラブルで高品質なWebアプリケーションの設計・開発。ユーザー体験を重視した直感的なインターフェースと、堅牢なバックエンドシステムを提供します。"
    },
    {
      title: "Security Consulting",
      description: "包括的なセキュリティ評価とコンサルティングサービス。脆弱性診断、ペネトレーションテスト、セキュリティアーキテクチャの設計を通じて、ビジネスの安全性を確保します。"
    },
    {
      title: "Cloud Infrastructure",
      description: "AWS、Azure、GCPなどのクラウドプラットフォームを活用したインフラストラクチャの構築と運用。スケーラビリティ、可用性、コスト最適化を考慮した設計を実現します。"
    }
  ];

  return (
    <section id="works" ref={sectionRef} className="py-32 bg-background relative">
      {/* コンテンツセクション */}
      <div className="mx-auto px-8 lg:px-16 max-w-7xl">
        {/* タイトルとコンテンツ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className={`lg:col-span-5 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="sticky top-32">
              <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-6 tracking-tight">
                Works
              </h2>
              <div className="w-12 h-px bg-foreground mb-8"></div>
              <p className="text-sm font-light text-muted-foreground tracking-wider uppercase">
                Services & Solutions
              </p>
            </div>
          </div>

          <div className={`lg:col-span-7 space-y-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {works.map((work, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-sm font-light text-foreground tracking-wider uppercase">
                  {work.title}
                </h3>
                <div className="w-8 h-px bg-foreground/30"></div>
                <p className="text-base md:text-lg text-foreground leading-relaxed font-light">
                  {work.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
