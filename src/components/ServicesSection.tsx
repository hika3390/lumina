
import { Code, Database, Cloud, Shield, Smartphone, Cog } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  const services = [
    {
      icon: <Code className="w-8 h-8 text-indigo-900" />,
      title: "Web Development",
      description: "最新技術スタックによる高性能なWebアプリケーションを開発"
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-900" />,
      title: "Database Design",
      description: "効率的で安全なデータ管理システムの設計・構築"
    },
    {
      icon: <Cloud className="w-8 h-8 text-indigo-900" />,
      title: "Cloud Infrastructure",
      description: "スケーラブルなクラウドインフラストラクチャの構築"
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-900" />,
      title: "Security Solutions",
      description: "包括的なセキュリティソリューションでデータを保護"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-900" />,
      title: "Mobile Applications",
      description: "iOS・Android対応のモバイルアプリケーション開発"
    },
    {
      icon: <Cog className="w-8 h-8 text-indigo-900" />,
      title: "System Maintenance",
      description: "24/7体制による安定したシステム運用・保守"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl sm:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Our <span className="font-normal text-indigo-900">Services</span>
          </h2>
          <div className="w-24 h-px bg-copper mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            ビジネスの成長を支える、革新的なITソリューション
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white p-12 h-full transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg border border-slate-200/50">
                <div className="mb-8 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-light text-slate-900 mb-6 tracking-wide">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
