import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export function MollyFooter() {
  return (
    <footer id="contato" className="bg-[#533A2E] text-[#F7EFE6] py-16 border-t-8 border-[#E9A8C1] relative overflow-hidden">
      {/* Vintage Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <p 
          className="text-[#C6A988] opacity-[0.08] rotate-[-15deg]"
          style={{ 
            fontFamily: 'Pacifico, cursive',
            fontSize: 'clamp(4rem, 12vw, 10rem)',
            letterSpacing: '0.1em'
          }}
        >
          Luis Barros
        </p>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-[#E9A8C1] rounded-full flex items-center justify-center border-4 border-[#F7EFE6] cartoon-shadow">
                <span className="text-4xl">🐕</span>
              </div>
              <div>
                <h3 className="text-[#F7EFE6] text-3xl" style={{ fontFamily: 'Pacifico, cursive' }}>
                  Molly's Café
                </h3>
                <p className="text-[#DDBB76] text-sm tracking-widest">Since 1954</p>
              </div>
            </div>
            <p className="text-[#F7EFE6] leading-relaxed mb-6 opacity-90">
              Há mais de 70 anos trazendo a magia dos anos 50 para sua mesa! 
              Venha tomar um café delicioso, saborear nossos milkshakes e lanches 
              em um ambiente cartoon vintage cheio de charme. A Molly te espera! 🐾☕
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-[#E9A8C1] rounded-full flex items-center justify-center border-3 border-[#F7EFE6] hover:bg-[#DDBB76] transition-all hover:scale-110"
              >
                <Instagram className="w-6 h-6 text-[#533A2E]" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-[#B6E2D3] rounded-full flex items-center justify-center border-3 border-[#F7EFE6] hover:bg-[#DDBB76] transition-all hover:scale-110"
              >
                <Facebook className="w-6 h-6 text-[#533A2E]" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-[#DDBB76] rounded-full flex items-center justify-center border-3 border-[#F7EFE6] hover:bg-[#E9A8C1] transition-all hover:scale-110"
              >
                <Twitter className="w-6 h-6 text-[#533A2E]" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#E9A8C1] mb-6 text-xl">
              📍 Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#DDBB76] shrink-0 mt-1" />
                <div>
                  <p className="text-[#F7EFE6] opacity-90">
                    Rua Vintage, 1954<br />
                    Centro Histórico<br />
                    São Paulo - SP
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#DDBB76]" />
                <p className="text-[#F7EFE6] opacity-90">
                  (11) 1954-5050
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#DDBB76]" />
                <p className="text-[#F7EFE6] opacity-90">
                  contato@mollyscafe.com.br
                </p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-[#E9A8C1] mb-6 text-xl">
              ⏰ Horário
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#DDBB76] shrink-0 mt-1" />
                <div className="text-[#F7EFE6] opacity-90">
                  <p className="mb-3">
                    <strong>Segunda a Quinta</strong><br />
                    8h00 - 22h00
                  </p>
                  <p className="mb-3">
                    <strong>Sexta e Sábado</strong><br />
                    8h00 - 23h00<br />
                    <span className="text-[#DDBB76] text-sm">🎵 Jukebox Night!</span>
                  </p>
                  <p>
                    <strong>Domingo</strong><br />
                    9h00 - 20h00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#E9A8C1] to-[#DDBB76] rounded-3xl border-4 border-[#F7EFE6] cartoon-shadow p-8 mb-12 text-center">
          <h4 className="text-[#533A2E] mb-4 text-2xl" style={{ fontFamily: 'Pacifico, cursive' }}>
            Fale com a Gente! 💬
          </h4>
          <p className="text-[#533A2E] mb-6 text-lg">
            Tem alguma dúvida? Quer fazer uma reserva? Adoraríamos ouvir você!
          </p>
          <a 
            href="mailto:contato@mollyscafe.com.br"
            className="inline-block px-10 py-4 bg-[#533A2E] text-[#F7EFE6] rounded-full border-3 border-[#F7EFE6] hover:bg-[#C6A988] hover:text-[#533A2E] transition-all hover:scale-105 cartoon-shadow"
          >
            Enviar Mensagem
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-[#C6A988] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#F7EFE6] opacity-80 text-center md:text-left">
              © 2024 Molly's Café. Todos os direitos reservados. Servindo com amor desde 1954 💕
            </p>
            <div className="flex gap-3">
              <div className="w-4 h-4 bg-[#E9A8C1] rounded-full border-2 border-[#F7EFE6]"></div>
              <div className="w-4 h-4 bg-[#B6E2D3] rounded-full border-2 border-[#F7EFE6]"></div>
              <div className="w-4 h-4 bg-[#DDBB76] rounded-full border-2 border-[#F7EFE6]"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}