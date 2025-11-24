import { Coffee, Menu, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function MollyHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#C6A988] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 bg-[#E9A8C1] rounded-full flex items-center justify-center border-4 border-[#533A2E] cartoon-shadow">
                <Coffee className="w-8 h-8 text-[#533A2E]" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#DDBB76] rounded-full border-2 border-[#533A2E] flex items-center justify-center">
                <span className="text-xs">★</span>
              </div>
            </div>
            <div>
              <h1 className="text-[#533A2E] text-3xl" style={{ fontFamily: 'Pacifico, cursive' }}>
                Molly's Café
              </h1>
              <p className="text-[#533A2E] text-xs tracking-widest opacity-70">Since 1954</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <a href="#home" className="px-6 py-3 rounded-full bg-[#F7EFE6] text-[#533A2E] hover:bg-[#E9A8C1] border-2 border-[#533A2E] transition-all hover:scale-105">
              Home
            </a>
            <a href="#menu" className="px-6 py-3 rounded-full bg-[#F7EFE6] text-[#533A2E] hover:bg-[#E9A8C1] border-2 border-[#533A2E] transition-all hover:scale-105">
              Menu
            </a>
            <a href="#cafes" className="px-6 py-3 rounded-full bg-[#F7EFE6] text-[#533A2E] hover:bg-[#E9A8C1] border-2 border-[#533A2E] transition-all hover:scale-105">
              Cafés
            </a>
            <a href="#lanches" className="px-6 py-3 rounded-full bg-[#F7EFE6] text-[#533A2E] hover:bg-[#E9A8C1] border-2 border-[#533A2E] transition-all hover:scale-105">
              Lanches
            </a>
            <a href="#sobremesas" className="px-6 py-3 rounded-full bg-[#F7EFE6] text-[#533A2E] hover:bg-[#E9A8C1] border-2 border-[#533A2E] transition-all hover:scale-105">
              Sobremesas
            </a>
            <a href="#sobre" className="px-6 py-3 rounded-full bg-[#F7EFE6] text-[#533A2E] hover:bg-[#E9A8C1] border-2 border-[#533A2E] transition-all hover:scale-105">
              Sobre Nós
            </a>
            <a href="#contato" className="px-6 py-3 rounded-full bg-[#F7EFE6] text-[#533A2E] hover:bg-[#E9A8C1] border-2 border-[#533A2E] transition-all hover:scale-105">
              Contato
            </a>
            <Button className="px-8 py-6 rounded-full bg-[#E9A8C1] text-[#533A2E] hover:bg-[#DDBB76] border-2 border-[#533A2E] cartoon-shadow ml-2">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Peça Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#533A2E] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-2">
            <a href="#home" className="px-6 py-3 rounded-full bg-[#F7EFE6] text-[#533A2E] hover:bg-[#E9A8C1] border-2 border-[#533A2E] text-center">
              Home
            </a>
            <a href="#menu" className="px-6 py-3 rounded-full bg-[#F7EFE6] text-[#533A2E] hover:bg-[#E9A8C1] border-2 border-[#533A2E] text-center">
              Menu
            </a>
            <a href="#cafes" className="px-6 py-3 rounded-full bg-[#F7EFE6] text-[#533A2E] hover:bg-[#E9A8C1] border-2 border-[#533A2E] text-center">
              Cafés
            </a>
            <a href="#lanches" className="px-6 py-3 rounded-full bg-[#F7EFE6] text-[#533A2E] hover:bg-[#E9A8C1] border-2 border-[#533A2E] text-center">
              Lanches
            </a>
            <a href="#sobremesas" className="px-6 py-3 rounded-full bg-[#F7EFE6] text-[#533A2E] hover:bg-[#E9A8C1] border-2 border-[#533A2E] text-center">
              Sobremesas
            </a>
            <a href="#sobre" className="px-6 py-3 rounded-full bg-[#F7EFE6] text-[#533A2E] hover:bg-[#E9A8C1] border-2 border-[#533A2E] text-center">
              Sobre Nós
            </a>
            <a href="#contato" className="px-6 py-3 rounded-full bg-[#F7EFE6] text-[#533A2E] hover:bg-[#E9A8C1] border-2 border-[#533A2E] text-center">
              Contato
            </a>
            <Button className="px-8 py-6 rounded-full bg-[#E9A8C1] text-[#533A2E] hover:bg-[#DDBB76] border-2 border-[#533A2E] cartoon-shadow">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Peça Agora
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
