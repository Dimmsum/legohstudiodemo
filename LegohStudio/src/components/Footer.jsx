import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 border-t-2 border-gold-500">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-10">
        {/* Logo and About */}
        <div className="md:col-span-1 mb-8 md:mb-0">
          <div className="text-2xl font-serif italic font-bold text-gold-400 mb-2">
            <span className="text-red-500">●</span> Le’Goh{" "}
            <span className="text-gold-400">Studio</span>
          </div>
          <p className="text-white/70 text-sm mb-4">
            Le’Goh Studio is your destination for music, dance, and performance
            excellence. Discover your passion and join our creative community.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="text-gold-400 hover:text-red-500 transition-colors"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gold-400 hover:text-red-500 transition-colors"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gold-400 hover:text-red-500 transition-colors"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
        {/* Navigation */}
        <div>
          <h3 className="text-lg font-bold text-gold-400 mb-2">Navigation</h3>
          <ul className="space-y-1 text-white/80">
            <li>
              <a href="/" className="hover:text-gold-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gold-400">
                About
              </a>
            </li>
            <li>
              <a href="/programs" className="hover:text-gold-400">
                Programs
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-gold-400">
                Events
              </a>
            </li>
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-gold-400 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-white/80">
            <li>
              <a href="#" className="hover:text-gold-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gold-400">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gold-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gold-400">
                Gallery
              </a>
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold text-gold-400 mb-2">
            Our Newsletter
          </h3>
          <p className="text-white/70 text-sm mb-2">
            Stay up to date with our latest news and events.
          </p>
          <form className="flex gap-2 mt-2">
            <input
              type="email"
              placeholder="Email"
              className="rounded-full px-4 py-2 bg-main-dark text-white border border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <button type="submit" className="btn-gold">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-white/60 text-xs mt-10">
        <span className="text-gold-400 font-bold">
          © {new Date().getFullYear()} Le’Goh Studio.
        </span>{" "}
        All Rights Reserved.
      </div>
    </footer>
  );
}
