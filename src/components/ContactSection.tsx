
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('お問い合わせを受け付けました。担当者より2営業日以内にご連絡いたします。');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "PHONE",
      content: "03-1234-5678",
      subcontent: "平日 9:00-18:00"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "EMAIL",
      content: "info@lumina-llc.com",
      subcontent: "24時間受付"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "OFFICE",
      content: "〒100-0001",
      subcontent: "東京都千代田区千代田1-1"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-orange-600 to-yellow-500 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-32 w-48 h-48 bg-yellow-300/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange-300/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl font-black text-white mb-6 tracking-tight">
            GET IN
            <br />
            <span className="text-yellow-200">TOUCH</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            プロジェクトのご相談やお見積もりなど、お気軽にお問い合わせください
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 tracking-tight">
              CONTACT <span className="text-yellow-200">INFO</span>
            </h3>
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-xl tracking-tight">{info.title}</h4>
                    <p className="text-white/90 font-medium text-lg">{info.content}</p>
                    <p className="text-white/70 text-base">{info.subcontent}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/20 p-8 rounded-3xl backdrop-blur-sm">
              <h4 className="font-bold text-white mb-6 text-xl tracking-tight">BUSINESS HOURS</h4>
              <div className="space-y-3 text-white/90">
                <p><span className="font-semibold">平日:</span> 9:00 - 18:00</p>
                <p><span className="font-semibold">土日祝:</span> 休業</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
              SEND <span className="text-orange-600">MESSAGE</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-3 tracking-wide uppercase">
                  お名前 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-3 tracking-wide uppercase">
                  メールアドレス *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="example@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-3 tracking-wide uppercase">
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="株式会社サンプル"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-3 tracking-wide uppercase">
                  お問い合わせ内容 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-vertical text-lg"
                  placeholder="プロジェクトの詳細やご要望をお聞かせください..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-5 px-8 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3 text-lg tracking-wide"
              >
                <Send className="w-6 h-6" />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
