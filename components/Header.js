import "../app/globals.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Pirates Logo" height={50} width={50} />
      </div>
      <nav className="nav">
        <Link href="/roster">Roster</Link>
        <Link href="/coaches">Coaches</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}
