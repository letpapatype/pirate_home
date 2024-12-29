import Link from "next/link";
import "../app/globals.css";

const NavigationSquares = () => {
  return (
    <div className="gridContainer">
      <Link href="/roster" className="square dark">
        <div>
          <h2>Roster</h2>
        </div>
      </Link>
      <Link href="/coaches" className="square">
        <div>
          <h2>Coaches</h2>
        </div>
      </Link>
      <Link href="/contact" className="square dark">
        <div>
          <h2>Contact Us</h2>
        </div>
      </Link>
    </div>
  );
};

export default NavigationSquares;
