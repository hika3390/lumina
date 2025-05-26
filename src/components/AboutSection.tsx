
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: "100+", label: "プロジェクト実績" },
    { number: "50+", label: "お客様企業数" },
    { number: "10+", label: "サービス稼働年数" },
    { number: "24/7", label: "サポート体制" }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "お客様第一",
      description: "お客様のビジネス成功を第一に考え、最適なソリューションを提供します。"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "革新性",
      description: "常に最新技術を追求し、革新的なアプローチで課題を解決します。"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "品質重視",
      description: "妥協のない品質でお客様の信頼に応える製品・サービスを提供します。"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "チームワーク",
      description: "多様な専門性を持つチームが連携し、最高の成果を創出します。"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <h3 className="text-2xl text-gray-700 mb-6">会社概要</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h4 className="text-3xl font-bold text-gray-900 mb-6">
              ルミナ合同会社について
            </h4>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              ルミナ合同会社は、最新のIT技術を活用してお客様のビジネス課題を解決する専門集団です。
              2015年の設立以来、数多くの企業様のデジタルトランスフォーメーションを支援してまいりました。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              私たちは、技術力だけでなく、お客様のビジネスを深く理解することで、
              真に価値あるソリューションを提供することをお約束いたします。
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={`https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80`}
              alt="チーム"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h4 className="text-3xl font-bold text-gray-900 text-center mb-12">私たちの価値観</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h5>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Information */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">会社情報</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <dt className="font-semibold text-gray-900">会社名</dt>
                <dd className="text-gray-600">ルミナ合同会社</dd>
              </div>
              <div className="mb-4">
                <dt className="font-semibold text-gray-900">設立</dt>
                <dd className="text-gray-600">2015年4月</dd>
              </div>
              <div className="mb-4">
                <dt className="font-semibold text-gray-900">従業員数</dt>
                <dd className="text-gray-600">25名</dd>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <dt className="font-semibold text-gray-900">所在地</dt>
                <dd className="text-gray-600">〒100-0001 東京都千代田区千代田1-1</dd>
              </div>
              <div className="mb-4">
                <dt className="font-semibold text-gray-900">事業内容</dt>
                <dd className="text-gray-600">ITコンサルティング、システム開発、クラウドサービス</dd>
              </div>
              <div className="mb-4">
                <dt className="font-semibold text-gray-900">代表取締役</dt>
                <dd className="text-gray-600">山田 太郎</dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
