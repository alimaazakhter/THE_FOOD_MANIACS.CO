import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Food Maniacs Co. | Bold Flavours & Premium Fast Food in Ahmedabad",
  description:
    "Delivering smiles with every bite since 2020. Experience juicy burgers, mouth-watering wraps, and crispy fried chicken at The Food Maniacs Co., Ahmedabad.",
  keywords: [
    "The Food Maniacs Co",
    "Best Burgers in Ahmedabad",
    "Fried Chicken Ahmedabad",
    "Ahmedabad Fast Food Restaurant",
    "Food Maniacs Ahmedabad Outlets",
    "Franchise Restaurant India",
  ],
  openGraph: {
    title: "The Food Maniacs Co. | Bold Flavours in Ahmedabad",
    description:
      "Since 2020, serving the craziest, boldest fast food flavors in Ahmedabad. Explore our menu of gourmet burgers, wraps, and crispy chicken.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness schema for SEO to address why their site isn't showing in search results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FastFoodRestaurant",
    "name": "The Food Maniacs Co.",
    "url": "https://thefoodmaniacsco.com",
    "telephone": "+917990274202",
    "email": "connect@thefoodmaniacsco.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "11:00",
      "closes": "23:00"
    },
    "priceRange": "₹"
  };

  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-obsidian-950 text-slate-100 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
