
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-light mb-6 tracking-wide text-copper">LUMINA LLC</h3>
            <p className="text-slate-300 leading-relaxed mb-6 font-light">
              最新のIT技術でお客様のビジネスを支援する専門集団です。
              革新的なソリューションでお客様の成功をサポートします。
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-light mb-6 text-white tracking-wide uppercase">Services</h4>
            <ul className="space-y-3 text-slate-300 font-light">
              <li className="hover:text-copper transition-colors duration-200 cursor-pointer">Webアプリケーション開発</li>
              <li className="hover:text-copper transition-colors duration-200 cursor-pointer">データベース設計・構築</li>
              <li className="hover:text-copper transition-colors duration-200 cursor-pointer">クラウドインフラ構築</li>
              <li className="hover:text-copper transition-colors duration-200 cursor-pointer">セキュリティ対策</li>
              <li className="hover:text-copper transition-colors duration-200 cursor-pointer">モバイルアプリ開発</li>
              <li className="hover:text-copper transition-colors duration-200 cursor-pointer">システム保守・運用</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-light mb-6 text-white tracking-wide uppercase">Contact</h4>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center space-x-4">
                <Phone className="w-4 h-4 text-copper" />
                <span className="font-light">03-1234-5678</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-4 h-4 text-copper" />
                <span className="font-light">info@lumina-llc.com</span>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-4 h-4 text-copper mt-1" />
                <span className="font-light">〒100-0001<br />東京都千代田区千代田1-1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-400">
          <p className="font-light">&copy; 2024 ルミナ合同会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
