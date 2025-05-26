
import { Code, Database, Cloud, Shield, Smartphone, Cog } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-16 h-16 text-orange-600" />,
      title: "WEB DEVELOPMENT",
      description: "最新技術スタックによる高性能Webアプリケーション開発"
    },
    {
      icon: <Database className="w-16 h-16 text-orange-600" />,
      title: "DATABASE DESIGN",
      description: "効率的なデータ管理システムの設計・構築"
    },
    {
      icon: <Cloud className="w-16 h-16 text-orange-600" />,
      title: "CLOUD INFRASTRUCTURE",
      description: "AWS・Azure・GCPによるクラウドインフラ構築"
    },
    {
      icon: <Shield className="w-16 h-16 text-orange-600" />,
      title: "SECURITY SOLUTIONS",
      description: "企業データを守る包括的セキュリティソリューション"
    },
    {
      icon: <Smartphone className="w-16 h-16 text-orange-600" />,
      title: "MOBILE APPS",
      description: "iOS・Android対応のモバイルアプリケーション開発"
    },
    {
      icon: <Cog className="w-16 h-16 text-orange-600" />,
      title: "SYSTEM MAINTENANCE",
      description: "24/7監視体制による安定したシステム運用"
    }
  ];

  return (
    <section id="services" className="py-32 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100 to-yellow-100"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            OUR
            <br />
            <span className="text-orange-600">SERVICES</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            ビジネスの成長を支える、革新的なITソリューション
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:border-orange-200">
                <div className="mb-8 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
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
