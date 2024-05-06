import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Credit Card Verification",
  description: "A simple credit card verification. It brings BIN number data associated to a credit card number",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>

      <body>
        <Navbar />
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/images/background_home.jpg')" }}></div>
        <div className="absolute inset-0  backdrop-blur-sm bg-black  opacity-80 z-10"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
