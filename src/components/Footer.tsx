
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12">
      <div className="mx-auto px-8 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
          {/* Company Info */}
          <div className="md:col-span-5">
            <div className="flex items-center mb-8">
              <img
                src="/LUMINA LOGO.png"
                alt="LUMINA LLC Logo"
                className="h-12 w-12 mr-4 object-contain"
              />
              <h3 className="text-xl font-light tracking-widest text-foreground uppercase">
                Lumina LLC
              </h3>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs font-light mb-6 text-foreground tracking-widest uppercase">
                  Tokyo Office
                </h4>
                <div className="space-y-3 text-muted-foreground">
                  <p className="text-sm font-light leading-relaxed">
                    106-0032<br />
                    東京都港区六本木3丁目16-12<br />
                    六本木KSビル5階
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-light mb-6 text-foreground tracking-widest uppercase">
                  Contact
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-light text-muted-foreground">info@lmns.jp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-xs font-light text-center text-muted-foreground tracking-wider">
            &copy; 2026 LUMINA LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
