
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
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="text-4xl sm:text-5xl font-light text-slate-900 mb-8 tracking-tight leading-tight">
              Crafting Tomorrow's
              <br />
              <span className="font-normal text-indigo-900">Digital Landscape</span>
            </h2>
            <div className="w-24 h-px bg-copper mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">
              2015年の設立以来、私たちは技術の可能性を探求し続け、
              お客様のビジョンを現実へと導くお手伝いをしてまいりました。
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              単なる技術提供を超え、真のパートナーとしてお客様の成功を支援し、
              共に新たな価値を創造することを使命としています。
            </p>
          </div>
          
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="チーム"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-indigo-900/10 hover:bg-transparent transition-all duration-700"></div>
            </div>
          </div>
        </div>

        <div className={`mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-3xl font-light text-slate-900 text-center mb-16 tracking-tight">
            Our <span className="font-normal text-indigo-900">Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`text-center p-8 bg-slate-50 transition-all duration-700 hover:bg-white hover:shadow-md border border-slate-200/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h5 className="text-lg font-light text-slate-900 mb-4 tracking-wide">{value.title}</h5>
                <p className="text-slate-600 leading-relaxed font-light text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`bg-slate-50 p-16 border border-slate-200/50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h4 className="text-2xl font-light text-slate-900 mb-12 text-center tracking-tight">
            Company <span className="font-normal text-indigo-900">Profile</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <dt className="font-light text-slate-900 text-sm tracking-wide uppercase mb-2">会社名</dt>
                <dd className="text-slate-600 text-lg font-light">ルミナ合同会社</dd>
              </div>
              <div>
                <dt className="font-light text-slate-900 text-sm tracking-wide uppercase mb-2">設立</dt>
                <dd className="text-slate-600 text-lg font-light">2015年4月</dd>
              </div>
              <div>
                <dt className="font-light text-slate-900 text-sm tracking-wide uppercase mb-2">従業員数</dt>
                <dd className="text-slate-600 text-lg font-light">25名</dd>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <dt className="font-light text-slate-900 text-sm tracking-wide uppercase mb-2">所在地</dt>
                <dd className="text-slate-600 text-lg font-light">〒100-0001 東京都千代田区千代田1-1</dd>
              </div>
              <div>
                <dt className="font-light text-slate-900 text-sm tracking-wide uppercase mb-2">事業内容</dt>
                <dd className="text-slate-600 text-lg font-light">ITコンサルティング、システム開発、クラウドサービス</dd>
              </div>
              <div>
                <dt className="font-light text-slate-900 text-sm tracking-wide uppercase mb-2">代表取締役</dt>
                <dd className="text-slate-600 text-lg font-light">山田 太郎</dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
