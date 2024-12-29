import Header from "../components/Header";
import Footer from "../components/Footer";
import NavigationSquares from "../components/NavigationSquares";
import "./globals.css";

export const metadata = {
  title: "Pirates",
  description: "Pirates Team Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <NavigationSquares />
        <Footer />
      </body>
    </html>
  );
}
