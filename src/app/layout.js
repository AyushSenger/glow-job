import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "GLOW JOB | Indulgent Lip Oils & Butter Balms",
  description: "Experience the high-shine revolution with GLOW JOB. Açaí Kiss Lip Oils and Hydra Plump Butter Balms for the ultimate lip glow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
