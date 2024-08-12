import '../styles/footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer container-footer">
        <div className="footer-logo">
          <img src="/img/logo.png" alt="BalkanSportsScholars logo" />
          <h1>BalkanSportsScholars</h1>
        </div>

        <div className="footer-heading">
          <h2>Browse</h2>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="#">Services</a>
          <a href="#">Athletes</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-heading">
          <h2>Services</h2>
          <a href="#">Application Assistance</a>
          <a href="#">Visa Guidance</a>
          <a href="#">Cultural Orientation</a>
        </div>

        <div className="footer-heading">
          <h2>Contact</h2>
          <a href="mailto:balkansportscholars@gmail.com">Email</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>
      </div>
      <section className="copyright">
        <div className="copyright-container">
          <a href="#">&copy; Copyright 2024</a>
          <a href="#">Privacy Policy</a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
