import { Coffee, IceCream, Croissant } from "lucide-react";

const menuItems = [
  {
    category: "Cafés Clássicos",
    icon: Coffee,
    items: [
      { name: "Café Expresso", price: "R$ 6,00", description: "O clássico espresso italiano" },
      { name: "Café Americano", price: "R$ 8,00", description: "Espresso suave e alongado" },
      { name: "Cappuccino", price: "R$ 10,00", description: "Espresso com leite vaporizado e espuma" },
      { name: "Café Latte", price: "R$ 10,00", description: "Espresso com leite cremoso" },
      { name: "Mocha", price: "R$ 12,00", description: "Café com chocolate e chantilly" },
      { name: "Café Especial da Casa", price: "R$ 14,00", description: "Nossa receita secreta dos anos 50" },
    ]
  },
  {
    category: "Milkshakes & Bebidas",
    icon: IceCream,
    items: [
      { name: "Milkshake de Baunilha", price: "R$ 15,00", description: "Cremoso e clássico" },
      { name: "Milkshake de Chocolate", price: "R$ 15,00", description: "Para os amantes de chocolate" },
      { name: "Milkshake de Morango", price: "R$ 15,00", description: "Feito com morangos frescos" },
      { name: "Float de Coca-Cola", price: "R$ 12,00", description: "Coca-Cola com sorvete de baunilha" },
      { name: "Refrigerante Retrô", price: "R$ 6,00", description: "Variedade de sabores clássicos" },
      { name: "Suco Natural", price: "R$ 8,00", description: "Frutas da estação" },
    ]
  },
  {
    category: "Delícias & Lanches",
    icon: Croissant,
    items: [
      { name: "Croissant Francês", price: "R$ 8,00", description: "Fresquinho e amanteigado" },
      { name: "Torta de Maçã", price: "R$ 12,00", description: "Receita tradicional americana" },
      { name: "Cheesecake", price: "R$ 14,00", description: "Cremoso e delicioso" },
      { name: "Donut Glaceado", price: "R$ 6,00", description: "Com cobertura colorida" },
      { name: "Sanduíche Club", price: "R$ 18,00", description: "O clássico dos diners" },
      { name: "Waffles com Calda", price: "R$ 16,00", description: "Crocantes e dourados" },
    ]
  }
];

export function Menu() {
  return (
    <section id="cardapio" className="py-20 bg-[#f5e6d3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#d43d2c] text-[#f5e6d3] px-6 py-2 rounded-full border-4 border-[#5d3a1a] shadow-lg mb-6">
            <p className="tracking-widest">★ NOSSO CARDÁPIO ★</p>
          </div>
          <h2 className="text-[#5d3a1a] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Sabores Inesquecíveis
          </h2>
          <p className="text-[#5d3a1a] max-w-2xl mx-auto text-xl">
            Descubra nossa seleção de cafés, bebidas e delícias inspiradas nos anos 50
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((category, idx) => (
            <div key={idx} className="bg-white rounded-3xl border-8 border-[#d43d2c] shadow-xl p-8 hover:scale-105 transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#d43d2c] rounded-full flex items-center justify-center border-4 border-[#5d3a1a]">
                  <category.icon className="w-8 h-8 text-[#f5e6d3]" />
                </div>
                <h3 className="text-[#5d3a1a]" style={{ fontFamily: 'Georgia, serif' }}>
                  {category.category}
                </h3>
              </div>

              <div className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="pb-4 border-b-2 border-dashed border-[#d9c9b0] last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-[#5d3a1a]">
                        {item.name}
                      </h4>
                      <span className="text-[#d43d2c] shrink-0 ml-2">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-[#5d3a1a] text-sm opacity-80">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-16 bg-[#d43d2c] rounded-3xl border-8 border-[#5d3a1a] shadow-xl p-8 text-center">
          <h3 className="text-[#f5e6d3] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            🎵 Especial Jukebox 🎵
          </h3>
          <p className="text-[#f5e6d3] text-xl mb-4">
            Toda sexta e sábado: escolha sua música favorita dos anos 50 no nosso jukebox e ganhe 10% de desconto!
          </p>
          <p className="text-[#ffd966] tracking-widest">
            ★ PROMOÇÃO VÁLIDA DAS 18H ÀS 22H ★
          </p>
        </div>
      </div>
    </section>
  );
}
