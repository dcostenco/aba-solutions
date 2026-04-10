import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import "./components/Navbar.css";
import "./components/Footer.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "ABA Solutions, LLC | Applied Behavior Analysis in Maryland",
  description:
    "Evidence-based ABA therapy for children with autism in Maryland. In-home and clinic-based services, parent training, and social skills groups. Serving Baltimore, Howard, Carroll, Anne Arundel, and Montgomery counties.",
  keywords: "ABA therapy, applied behavior analysis, autism, Maryland, BCBA, parent training, social skills",
  openGraph: {
    title: "ABA Solutions, LLC | ABA Therapy in Maryland",
    description: "Empowering families through evidence-based ABA therapy since 2014.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" style={{ paddingTop: "72px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
