import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1719377058431-834b0772861b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGRpbmVyJTIwY29mZmVlfGVufDF8fHx8MTc2MzQ5NjgxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Ambiente da cafeteria",
  },
  {
    src: "https://images.unsplash.com/photo-1706905278396-35bd2cf58175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZXNwcmVzc28lMjBtYWNoaW5lfGVufDF8fHx8MTc2MzQ1MjI2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Máquina de café",
  },
  {
    src: "https://images.unsplash.com/photo-1692625329421-f597a7deb251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjB2aW50YWdlfGVufDF8fHx8MTc2MzM5Njc1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Xícara de café",
  },
  {
    src: "https://images.unsplash.com/photo-1678712803863-6cd22f6b9dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMG1pbGtzaGFrZSUyMGRpbmVyfGVufDF8fHx8MTc2MzQ5NjgxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Milkshakes",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-[#d43d2c]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#f5e6d3] text-[#d43d2c] px-6 py-2 rounded-full border-4 border-[#5d3a1a] shadow-lg mb-6">
            <p className="tracking-widest">★ GALERIA ★</p>
          </div>
          <h2 className="text-[#f5e6d3] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Momentos Especiais
          </h2>
          <p className="text-[#f5e6d3] max-w-2xl mx-auto text-xl">
            Um vislumbre do nosso ambiente acolhedor e das delícias que preparamos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-3xl border-8 border-[#5d3a1a] shadow-2xl hover:scale-105 transition-transform">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5d3a1a] to-transparent opacity-0 group-hover:opacity-90 transition-opacity flex items-end p-6">
                <p className="text-[#f5e6d3] tracking-wide">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pattern decoration */}
        <div className="mt-16 flex justify-center gap-4">
          <div className="w-4 h-4 bg-[#f5e6d3] rounded-full border-2 border-[#5d3a1a]"></div>
          <div className="w-4 h-4 bg-[#ffd966] rounded-full border-2 border-[#5d3a1a]"></div>
          <div className="w-4 h-4 bg-[#f5e6d3] rounded-full border-2 border-[#5d3a1a]"></div>
          <div className="w-4 h-4 bg-[#ffd966] rounded-full border-2 border-[#5d3a1a]"></div>
          <div className="w-4 h-4 bg-[#f5e6d3] rounded-full border-2 border-[#5d3a1a]"></div>
        </div>
      </div>
    </section>
  );
}
