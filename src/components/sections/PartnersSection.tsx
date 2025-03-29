'use client';

const partners = [
  { name: 'Sanctum', logo: '/images/partners/sanctum.png' },
  { name: 'Orca', logo: '/images/partners/orca.png' },
  { name: 'Kamino', logo: '/images/partners/kamino.png' },
];

export const PartnersSection = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <p className="text-[#636161] text-lg">Trusted partner to top institutions & industry leaders.</p>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex animate-infinite-scroll">
          {/* First set of partners */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="flex-shrink-0 mx-8">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add this to your globals.css
/*
@keyframes infinite-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-33.33%);
  }
}

.animate-infinite-scroll {
  animation: infinite-scroll 20s linear infinite;
}
*/ 