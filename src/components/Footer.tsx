
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-white pt-20 pb-8">
      <div className="mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-light mb-6 tracking-wide text-black text-opacity-90">LUMINA LLC</h3>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text- font-light mb-6 text-slate-900 tracking-wide text-opacity-90">LUMINA Tokyo</h4>
            <div className="space-y-4 text-slate-900 text-opacity-90">
              <div className="flex items-center space-x-4">
                <Phone className="w-4 h-4 text-black text-opacity-90" />
                <span className="font-light">070-8356-3107</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-4 h-4 text-black text-opacity-90" />
                <span className="font-light">info@lmns.jp</span>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-4 h-4 text-black text-opacity-90 mt-1" />
                <span className="font-light">2-5-2 Minamiazabu, Minato-ku, Tokyo, Japan, 106 0047</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-copper border-opacity-30 mt-16 pt-8 text-center text-slate-900 text-opacity-80">
          <p className="font-light">&copy; 2025 LUMINA LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
