import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#f5e6d3]">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #5d3a1a 0, #5d3a1a 10px, transparent 10px, transparent 20px)',
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-[#d43d2c] text-[#f5e6d3] px-6 py-2 rounded-full border-4 border-[#5d3a1a] shadow-lg">
              <p className="tracking-widest">★ DESDE 1952 ★</p>
            </div>
            
            <h1 className="text-[#5d3a1a]" style={{ fontFamily: 'Georgia, serif' }}>
              O Sabor Clássico dos Anos 50
            </h1>
            
            <p className="text-[#5d3a1a] text-xl">
              Venha experimentar o melhor café da cidade em um ambiente que te leva de volta à época dourada dos diners americanos.
            </p>

            <div className="flex gap-4 pt-4">
              <Button 
                className="bg-[#d43d2c] text-[#f5e6d3] hover:bg-[#5d3a1a] border-4 border-[#5d3a1a] rounded-full px-8 py-6 shadow-lg hover:scale-105 transition-transform"
              >
                Ver Cardápio
              </Button>
              <Button 
                variant="outline"
                className="bg-[#f5e6d3] text-[#5d3a1a] hover:bg-[#d9c9b0] border-4 border-[#5d3a1a] rounded-full px-8 py-6 shadow-lg hover:scale-105 transition-transform"
              >
                Conheça-nos
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[#d43d2c] rounded-full blur-2xl opacity-20"></div>
            <div className="relative rounded-3xl overflow-hidden border-8 border-[#d43d2c] shadow-2xl transform hover:rotate-1 transition-transform">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1719377058431-834b0772861b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGRpbmVyJTIwY29mZmVlfGVufDF8fHx8MTc2MzQ5NjgxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Café Retrô"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative badge */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ffd966] rounded-full flex items-center justify-center border-8 border-[#5d3a1a] shadow-xl animate-pulse">
              <div className="text-center">
                <p className="text-[#5d3a1a] tracking-wider">100%</p>
                <p className="text-[#5d3a1a] text-xs tracking-wider">QUALIDADE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#d43d2c]"></div>
    </section>
  );
}
