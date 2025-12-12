import React, {Suspense, useEffect} from "react";
import Hero from "../components/landing/jsx/Hero";
import SeoHead from "../components/SeoHead";

const Services = React.lazy(() => import("../components/landing/jsx/Services"));
const About = React.lazy(() => import("../components/landing/jsx/About"));
const Portfolio = React.lazy(() =>
  import("../components/landing/jsx/Portfolio")
);
const Stats = React.lazy(() => import("../components/landing/jsx/Stats"));
const WhyChooseUs = React.lazy(() =>
  import("../components/landing/jsx/WhyChooseUs")
);
const ContactForm = React.lazy(() =>
  import("../components/landing/jsx/ContactForm")
);

const SectionFallback = ({text}) => (
  <div className="py-10 text-center text-gray-500">{text}</div>
);

const LazySection = ({Component, fallbackText}) => (
  <Suspense fallback={<SectionFallback text={fallbackText} />}>
    <Component />
  </Suspense>
);

export default function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {key: "services", Component: Services, fallback: "...Loading services"},
    {key: "about", Component: About, fallback: "...Loading About Us"},
    // {key: "portfolio", Component: Portfolio, fallback: "...Loading Portfolio"},
    {key: "stats", Component: Stats, fallback: "...Loading Stats"},
    {key: "why", Component: WhyChooseUs, fallback: "...Loading Why Choose Us"},
    {
      key: "contact",
      Component: ContactForm,
      fallback: "...Loading Contact Form",
    },
  ];

  return (
    // Added overflow-x-hidden to prevent horizontal scroll
    <div className="overflow-x-hidden w-full max-w-full" dir="rtl">
      <SeoHead
        title="Professional Website Creation | TrueFolio"
        description="TrueFolio delivers fast, SEO-optimized, modern websites with elegant UX tailored to your business."
        keywords="website creation, web design, web development, company website, e-commerce store, SEO"
        canonical="https://truefolio.vercel.app/"
        ogTitle="Professional Website Creation | TrueFolio"
        ogDescription="Fast, SEO-optimized websites with elegant UX for your business."
        ogImage="https://truefolio.vercel.app/logo.png"
        ogUrl="https://truefolio.vercel.app/"
        twitterTitle="Professional Website Creation | TrueFolio"
        twitterDescription="Fast, SEO-optimized websites with elegant UX for your business."
        twitterImage="https://truefolio.vercel.app/logo.png"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "TrueFolio Home",
            description:
              "Landing page for professional, fast, SEO-optimized website creation",
            url: "https://truefolio.vercel.app/",
            mainEntity: {
              "@type": "Service",
              name: "Website Creation",
              serviceType: "Website Development",
              provider: {
                "@type": "Organization",
                name: "TrueFolio",
                url: "https://truefolio.vercel.app/",
              },
              areaServed: "Middle East",
              offers: {
                "@type": "Offer",
                availability: "InStock",
              },
            },
          },
        ]}
      />

      <Hero />

      {sections.map(({key, Component, fallback}) => (
        <LazySection key={key} Component={Component} fallbackText={fallback} />
      ))}
    </div>
  );
}
