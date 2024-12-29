import "../app/globals.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.png" alt="Pirates Logo" height={50} width={50} />
        <div className="logo-text">
          <div>Official Website of Your</div>
          <div>Oceanside High School Pirate Football Team</div>
        </div>
      </div>
      <nav className="nav">
        <Link href="/roster">Roster</Link>
        <Link href="/coaches">Coaches</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}
