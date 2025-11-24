import { Coffee, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#d43d2c] border-b-4 border-[#5d3a1a] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#f5e6d3] rounded-full flex items-center justify-center border-4 border-[#5d3a1a] shadow-md">
              <Coffee className="w-6 h-6 text-[#d43d2c]" />
            </div>
            <div>
              <h1 className="text-[#f5e6d3] tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
                Café Retrô
              </h1>
              <p className="text-[#f5e6d3] text-xs tracking-widest">EST. 1952</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-[#f5e6d3] hover:text-[#ffd966] transition-colors tracking-wide">
              Início
            </a>
            <a href="#sobre" className="text-[#f5e6d3] hover:text-[#ffd966] transition-colors tracking-wide">
              Sobre
            </a>
            <a href="#cardapio" className="text-[#f5e6d3] hover:text-[#ffd966] transition-colors tracking-wide">
              Cardápio
            </a>
            <a href="#galeria" className="text-[#f5e6d3] hover:text-[#ffd966] transition-colors tracking-wide">
              Galeria
            </a>
            <a href="#contato" className="text-[#f5e6d3] hover:text-[#ffd966] transition-colors tracking-wide">
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#f5e6d3]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <a href="#inicio" className="text-[#f5e6d3] hover:text-[#ffd966] transition-colors tracking-wide">
              Início
            </a>
            <a href="#sobre" className="text-[#f5e6d3] hover:text-[#ffd966] transition-colors tracking-wide">
              Sobre
            </a>
            <a href="#cardapio" className="text-[#f5e6d3] hover:text-[#ffd966] transition-colors tracking-wide">
              Cardápio
            </a>
            <a href="#galeria" className="text-[#f5e6d3] hover:text-[#ffd966] transition-colors tracking-wide">
              Galeria
            </a>
            <a href="#contato" className="text-[#f5e6d3] hover:text-[#ffd966] transition-colors tracking-wide">
              Contato
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
