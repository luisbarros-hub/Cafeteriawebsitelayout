import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    text: "O melhor café da cidade! O ambiente me transporta para os anos 50, é simplesmente maravilhoso. Os milkshakes são divinos!",
    rating: 5,
  },
  {
    name: "João Pedro",
    text: "Frequento há mais de 20 anos e continua sendo meu lugar favorito. O café especial da casa é incomparável!",
    rating: 5,
  },
  {
    name: "Ana Clara",
    text: "Ambiente acolhedor, atendimento impecável e o melhor cappuccino que já provei. Uma viagem no tempo deliciosa!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-[#d9c9b0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#d43d2c] text-[#f5e6d3] px-6 py-2 rounded-full border-4 border-[#5d3a1a] shadow-lg mb-6">
            <p className="tracking-widest">★ DEPOIMENTOS ★</p>
          </div>
          <h2 className="text-[#5d3a1a] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            O Que Dizem Nossos Clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-[#f5e6d3] rounded-3xl border-8 border-[#d43d2c] shadow-xl p-8 hover:scale-105 transition-transform">
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#ffd966] text-[#ffd966]" />
                ))}
              </div>
              <p className="text-[#5d3a1a] text-center mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="text-center">
                <p className="text-[#d43d2c] tracking-wide">
                  — {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
