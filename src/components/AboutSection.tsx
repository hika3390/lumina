
import { Users, Target, Award, Lightbulb } from 'lucide-react';
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
      { threshold: 0.2 }
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

  const values = [
    {
      icon: <Target className="w-6 h-6 text-copper" />,
      title: "Philosophy",
      description: "技術と人間性の調和を追求し、真に価値あるソリューションを創造"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-copper" />,
      title: "Innovation",
      description: "最新技術への深い洞察と継続的な学習による革新的アプローチ"
    },
    {
      icon: <Award className="w-6 h-6 text-copper" />,
      title: "Quality",
      description: "妥協のない品質基準と細部への配慮による信頼性の高い製品"
    },
    {
      icon: <Users className="w-6 h-6 text-copper" />,
      title: "Partnership",
      description: "お客様との長期的なパートナーシップを通じた持続的成長"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-white relative">
      <div className="mx-auto">
        <div className="gap-24 items-center mb-32">
          
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1696139568097-27f204e4f81a?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="チーム"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-indigo-900/10 hover:bg-transparent transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="text-4xl sm:text-5xl font-light text-slate-900 mb-8 tracking-tight leading-tight">
              Concept
            </h2>
            <div className="w-24 h-px bg-copper mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">
              ルミナ合同会社は、企業が「本当に目指したい姿」を見つけ出し、それを実現するためのブランドコンサルティングを行っています。私たちは、デザインや広告の枠を超え、哲学や人類学、経営学といった深い知識を重視します。
              ロゴや空間デザイン、デジタル、映像、広報など、ブランドを形作る多様な専門家がチームを組み、表面的なデザインではなく、企業の本質を引き出します。
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">
              私たちの特徴は、合理性だけではなく感性や美意識を大切にし、矛盾を超えて新たな価値を生み出すことです。
              そして、ユーモアと挑戦心をもって、社会に問いを投げかける存在でありたいと考えています。
            </p>
          </div>
          
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1692432248156-91e5c8cd84d7?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="チーム"
                className="w-full grayscale-0 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-indigo-900/10 hover:bg-transparent transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection;
