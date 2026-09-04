import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <p className="label footer-heading">Daras Flow</p>
            <p>Workflow improvement for small businesses, teams and independent professionals.</p>
            <p>Panos Daratsianos · Zaandam, Netherlands</p>
          </div>
          <div className="footer-col">
            <p className="label footer-heading">Contact</p>
            <p>
              <a href="mailto:panos@darasflow.com">panos@darasflow.com</a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/panos-daratsianos-48279955/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </p>
          </div>
          <div className="footer-col">
            <p className="label footer-heading">Business registry</p>
            <address>
              <p>KVK 89150341</p>
              <p>BTW NL004694906B89</p>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Daras Flow. All rights reserved.</p>
          <p>
            <Link href="/privacy">Privacy policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
