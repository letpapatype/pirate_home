export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://www.instagram.com/osidepiratesfootball/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/instagram-icon.png"
            alt="Instagram"
            className="footer-icon"
          />
        </a>
        <a
          href="https://www.maxpreps.com/ca/oceanside/oceanside-pirates/football/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/maxpreps-icon.png"
            alt="MaxPreps"
            className="footer-icon"
          />
        </a>
        <a href="mailto:contact1@piratesteam.com">
          <img src="/email-icon.png" alt="Email" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}
