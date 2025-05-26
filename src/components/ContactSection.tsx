
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

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
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "03-1234-5678",
      subcontent: "平日 9:00-18:00"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "info@lumina-llc.com",
      subcontent: "24時間受付"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Office",
      content: "〒100-0001",
      subcontent: "東京都千代田区千代田1-1"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-32 bg-indigo-900 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-copper rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-6 tracking-tight">
            Get in <span className="font-normal text-copper">Touch</span>
          </h2>
          <div className="w-24 h-px bg-copper mx-auto mb-8"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            プロジェクトのご相談やお見積もりなど、お気軽にお問い合わせください
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-2xl font-light text-white mb-12 tracking-tight">
              Contact <span className="font-normal text-copper">Information</span>
            </h3>
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center text-copper">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-light text-white mb-2 text-lg tracking-wide">{info.title}</h4>
                    <p className="text-white/90 font-light">{info.content}</p>
                    <p className="text-white/60 text-sm">{info.subcontent}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 p-8">
              <h4 className="font-light text-white mb-6 text-lg tracking-wide">Business Hours</h4>
              <div className="space-y-3 text-white/80 font-light">
                <p><span className="text-copper">平日:</span> 9:00 - 18:00</p>
                <p><span className="text-copper">土日祝:</span> 休業</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-white p-12 border border-slate-200/50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-2xl font-light text-slate-900 mb-8 tracking-tight">
              Send <span className="font-normal text-indigo-900">Message</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-light text-slate-900 mb-3 tracking-widest uppercase">
                  お名前 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b border-slate-300 bg-transparent focus:ring-0 focus:border-indigo-900 transition-all duration-300 font-light"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-light text-slate-900 mb-3 tracking-widest uppercase">
                  メールアドレス *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b border-slate-300 bg-transparent focus:ring-0 focus:border-indigo-900 transition-all duration-300 font-light"
                  placeholder="example@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-light text-slate-900 mb-3 tracking-widest uppercase">
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b border-slate-300 bg-transparent focus:ring-0 focus:border-indigo-900 transition-all duration-300 font-light"
                  placeholder="株式会社サンプル"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-light text-slate-900 mb-3 tracking-widest uppercase">
                  お問い合わせ内容 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b border-slate-300 bg-transparent focus:ring-0 focus:border-indigo-900 transition-all duration-300 resize-vertical font-light"
                  placeholder="プロジェクトの詳細やご要望をお聞かせください..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-900 hover:bg-slate-900 text-white py-4 px-8 font-light transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-3 text-sm tracking-widest uppercase mt-8"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
