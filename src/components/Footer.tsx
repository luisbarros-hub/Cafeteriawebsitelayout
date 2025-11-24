import { MapPin, Phone, Clock, Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-[#5d3a1a] text-[#f5e6d3] py-16 border-t-8 border-[#d43d2c]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-[#d43d2c] rounded-full flex items-center justify-center border-4 border-[#f5e6d3]">
                <Coffee className="w-8 h-8 text-[#f5e6d3]" />
              </div>
              <div>
                <h3 className="text-[#f5e6d3]" style={{ fontFamily: 'Georgia, serif' }}>
                  Café Retrô
                </h3>
                <p className="text-[#f5e6d3] text-xs tracking-widest">EST. 1952</p>
              </div>
            </div>
            <p className="text-[#f5e6d3] opacity-90 leading-relaxed">
              Há mais de 70 anos servindo o melhor café em um ambiente que celebra 
              a nostalgia e o charme dos anos 50. Venha nos visitar e viva essa 
              experiência única!
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#ffd966] mb-4 tracking-wider">
              CONTATO
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d43d2c] shrink-0 mt-1" />
                <p className="text-[#f5e6d3] opacity-90">
                  Rua das Flores, 123<br />
                  Centro, São Paulo - SP
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d43d2c]" />
                <p className="text-[#f5e6d3] opacity-90">
                  (11) 3456-7890
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[#ffd966] mb-4 tracking-wider">
              HORÁRIO
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#d43d2c] shrink-0 mt-1" />
                <div className="text-[#f5e6d3] opacity-90">
                  <p>Segunda a Sexta</p>
                  <p>7h - 22h</p>
                </div>
              </div>
              <div className="text-[#f5e6d3] opacity-90 ml-8">
                <p>Sábado e Domingo</p>
                <p>8h - 23h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-[#d43d2c] pt-8 text-center">
          <p className="text-[#f5e6d3] opacity-80">
            © 2024 Café Retrô. Todos os direitos reservados. Desde 1952 servindo com amor.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <div className="w-3 h-3 bg-[#d43d2c] rounded-full"></div>
            <div className="w-3 h-3 bg-[#ffd966] rounded-full"></div>
            <div className="w-3 h-3 bg-[#d43d2c] rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
