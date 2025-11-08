import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4 space-x-3">
              <img 
                src="https://raw.githubusercontent.com/eabdalmufid/eabdalmufid/refs/heads/main/logo-affidev.png" 
                alt="Affidev Logo" 
                className="w-auto h-10"
              />
            </div>
            <p className="max-w-md mb-6 text-gray-400">
              Solusi web development profesional untuk mengembangkan bisnis Anda di era digital. Dari landing page hingga aplikasi kompleks.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/affidevcom" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-lg hover:bg-indigo-600"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/affidevcom" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-lg hover:bg-pink-600"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:mail@affidev.com"
                className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-lg hover:bg-violet-600"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Layanan</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="transition-colors hover:text-white">Landing Page</a></li>
              <li><a href="#services" className="transition-colors hover:text-white">Aplikasi NodeJS</a></li>
              <li><a href="#services" className="transition-colors hover:text-white">Undangan Digital</a></li>
              <li><a href="#services" className="transition-colors hover:text-white">Web Top-up</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Perusahaan</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#hero" className="transition-colors hover:text-white">Tentang Kami</a></li>
              <li><a href="#portfolio" className="transition-colors hover:text-white">Portfolio</a></li>
              <li><a href="#testimonials" className="transition-colors hover:text-white">Testimoni</a></li>
              <li><a href="#contact" className="transition-colors hover:text-white">Hubungi Kami</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-12 text-center text-gray-400 border-t border-gray-800">
          <p>&copy; {currentYear} Affidev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;