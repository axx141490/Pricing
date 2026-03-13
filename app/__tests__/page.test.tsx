import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Pricing Page', () => {
  describe('Page Rendering', () => {
    it('should render without crashing', () => {
      const { container } = render(<Home />);
      expect(container).toBeTruthy();
    });

    it('should render the header with Pricing title', () => {
      render(<Home />);
      const header = screen.getByRole('heading', { name: /pricing/i, level: 1 });
      expect(header).toBeInTheDocument();
    });
  });

  describe('Hero Section', () => {
    it('should render main heading', () => {
      render(<Home />);
      const mainHeading = screen.getByRole('heading', { name: /simple, transparent pricing/i });
      expect(mainHeading).toBeInTheDocument();
    });

    it('should render hero description', () => {
      render(<Home />);
      const description = screen.getByText(/choose the perfect plan/i);
      expect(description).toBeInTheDocument();
    });

    it('should render description with business scaling message', () => {
      render(<Home />);
      const scalingText = screen.getByText(/scales with your business/i);
      expect(scalingText).toBeInTheDocument();
    });
  });

  describe('Pricing Cards', () => {
    it('should render all three pricing plans', () => {
      render(<Home />);
      const starterHeading = screen.getByRole('heading', { name: /starter/i });
      const professionalHeading = screen.getByRole('heading', { name: /professional/i });
      const enterpriseHeading = screen.getByRole('heading', { name: /enterprise/i });

      expect(starterHeading).toBeInTheDocument();
      expect(professionalHeading).toBeInTheDocument();
      expect(enterpriseHeading).toBeInTheDocument();
    });

    it('should render plan taglines', () => {
      render(<Home />);
      expect(screen.getByText(/perfect for getting started/i)).toBeInTheDocument();
      expect(screen.getByText(/for growing businesses/i)).toBeInTheDocument();
      expect(screen.getByText(/for large organizations/i)).toBeInTheDocument();
    });

    it('should render prices', () => {
      render(<Home />);
      expect(screen.getByText(/\$29/)).toBeInTheDocument();
      expect(screen.getByText(/\$99/)).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /enterprise/i })).toBeInTheDocument();
      // Enterprise section should have Custom price
      const enterpriseCard = screen.getByRole('heading', { name: /enterprise/i }).closest('div');
      expect(enterpriseCard).toHaveTextContent(/custom/i);
    });
  });

  describe('Pricing Features', () => {
    it('should render starter plan features', () => {
      render(<Home />);
      expect(screen.getByText(/up to 10 projects/i)).toBeInTheDocument();
      expect(screen.getByText(/basic analytics/i)).toBeInTheDocument();
      expect(screen.getByText(/community support/i)).toBeInTheDocument();
    });

    it('should render professional plan features', () => {
      render(<Home />);
      expect(screen.getByText(/unlimited projects/i)).toBeInTheDocument();
      expect(screen.getByText(/advanced analytics/i)).toBeInTheDocument();
      expect(screen.getByText(/priority support/i)).toBeInTheDocument();
    });

    it('should render enterprise plan features', () => {
      render(<Home />);
      expect(screen.getByText(/everything in professional/i)).toBeInTheDocument();
      expect(screen.getByText(/custom integrations/i)).toBeInTheDocument();
      expect(screen.getByText(/dedicated support/i)).toBeInTheDocument();
    });
  });

  describe('Call-to-Action Buttons', () => {
    it('should render Get Started buttons', () => {
      render(<Home />);
      const getStartedButtons = screen.getAllByRole('button', { name: /get started/i });
      expect(getStartedButtons).toHaveLength(2); // Starter and Professional
    });

    it('should render Contact Sales button', () => {
      render(<Home />);
      const contactButton = screen.getByRole('button', { name: /contact sales/i });
      expect(contactButton).toBeInTheDocument();
    });
  });

  describe('Most Popular Badge', () => {
    it('should render Most Popular badge on Professional plan', () => {
      render(<Home />);
      const badge = screen.getByText(/most popular/i);
      expect(badge).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper semantic HTML structure', () => {
      const { container } = render(<Home />);
      const header = container.querySelector('header');
      const sections = container.querySelectorAll('section');

      expect(header).toBeInTheDocument();
      expect(sections.length).toBeGreaterThan(0);
    });

    it('should render all text content clearly', () => {
      render(<Home />);
      // Check for main content is accessible
      const allText = screen.getByText(/simple, transparent pricing/i);
      expect(allText).toBeVisible();
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive grid for pricing cards', () => {
      const { container } = render(<Home />);
      const gridContainer = container.querySelector('.grid');
      expect(gridContainer).toHaveClass('md:grid-cols-3');
    });
  });

  describe('KYR-9: Pricing Clarity', () => {
    it('should clearly explain pricing options', () => {
      render(<Home />);
      // Verify that the pricing explanation is clear and accessible
      expect(screen.getByText(/choose the perfect plan/i)).toBeInTheDocument();
      expect(screen.getByText(/scales with your business/i)).toBeInTheDocument();
    });

    it('should make plan differences obvious', () => {
      render(<Home />);
      // Check that all plans are distinguishable
      expect(screen.getByText(/\$29/)).toBeInTheDocument();
      expect(screen.getByText(/\$99/)).toBeInTheDocument();
      // Enterprise section should have Custom price
      const enterpriseCard = screen.getByRole('heading', { name: /enterprise/i }).closest('div');
      expect(enterpriseCard).toHaveTextContent(/custom/i);
    });

    it('should highlight most popular option', () => {
      render(<Home />);
      expect(screen.getByText(/most popular/i)).toBeInTheDocument();
    });
  });
});
