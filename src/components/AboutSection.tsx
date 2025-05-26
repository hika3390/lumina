
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
      icon: <Target className="w-12 h-12 text-orange-600" />,
      title: "CUSTOMER FIRST",
      description: "お客様のビジネス成功を第一に考えた最適なソリューション提供"
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-orange-600" />,
      title: "INNOVATION",
      description: "最新技術を追求し、革新的なアプローチで課題を解決"
    },
    {
      icon: <Award className="w-12 h-12 text-orange-600" />,
      title: "QUALITY FOCUS",
      description: "妥協のない品質でお客様の信頼に応える製品・サービス"
    },
    {
      icon: <Users className="w-12 h-12 text-orange-600" />,
      title: "TEAMWORK",
      description: "多様な専門性を持つチームが連携し、最高の成果を創出"
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-orange-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            ABOUT
            <br />
            <span className="text-orange-600">LUMINA</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
              革新的なITソリューションで
              <br />
              <span className="text-orange-600">未来を創造</span>
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
              2015年の設立以来、ルミナ合同会社は最新のIT技術を活用して
              数多くの企業様のデジタルトランスフォーメーションを支援してまいりました。
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 font-light">
              技術力だけでなく、お客様のビジネスを深く理解することで、
              真に価値あるソリューションを提供いたします。
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-black text-orange-600 mb-3">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl p-2">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="チーム"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h4 className="text-4xl font-bold text-gray-900 text-center mb-16 tracking-tight">
            OUR <span className="text-orange-600">VALUES</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{value.title}</h5>
                <p className="text-gray-600 leading-relaxed font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Information */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <h4 className="text-3xl font-bold text-gray-900 mb-12 text-center tracking-tight">
            COMPANY <span className="text-orange-600">INFO</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <dt className="font-bold text-gray-900 text-lg mb-2">会社名</dt>
                <dd className="text-gray-600 text-lg">ルミナ合同会社</dd>
              </div>
              <div>
                <dt className="font-bold text-gray-900 text-lg mb-2">設立</dt>
                <dd className="text-gray-600 text-lg">2015年4月</dd>
              </div>
              <div>
                <dt className="font-bold text-gray-900 text-lg mb-2">従業員数</dt>
                <dd className="text-gray-600 text-lg">25名</dd>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <dt className="font-bold text-gray-900 text-lg mb-2">所在地</dt>
                <dd className="text-gray-600 text-lg">〒100-0001 東京都千代田区千代田1-1</dd>
              </div>
              <div>
                <dt className="font-bold text-gray-900 text-lg mb-2">事業内容</dt>
                <dd className="text-gray-600 text-lg">ITコンサルティング、システム開発、クラウドサービス</dd>
              </div>
              <div>
                <dt className="font-bold text-gray-900 text-lg mb-2">代表取締役</dt>
                <dd className="text-gray-600 text-lg">山田 太郎</dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
