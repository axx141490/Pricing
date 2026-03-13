import { pricingContent } from './pricing-content';

export default function Home() {
  const { hero, plans } = pricingContent;
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Pricing</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {hero.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {hero.description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-lg p-8 ${
                plan.badge
                  ? 'border-2 border-blue-600 relative'
                  : 'border-gray-200'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">{plan.tagline}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              <button
                className={`w-full py-2 px-4 rounded-lg mb-8 ${
                  plan.badge
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : plan.price === 'Custom'
                    ? 'border border-gray-300 text-gray-900 hover:bg-gray-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </button>
              <ul className="space-y-4 text-gray-600">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
