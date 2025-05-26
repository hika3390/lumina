
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Lumina LLC</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              最新のIT技術でお客様のビジネスを支援する専門集団です。
              革新的なソリューションでお客様の成功をサポートします。
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Webアプリケーション開発</li>
              <li>データベース設計・構築</li>
              <li>クラウドインフラ構築</li>
              <li>セキュリティ対策</li>
              <li>モバイルアプリ開発</li>
              <li>システム保守・運用</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-300" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-300" />
                <span>info@lumina-llc.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-300 mt-1" />
                <span>〒100-0001<br />東京都千代田区千代田1-1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ルミナ合同会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
