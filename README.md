# Pricing Landing Page

This is a [Next.js](https://nextjs.org) project that showcases a modern pricing page with multiple service tiers.

## Project Overview

This project demonstrates a clean, professional pricing page with three service tiers:
- **Starter** - Entry-level plan for individuals and small teams
- **Professional** - Mid-tier plan for growing businesses  
- **Enterprise** - Custom plan for large organizations

## Features

- Responsive design that works on all devices
- Built with Next.js 16, React, TypeScript, and Tailwind CSS
- Centralized pricing content management via `app/pricing-content.ts`
- Easy-to-update pricing copy and features

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Development

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the pricing page.

## Updating Pricing Content (Issue KYR-9)

All pricing copy is centralized in `app/pricing-content.ts`. To update the pricing section wording:

1. Open `app/pricing-content.ts`
2. Update the text in the `pricingContent` object:
   - `hero.title` - Main heading (currently: "Simple, Transparent Pricing")
   - `hero.description` - Subheading/explanation (currently: "Choose the perfect plan...")
   - `plans[].tagline` - Plan descriptions
   - `plans[].features` - Feature lists for each plan

Example:
```typescript
export const pricingContent = {
  hero: {
    title: "Your clearer pricing title here",
    description: "Your clearer pricing explanation here",
  },
  // ... rest of plans
};
```

The changes will automatically reflect on the page when you save the file.

## Project Structure

```
├── app/
│   ├── page.tsx              # Main pricing page component
│   ├── pricing-content.ts    # Pricing copy and content (EDIT THIS)
│   └── layout.tsx            # Global layout
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Building for Production

```bash
npm run build
npm start
```

## Learn More

To learn more about Next.js, check out:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

```bash
npm run build
# Deploy with Vercel CLI
vercel
```

---

**Last Updated:** March 13, 2026  
**Related Issue:** KYR-9 - Update landing page copy for pricing section
