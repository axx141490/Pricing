import { pricingContent } from '../pricing-content';

describe('Pricing Content', () => {
  describe('Hero Section', () => {
    it('should have a title', () => {
      expect(pricingContent.hero.title).toBeDefined();
      expect(typeof pricingContent.hero.title).toBe('string');
    });

    it('should have a description', () => {
      expect(pricingContent.hero.description).toBeDefined();
      expect(typeof pricingContent.hero.description).toBe('string');
    });

    it('should have non-empty title', () => {
      expect(pricingContent.hero.title.length).toBeGreaterThan(0);
    });

    it('should have non-empty description', () => {
      expect(pricingContent.hero.description.length).toBeGreaterThan(0);
    });

    it('should have a clear pricing title', () => {
      expect(pricingContent.hero.title).toContain('Pricing');
    });
  });

  describe('Plans Array', () => {
    it('should have plans array', () => {
      expect(Array.isArray(pricingContent.plans)).toBe(true);
    });

    it('should have exactly 3 plans', () => {
      expect(pricingContent.plans).toHaveLength(3);
    });

    it('should have Starter, Professional, and Enterprise plans', () => {
      const planNames = pricingContent.plans.map((plan) => plan.name);
      expect(planNames).toEqual(['Starter', 'Professional', 'Enterprise']);
    });
  });

  describe('Individual Plan Structure', () => {
    it('should have required properties for each plan', () => {
      pricingContent.plans.forEach((plan) => {
        expect(plan).toHaveProperty('name');
        expect(plan).toHaveProperty('tagline');
        expect(plan).toHaveProperty('price');
        expect(plan).toHaveProperty('period');
        expect(plan).toHaveProperty('cta');
        expect(plan).toHaveProperty('features');
      });
    });

    it('should have valid name for each plan', () => {
      pricingContent.plans.forEach((plan) => {
        expect(typeof plan.name).toBe('string');
        expect(plan.name.length).toBeGreaterThan(0);
      });
    });

    it('should have valid tagline for each plan', () => {
      pricingContent.plans.forEach((plan) => {
        expect(typeof plan.tagline).toBe('string');
        expect(plan.tagline.length).toBeGreaterThan(0);
      });
    });

    it('should have valid price for each plan', () => {
      pricingContent.plans.forEach((plan) => {
        expect(typeof plan.price).toBe('string');
        expect(plan.price.length).toBeGreaterThan(0);
      });
    });

    it('should have valid CTA button text for each plan', () => {
      pricingContent.plans.forEach((plan) => {
        expect(typeof plan.cta).toBe('string');
        expect(plan.cta.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Plan Features', () => {
    it('should have features array for each plan', () => {
      pricingContent.plans.forEach((plan) => {
        expect(Array.isArray(plan.features)).toBe(true);
      });
    });

    it('should have at least 3 features for each plan', () => {
      pricingContent.plans.forEach((plan) => {
        expect(plan.features.length).toBeGreaterThanOrEqual(3);
      });
    });

    it('should have non-empty feature strings', () => {
      pricingContent.plans.forEach((plan) => {
        plan.features.forEach((feature) => {
          expect(typeof feature).toBe('string');
          expect(feature.length).toBeGreaterThan(0);
        });
      });
    });
  });

  describe('Specific Plans', () => {
    it('Starter plan should have correct details', () => {
      const starter = pricingContent.plans[0];
      expect(starter.name).toBe('Starter');
      expect(starter.price).toBe('$19');
      expect(starter.period).toBe('/month');
      expect(starter.cta).toBe('Get Started');
    });

    it('Professional plan should have badge', () => {
      const professional = pricingContent.plans[1];
      expect(professional.name).toBe('Professional');
      expect(professional.badge).toBe('Most Popular');
      expect(professional.price).toBe('$99');
    });

    it('Enterprise plan should have custom pricing', () => {
      const enterprise = pricingContent.plans[2];
      expect(enterprise.name).toBe('Enterprise');
      expect(enterprise.price).toBe('Custom');
      expect(enterprise.cta).toBe('Contact Sales');
    });
  });

  describe('Content Clarity (KYR-9 Requirement)', () => {
    it('should have clear and concise hero description', () => {
      const description = pricingContent.hero.description;
      // Should mention plans and business/needs
      expect(description.toLowerCase()).toMatch(/plan|business|need/i);
    });

    it('should have meaningful plan taglines', () => {
      pricingContent.plans.forEach((plan) => {
        // Each tagline should be descriptive and not empty
        expect(plan.tagline).toBeTruthy();
        expect(plan.tagline.split(' ').length).toBeGreaterThanOrEqual(2);
      });
    });

    it('should have clear call-to-action buttons', () => {
      const ctas = pricingContent.plans.map((plan) => plan.cta);
      expect(ctas).toContain('Get Started');
      expect(ctas).toContain('Contact Sales');
      // All CTAs should be action-oriented
      ctas.forEach((cta) => {
        expect(cta.length).toBeGreaterThan(0);
      });
    });
  });
});
