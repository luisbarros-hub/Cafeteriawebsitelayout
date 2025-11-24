import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, Users, Heart, Award } from "lucide-react";

export function MollyAbout() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-[#B6E2D3] to-[#F7EFE6]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#DDBB76] px-8 py-4 rounded-full border-3 border-[#533A2E] cartoon-shadow mb-6">
            <span className="text-2xl">🐕</span>
            <span className="tracking-wider text-[#533A2E] text-xl">SOBRE NÓS</span>
            <span className="text-2xl">☕</span>
          </div>
          <h2 className="text-[#533A2E] mb-6" style={{ fontFamily: 'Pacifico, cursive' }}>
            A História da Molly
          </h2>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="vintage-border cartoon-shadow overflow-hidden bg-[#C6A988] p-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1627590927181-c5fc8a4b83b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbmVvbiUyMHNpZ24lMjBjYWZlfGVufDF8fHx8MTc2MzQ5NzY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Molly's Café Neon Sign"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-[#F7EFE6] p-8 rounded-3xl border-4 border-[#533A2E] cartoon-shadow">
              <h3 className="text-[#533A2E] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
                Desde 1954
              </h3>
              <p className="text-[#533A2E] leading-relaxed mb-4">
                Tudo começou em 1954, quando a querida Molly - uma simpática labradora preta - 
                e sua dona, a Sra. Betty Johnson, abriram as portas do primeiro Molly's Café 
                no coração de uma pequena cidade americana.
              </p>
              <p className="text-[#533A2E] leading-relaxed mb-4">
                Com um jukebox colorido, banquinhos giratórios e o aroma irresistível de café 
                fresco, o café rapidamente se tornou o ponto de encontro favorito da cidade.
              </p>
              <p className="text-[#533A2E] leading-relaxed">
                Hoje, mais de 70 anos depois, continuamos servindo com o mesmo carinho e 
                dedicação, mantendo viva a tradição dos diners vintage em um ambiente cartoon 
                cheio de charme e nostalgia! 💕
              </p>
            </div>
          </div>
        </div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#E9A8C1] p-8 rounded-3xl border-4 border-[#533A2E] cartoon-shadow text-center hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-[#F7EFE6] rounded-full flex items-center justify-center mx-auto mb-4 border-3 border-[#533A2E]">
              <Clock className="w-10 h-10 text-[#533A2E]" />
            </div>
            <h4 className="text-[#533A2E] mb-2">70+ Anos</h4>
            <p className="text-[#533A2E] opacity-80">De tradição e qualidade</p>
          </div>

          <div className="bg-[#B6E2D3] p-8 rounded-3xl border-4 border-[#533A2E] cartoon-shadow text-center hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-[#F7EFE6] rounded-full flex items-center justify-center mx-auto mb-4 border-3 border-[#533A2E]">
              <Heart className="w-10 h-10 text-[#533A2E]" />
            </div>
            <h4 className="text-[#533A2E] mb-2">Feito com Amor</h4>
            <p className="text-[#533A2E] opacity-80">Receitas caseiras especiais</p>
          </div>

          <div className="bg-[#DDBB76] p-8 rounded-3xl border-4 border-[#533A2E] cartoon-shadow text-center hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-[#F7EFE6] rounded-full flex items-center justify-center mx-auto mb-4 border-3 border-[#533A2E]">
              <Users className="w-10 h-10 text-[#533A2E]" />
            </div>
            <h4 className="text-[#533A2E] mb-2">Família Molly's</h4>
            <p className="text-[#533A2E] opacity-80">Todos são bem-vindos</p>
          </div>

          <div className="bg-[#C6A988] p-8 rounded-3xl border-4 border-[#533A2E] cartoon-shadow text-center hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-[#F7EFE6] rounded-full flex items-center justify-center mx-auto mb-4 border-3 border-[#533A2E]">
              <Award className="w-10 h-10 text-[#533A2E]" />
            </div>
            <h4 className="text-[#533A2E] mb-2">Premiado</h4>
            <p className="text-[#533A2E] opacity-80">Melhor café vintage da região</p>
          </div>
        </div>

        {/* Team/Photos Section */}
        <div className="bg-white rounded-3xl border-4 border-[#533A2E] cartoon-shadow p-10">
          <h3 className="text-[#533A2E] text-center mb-8" style={{ fontFamily: 'Pacifico, cursive' }}>
            Momentos Especiais
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden border-4 border-[#533A2E] cartoon-shadow hover:scale-105 transition-transform">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759407518944-717777e38bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGRpbmVyJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2MzQ5NzY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ambiente Retrô"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#533A2E] bg-opacity-90 p-4">
                <p className="text-[#F7EFE6] text-center">Ambiente Cartoon Vintage</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border-4 border-[#533A2E] cartoon-shadow hover:scale-105 transition-transform">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718459725169-bbf881178b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMG1pbGtzaGFrZSUyMHBpbmt8ZW58MXx8fHwxNzYzNDk3NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Milkshakes"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#533A2E] bg-opacity-90 p-4">
                <p className="text-[#F7EFE6] text-center">Milkshakes Artesanais</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border-4 border-[#533A2E] cartoon-shadow hover:scale-105 transition-transform">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761062083136-dcfbd2a000f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZGluZXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjM0NTM4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Interior do Café"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#533A2E] bg-opacity-90 p-4">
                <p className="text-[#F7EFE6] text-center">Nosso Espaço Acolhedor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
