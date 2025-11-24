import { Coffee, IceCream, Sandwich, Cake, Sparkles, Star } from "lucide-react";

const menuCategories = [
  {
    id: "cafes",
    title: "☕ Cafés",
    icon: Coffee,
    color: "#C6A988",
    items: [
      { name: "Espresso Clássico", price: "R$ 6,00", description: "Forte e encorpado", extras: true },
      { name: "Cappuccino Molly's", price: "R$ 10,00", description: "Receita especial da casa" },
      { name: "Latte Vintage", price: "R$ 10,00", description: "Cremoso e suave" },
      { name: "Mocaccino Cremoso", price: "R$ 12,00", description: "Café com chocolate" },
      { name: "Café Coado Retrô", price: "R$ 8,00", description: "Método tradicional" },
      { name: "Caramel Latte 50's", price: "R$ 12,00", description: "Com calda de caramelo" },
      { name: "Irish Coffee Premium", price: "R$ 16,00", description: "Café com whisky" },
    ],
    extras: ["Leite vegetal (+R$ 2)", "Chantilly retrô (+R$ 3)", "Calda de caramelo (+R$ 2)"]
  },
  {
    id: "bebidas",
    title: "🧊 Bebidas Geladas",
    icon: IceCream,
    color: "#B6E2D3",
    items: [
      { name: "Iced Latte Cremoso", price: "R$ 11,00", description: "Gelado e refrescante" },
      { name: "Cold Brew Retrô", price: "R$ 12,00", description: "Extração a frio 12h" },
      { name: "Frappé de Chocolate", price: "R$ 14,00", description: "Com chantilly" },
      { name: "Chá Gelado de Limão", price: "R$ 8,00", description: "Estilo diner americano" },
    ]
  },
  {
    id: "milkshakes",
    title: "🍦 Milkshakes Retrô",
    icon: IceCream,
    color: "#E9A8C1",
    items: [
      { name: "Vanilla 1954", price: "R$ 16,00", description: "Clássico de baunilha", featured: true },
      { name: "Morango com Cereja", price: "R$ 16,00", description: "Frutas frescas" },
      { name: "Chocolate Cremoso", price: "R$ 16,00", description: "Para chocólatras" },
      { name: "Mint-Choco Shake", price: "R$ 18,00", description: "Menta e chocolate" },
      { name: "Ovomaltine Retrô", price: "R$ 18,00", description: "Nostalgia pura" },
    ]
  },
  {
    id: "lanches",
    title: "🍔 Lanches Salgados",
    icon: Sandwich,
    color: "#DDBB76",
    items: [
      { name: "Cheeseburger Retrô", price: "R$ 24,00", description: "Burger 180g com queijo" },
      { name: "Sanduíche Molly", price: "R$ 22,00", description: "Frango + maionese caseira", featured: true },
      { name: "Club Sandwich Vintage", price: "R$ 26,00", description: "Triplo com bacon" },
      { name: "Hot Dog Clássico", price: "R$ 18,00", description: "Salsicha premium" },
      { name: "Batatas Rústicas", price: "R$ 14,00", description: "Porção 300g" },
    ]
  },
  {
    id: "sobremesas",
    title: "🍰 Doces & Sobremesas",
    icon: Cake,
    color: "#E9A8C1",
    items: [
      { name: "Donut Rosa Retrô", price: "R$ 8,00", description: "Glacê colorido", featured: true },
      { name: "Torta de Maçã Molly's", price: "R$ 16,00", description: "Receita secreta" },
      { name: "Brownie Cremoso", price: "R$ 14,00", description: "Com sorvete" },
      { name: "Cupcake de Baunilha", price: "R$ 10,00", description: "Cobertura cremosa" },
      { name: "Cheesecake com Calda", price: "R$ 18,00", description: "Frutas vermelhas" },
    ]
  },
  {
    id: "combos",
    title: "⭐ Combos Especiais",
    icon: Sparkles,
    color: "#DDBB76",
    items: [
      { name: "Combo Café + Donut", price: "R$ 12,00", description: "Café a escolher + 1 donut" },
      { name: "Combo Cappuccino + Brownie", price: "R$ 20,00", description: "Perfeito para tarde" },
      { name: "Combo Milkshake + Cheeseburger", price: "R$ 36,00", description: "Refeição completa" },
      { name: "Combo Família Molly's", price: "R$ 89,00", description: "2 burgers + batata + 2 bebidas" },
    ]
  }
];

export function MollyMenu() {
  return (
    <section id="menu" className="py-20 bg-[#F7EFE6]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#E9A8C1] px-8 py-4 rounded-full border-3 border-[#533A2E] cartoon-shadow mb-6">
            <Star className="w-6 h-6 text-[#533A2E] fill-[#533A2E]" />
            <span className="tracking-wider text-[#533A2E] text-xl">NOSSO CARDÁPIO</span>
            <Star className="w-6 h-6 text-[#533A2E] fill-[#533A2E]" />
          </div>
          <h2 className="text-[#533A2E] mb-6" style={{ fontFamily: 'Pacifico, cursive' }}>
            Delícias dos Anos 50
          </h2>
          <p className="text-[#533A2E] max-w-3xl mx-auto text-xl opacity-80">
            Prepare-se para uma explosão de sabor! Todos os nossos produtos são feitos com amor e ingredientes fresquinhos 💕
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {menuCategories.map((category) => (
            <div 
              key={category.id}
              id={category.id}
              className="bg-white rounded-3xl border-4 border-[#533A2E] cartoon-shadow p-8 hover:scale-105 transition-transform"
              style={{ borderColor: '#533A2E' }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b-4 border-dashed" style={{ borderColor: category.color }}>
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center border-4 border-[#533A2E] cartoon-shadow"
                  style={{ backgroundColor: category.color }}
                >
                  <span className="text-4xl">{category.title.split(' ')[0]}</span>
                </div>
                <h3 className="text-[#533A2E] flex-1" style={{ fontFamily: 'Pacifico, cursive' }}>
                  {category.title.split(' ').slice(1).join(' ')}
                </h3>
              </div>

              {/* Menu Items */}
              <div className="space-y-5">
                {category.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`pb-5 border-b-2 border-dashed border-[#C6A988] last:border-0 ${item.featured ? 'relative' : ''}`}
                  >
                    {item.featured && (
                      <div className="absolute -top-2 -right-2 bg-[#DDBB76] px-3 py-1 rounded-full border-2 border-[#533A2E] text-xs">
                        ⭐ FAVORITO
                      </div>
                    )}
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-[#533A2E] flex-1 pr-4">
                        {item.name}
                      </h4>
                      <span 
                        className="text-lg shrink-0 px-3 py-1 rounded-full border-2 border-[#533A2E]"
                        style={{ backgroundColor: category.color, color: '#533A2E' }}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p className="text-[#533A2E] opacity-70">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Extras */}
              {category.extras && (
                <div className="mt-6 pt-6 border-t-2 border-dashed border-[#C6A988]">
                  <p className="text-[#533A2E] mb-3">✨ Extras disponíveis:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.extras.map((extra, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-[#B6E2D3] text-[#533A2E] rounded-full border-2 border-[#533A2E] text-sm"
                      >
                        {extra}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Special Promotion */}
        <div className="bg-gradient-to-r from-[#E9A8C1] to-[#DDBB76] rounded-3xl border-4 border-[#533A2E] cartoon-shadow p-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center gap-4 mb-6">
              <span className="text-6xl animate-bounce">🎵</span>
              <span className="text-6xl animate-bounce" style={{ animationDelay: '0.1s' }}>🎶</span>
              <span className="text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎵</span>
            </div>
            <h3 className="text-[#533A2E] mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
              Promoção Jukebox Night!
            </h3>
            <p className="text-[#533A2E] text-xl mb-6">
              Toda sexta e sábado das 18h às 22h: escolha sua música favorita no nosso jukebox vintage e ganhe <strong>15% OFF</strong> no seu pedido!
            </p>
            <div className="inline-flex items-center gap-3 bg-[#533A2E] px-6 py-3 rounded-full text-[#DDBB76]">
              <Star className="w-5 h-5 fill-[#DDBB76]" />
              <span className="tracking-wider">VÁLIDO SOMENTE NOS FINAIS DE SEMANA</span>
              <Star className="w-5 h-5 fill-[#DDBB76]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
