import React, { Suspense } from "react";
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
export default function Landing() {
  return (
    <div className="" dir="rtl">
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

      <Suspense
        fallback={
          <div style={{padding: "2rem", textAlign: "center", color: "#999"}}>
            ...Loading services
          </div>
        }>
        <Services />
      </Suspense>

      <Suspense
        fallback={
          <div style={{padding: "2rem", textAlign: "center", color: "#999"}}>
            ...Loading About Us
          </div>
        }>
        <About />
      </Suspense>

      {/* <Suspense
        fallback={
          <div style={{padding: "2rem", textAlign: "center", color: "#999"}}>
            ...Loading Portfolio
          </div>
        }>
        <Portfolio />
      </Suspense> */}

      <Suspense
        fallback={
          <div style={{padding: "2rem", textAlign: "center", color: "#999"}}>
            ...Loading Stats
          </div>
        }>
        <Stats />
      </Suspense>

      <Suspense
        fallback={
          <div style={{padding: "2rem", textAlign: "center", color: "#999"}}>
            ...Loading Why Choose Us
          </div>
        }>
        <WhyChooseUs />
      </Suspense>
    </div>
  );
}
