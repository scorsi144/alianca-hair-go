import { createFileRoute } from "@tanstack/react-router";
import bodyHtml from "../site/body.html?raw";

const TITLE = "Barbearia Aliança em Sorocaba | Corte, Barba e Acabamento";
const DESCRIPTION =
  "Barbearia Aliança em Sorocaba (Vila Nova): corte, barba, acabamento e mais. 4,9 estrelas em 110 avaliações. Agende pelo WhatsApp (15) 99131-6832.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: "Barbearia Aliança",
  description: DESCRIPTION,
  telephone: "+55 15 99131-6832",
  url: "/",
  image: "/__l5e/assets-v1/33a3b9b7-2bd0-4546-811b-203081eccb8f/IMG8.jpg",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Ipanema, 738",
    addressLocality: "Sorocaba",
    addressRegion: "SP",
    postalCode: "18070-671",
    addressCountry: "BR",
  },
  geo: { "@type": "GeoCoordinates", latitude: -23.4838, longitude: -47.4523 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  sameAs: ["https://www.instagram.com/barbeariaaliancasorocaba"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "110",
  },
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "stylesheet", href: "/style.css" },
    ],
    scripts: [
      { src: "/script.js", defer: true },
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
});

function Index() {
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
