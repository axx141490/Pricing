/**
 * Pricing Page Content
 * This file contains all copywriting for the pricing section.
 * Issue KYR-9: Update landing page copy for pricing section
 * Co-founder requested clearer wording for the pricing explanation.
 */

export const pricingContent = {
  // Hero Section
  hero: {
    title: "Simple, Transparent Pricing",
    description: "Choose the perfect plan for your needs. Our flexible pricing scales with your business.",
  },

  // Plans
  plans: [
    {
      name: "Starter",
      tagline: "Perfect for getting started",
      price: "$29",
      period: "/month",
      cta: "Get Started",
      features: [
        "Up to 10 projects",
        "Basic analytics",
        "Community support",
      ],
    },
    {
      name: "Professional",
      tagline: "For growing businesses",
      price: "$99",
      period: "/month",
      badge: "Most Popular",
      cta: "Get Started",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      tagline: "For large organizations",
      price: "Custom",
      period: "",
      cta: "Contact Sales",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Dedicated support",
      ],
    },
  ],
};
