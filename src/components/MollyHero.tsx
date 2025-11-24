import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Sparkles, Heart, Star } from "lucide-react";

export function MollyHero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#B6E2D3] to-[#F7EFE6] py-20">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#E9A8C1] rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#DDBB76] rounded-full opacity-30 blur-2xl"></div>
      
      {/* Floating stars */}
      <div className="absolute top-20 right-1/4">
        <Star className="w-8 h-8 text-[#DDBB76] fill-[#DDBB76] animate-pulse" />
      </div>
      <div className="absolute bottom-40 left-1/4">
        <Star className="w-6 h-6 text-[#E9A8C1] fill-[#E9A8C1] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Since 1954 Badge */}
            <div className="inline-flex items-center gap-2 bg-[#DDBB76] px-6 py-3 rounded-full border-3 border-[#533A2E] cartoon-shadow">
              <Sparkles className="w-5 h-5 text-[#533A2E]" />
              <span className="tracking-wider text-[#533A2E]">SINCE 1954</span>
              <Sparkles className="w-5 h-5 text-[#533A2E]" />
            </div>
            
            {/* Main Title */}
            <div>
              <h1 className="text-[#533A2E] mb-4 neon-glow" style={{ fontFamily: 'Pacifico, cursive' }}>
                Molly's Café
              </h1>
              <p className="text-[#C6A988] text-2xl italic">
                Your Favorite 50's Diner Experience
              </p>
            </div>
            
            <p className="text-[#533A2E] text-xl leading-relaxed">
              Bem-vindo ao Molly's Café! Desde 1954 servindo os melhores cafés, milkshakes 
              e lanches em um ambiente cartoon vintage que vai te fazer viajar no tempo. 
              Venha conhecer a Molly e sua turma! 🐕☕
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="px-10 py-7 rounded-full bg-[#E9A8C1] text-[#533A2E] hover:bg-[#DDBB76] border-3 border-[#533A2E] cartoon-shadow hover:scale-110 transition-transform text-lg"
              >
                <Heart className="w-5 h-5 mr-2" />
                Ver Cardápio
              </Button>
              <Button 
                variant="outline"
                className="px-10 py-7 rounded-full bg-[#F7EFE6] text-[#533A2E] hover:bg-[#B6E2D3] border-3 border-[#533A2E] cartoon-shadow hover:scale-110 transition-transform text-lg"
              >
                Nossa História
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-[#E9A8C1] rounded-full flex items-center justify-center border-2 border-[#533A2E]">
                  <span className="text-2xl">☕</span>
                </div>
                <div>
                  <p className="text-[#533A2E]">Premium</p>
                  <p className="text-[#533A2E] text-sm opacity-70">Coffee Beans</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-[#B6E2D3] rounded-full flex items-center justify-center border-2 border-[#533A2E]">
                  <span className="text-2xl">🍔</span>
                </div>
                <div>
                  <p className="text-[#533A2E]">Fresh</p>
                  <p className="text-[#533A2E] text-sm opacity-70">Ingredients</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-[#DDBB76] rounded-full flex items-center justify-center border-2 border-[#533A2E]">
                  <span className="text-2xl">🍦</span>
                </div>
                <div>
                  <p className="text-[#533A2E]">Homemade</p>
                  <p className="text-[#533A2E] text-sm opacity-70">Ice Cream</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image + Molly Mascot */}
          <div className="relative">
            {/* Main Hero Image */}
            <div className="relative vintage-border cartoon-shadow overflow-hidden bg-[#C6A988] p-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761062083136-dcfbd2a000f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZGluZXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjM0NTM4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Molly's Café Interior"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              
              {/* Neon Sign Overlay */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#533A2E] px-8 py-4 rounded-3xl border-3 border-[#DDBB76] cartoon-shadow">
                <p className="text-[#E9A8C1] text-3xl neon-glow" style={{ fontFamily: 'Pacifico, cursive' }}>
                  OPEN
                </p>
              </div>
            </div>

            {/* Molly Mascot Card */}
            <div className="absolute -bottom-6 -left-6 bg-[#F7EFE6] p-6 rounded-3xl border-4 border-[#533A2E] cartoon-shadow">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-[#533A2E] rounded-full flex items-center justify-center border-3 border-[#E9A8C1]">
                  <span className="text-4xl">🐕</span>
                </div>
                <div>
                  <p className="text-[#533A2E]">Meet Molly!</p>
                  <p className="text-[#533A2E] text-sm opacity-70">Our cute mascot</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#E9A8C1] rounded-full flex items-center justify-center border-4 border-[#533A2E] cartoon-shadow animate-bounce">
              <div className="text-center">
                <p className="text-[#533A2E] text-2xl">70+</p>
                <p className="text-[#533A2E] text-xs">YEARS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-[#F7EFE6]">
          <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
