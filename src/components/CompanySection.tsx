import { useEffect, useRef, useState } from 'react';

const CompanySection = () => {
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

  const companyInfo = [
    {
      label: "商号",
      value: "ルミナ合同会社 / LUMINA LLC"
    },
    {
      label: "住所",
      value: "〒106-0032 東京都港区六本木3丁目16-12六本木KSビル5階"
    },
    {
      label: "設立年月日",
      value: "2025年6月27日"
    },
    {
      label: "代表社員 CEO",
      value: "横山 洸"
    },
    {
      label: "法人番号",
      value: "9010403035253"
    },
    {
      label: "決算期",
      value: "毎年3月31日"
    },
    {
      label: "主要取引銀行",
      value: "三井住友銀行"
    },
    {
      label: "事業内容",
      value: "情報通信業"
    },
  ];

  return (
    <section id="company" ref={sectionRef} className="py-32 bg-background relative">
      <div className="mx-auto px-8 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className={`lg:col-span-5 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="sticky top-32">
              <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-6 tracking-tight">
                Info
              </h2>
              <div className="w-12 h-px bg-foreground mb-8"></div>
              <p className="text-sm font-light text-muted-foreground tracking-wider uppercase">
                About Company
              </p>
            </div>
          </div>

          <div className={`lg:col-span-7 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {companyInfo.map((info, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xs font-light text-muted-foreground tracking-wider uppercase">
                    {info.label}
                  </h3>
                  <div className="w-8 h-px bg-foreground/30"></div>
                  <p className="text-sm md:text-base text-foreground leading-relaxed font-normal">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
