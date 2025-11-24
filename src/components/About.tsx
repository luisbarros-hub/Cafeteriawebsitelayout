import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, Heart, Users } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-20 bg-[#d9c9b0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#d43d2c] text-[#f5e6d3] px-6 py-2 rounded-full border-4 border-[#5d3a1a] shadow-lg mb-6">
            <p className="tracking-widest">★ NOSSA HISTÓRIA ★</p>
          </div>
          <h2 className="text-[#5d3a1a] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Uma Tradição de Sabor
          </h2>
          <p className="text-[#5d3a1a] max-w-2xl mx-auto text-xl">
            Desde 1952, servindo o melhor café com aquele toque especial dos bons tempos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#d43d2c] rounded-full blur-2xl opacity-20"></div>
            <div className="relative rounded-3xl overflow-hidden border-8 border-[#d43d2c] shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1706905278396-35bd2cf58175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZXNwcmVzc28lMjBtYWNoaW5lfGVufDF8fHx8MTc2MzQ1MjI2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Máquina de café vintage"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-[#5d3a1a] text-lg leading-relaxed">
              Fundado pelo Sr. José Silva em 1952, o Café Retrô nasceu do sonho de trazer 
              para o Brasil a atmosfera acolhedora dos diners americanos, combinada com 
              o melhor do café brasileiro.
            </p>
            <p className="text-[#5d3a1a] text-lg leading-relaxed">
              Mais de 70 anos depois, continuamos fiéis à nossa missão: servir cafés 
              excepcionais em um ambiente que celebra a nostalgia e o bom gosto dos anos 50.
            </p>
            <p className="text-[#5d3a1a] text-lg leading-relaxed">
              Cada xícara é preparada com grãos selecionados e muito carinho, mantendo 
              viva a tradição que conquistou gerações de clientes fiéis.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#f5e6d3] p-8 rounded-3xl border-8 border-[#d43d2c] shadow-xl text-center hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-[#d43d2c] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-[#5d3a1a]">
              <Clock className="w-10 h-10 text-[#f5e6d3]" />
            </div>
            <h3 className="text-[#5d3a1a] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              70+ Anos
            </h3>
            <p className="text-[#5d3a1a]">
              De tradição e excelência no preparo do café perfeito
            </p>
          </div>

          <div className="bg-[#f5e6d3] p-8 rounded-3xl border-8 border-[#d43d2c] shadow-xl text-center hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-[#d43d2c] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-[#5d3a1a]">
              <Heart className="w-10 h-10 text-[#f5e6d3]" />
            </div>
            <h3 className="text-[#5d3a1a] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              Feito com Amor
            </h3>
            <p className="text-[#5d3a1a]">
              Cada bebida é preparada com dedicação e carinho especial
            </p>
          </div>

          <div className="bg-[#f5e6d3] p-8 rounded-3xl border-8 border-[#d43d2c] shadow-xl text-center hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-[#d43d2c] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-[#5d3a1a]">
              <Users className="w-10 h-10 text-[#f5e6d3]" />
            </div>
            <h3 className="text-[#5d3a1a] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              Ambiente Familiar
            </h3>
            <p className="text-[#5d3a1a]">
              Um espaço acolhedor onde todos são bem-vindos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
