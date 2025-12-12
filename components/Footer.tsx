export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tighter mb-6">TWO BIQUITOUS MUSIC</h2>
            <p className="text-neutral-400 max-w-sm text-sm leading-relaxed">
              Defining the sound of tomorrow. A global record label dedicated to empowering artists and pushing creative boundaries.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-neutral-500 mb-6 uppercase">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="/about" className="hover:text-brand-blue transition-colors">About Us</a></li>
              <li><a href="/news" className="hover:text-brand-blue transition-colors">Newsroom</a></li>
              <li><a href="/artists" className="hover:text-brand-blue transition-colors">Artists</a></li>
              <li><a href="/careers" className="hover:text-brand-blue transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-neutral-500 mb-6 uppercase">Connect</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">LinkedIn</a></li>
              <li><a href="/contact" className="hover:text-brand-blue transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© 2025 Two Biquitous Music. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
