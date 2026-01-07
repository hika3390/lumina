import { useEffect, useRef, useState } from 'react';
import { toast } from '@/components/ui/sonner';

const ContactSection = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('お問い合わせを受け付けました', {
      description: '担当者より1〜2営業日以内にご連絡いたします。',
      duration: 4000,
    });
    // フォームをリセット
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 bg-foreground relative">
      <div className="mx-auto px-8 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className={`lg:col-span-5 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="sticky top-32">
              <h2 className="text-3xl sm:text-4xl font-light text-background mb-6 tracking-tight">
                Contact
              </h2>
              <div className="w-12 h-px bg-background mb-8"></div>
              <p className="text-sm font-light text-background/60 tracking-wider uppercase">
                Get in Touch
              </p>
            </div>
          </div>

          <div className={`lg:col-span-7 space-y-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-3">
                <label htmlFor="name" className="block text-sm font-light text-background/60 tracking-wider uppercase">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-0 py-3 border-0 border-b border-background/30 bg-transparent text-background font-light focus:outline-none focus:border-background transition-colors placeholder:text-background/30"
                  placeholder="山田 太郎"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="email" className="block text-sm font-light text-background/60 tracking-wider uppercase">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-0 py-3 border-0 border-b border-background/30 bg-transparent text-background font-light focus:outline-none focus:border-background transition-colors placeholder:text-background/30"
                  placeholder="example@lmns.jp"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="company" className="block text-sm font-light text-background/60 tracking-wider uppercase">
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-0 py-3 border-0 border-b border-background/30 bg-transparent text-background font-light focus:outline-none focus:border-background transition-colors placeholder:text-background/30"
                  placeholder="ルミナ合同会社"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="block text-sm font-light text-background/60 tracking-wider uppercase">
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-0 py-3 border-0 border-b border-background/30 bg-transparent text-background font-light focus:outline-none focus:border-background transition-colors resize-none placeholder:text-background/30"
                  placeholder="ご依頼、ご要望をお聞かせください"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="px-12 py-4 border border-background text-background font-light text-sm tracking-widest uppercase hover:bg-background hover:text-foreground transition-all duration-300"
                >
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;