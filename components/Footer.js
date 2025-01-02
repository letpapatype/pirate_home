import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <SocialIcon url="https://instagram.com/osidepiratesfootball" />
        {/* <a
          href="https://www.maxpreps.com/ca/oceanside/oceanside-pirates/football/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/maxpreps-icon.png"
            alt="MaxPreps"
            className="footer-icon"
          />
        </a> */}
        <SocialIcon url="mailto:jovannewland@gmail.com" />
      </div>
    </footer>
  );
}
