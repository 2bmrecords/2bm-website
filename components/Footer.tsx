export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-white border-t border-neutral-900">
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
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/about" className="text-neutral-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">About Us</a></li>
              <li><a href="/news" className="text-neutral-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Newsroom</a></li>
              <li><a href="/artists" className="text-neutral-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Artists</a></li>
              <li><a href="/careers" className="text-neutral-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Careers</a></li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-neutral-500 mb-6 uppercase">Connect</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="text-neutral-300 hover:text-brand-blue hover:translate-x-1 transition-all duration-300 inline-block">Instagram</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-brand-blue hover:translate-x-1 transition-all duration-300 inline-block">Twitter / X</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-brand-blue hover:translate-x-1 transition-all duration-300 inline-block">LinkedIn</a></li>
              <li><a href="/contact" className="text-neutral-300 hover:text-brand-blue hover:translate-x-1 transition-all duration-300 inline-block">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
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
