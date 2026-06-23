import { PRICING_TIERS } from '../data/content'
import PricingCard from './PricingCard'

export default function Pricing() {
  return (
    <section id="precios" className="py-24 bg-krea-light/80 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nuestros <span>Precios</span>
          </h2>
          <div className="gold-line mt-4 mb-6" />
          <p className="text-krea-gray max-w-xl mx-auto">
            Packs mensuales todo incluido. Elige el plan que mejor se adapte a tu negocio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {PRICING_TIERS.map((tier) => (
            <PricingCard
              key={tier.id}
              name={tier.name}
              slogan={tier.slogan}
              price={tier.price}
              services={tier.services}
              benefits={tier.benefits}
              footerSlogan={tier.footerSlogan}
              featured={tier.featured}
              isPremium={'isPremium' in tier && tier.isPremium}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
