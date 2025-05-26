
import { Code, Database, Cloud, Shield, Smartphone, Cog } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Webアプリケーション開発",
      description: "最新の技術スタックを使用した高性能で拡張性の高いWebアプリケーションを開発いたします。"
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "データベース設計・構築",
      description: "効率的なデータ管理を実現する最適化されたデータベースシステムの設計・構築を行います。"
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-600" />,
      title: "クラウドインフラ構築",
      description: "AWS、Azure、GCPなどの主要クラウドプラットフォームでのインフラ設計・構築を支援します。"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "セキュリティ対策",
      description: "企業の重要なデータを守るための包括的なセキュリティソリューションを提供いたします。"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "モバイルアプリ開発",
      description: "iOS・Android両対応のネイティブアプリやクロスプラットフォームアプリの開発を行います。"
    },
    {
      icon: <Cog className="w-12 h-12 text-blue-600" />,
      title: "システム保守・運用",
      description: "24/7の監視体制で安定したシステム運用をサポートし、継続的な改善を行います。"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <h3 className="text-2xl text-gray-700 mb-6">サービス一覧</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            お客様のビジネス課題を解決するための包括的なITソリューションを提供いたします。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
