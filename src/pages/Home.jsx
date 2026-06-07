import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <header className="header">
        <h2>🌿 GreenCare Lawn Services</h2>
      </header>

      <section className="hero">
        <img
          src="/lawn-care.jpg"
          alt="Professional Lawn Care"
          className="hero-image"
        />

        <h1>Professional Lawn Care for Ottawa Homes</h1>

        <p className="hero-text">
          Reliable lawn aeration, overseeding, fertilizing, and maintenance
          services to keep your lawn healthy all season long.
        </p>

        <Link to="/book">
          <button className="primary-btn">Book Service</button>
        </Link>
      </section>

      <section className="services">
        <h2>Lawn Care Services</h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>Lawn Aeration</h3>
            <p>Improve soil airflow and root growth.</p>
          </div>

          <div className="service-card">
            <h3>Overseeding</h3>
            <p>Fill thin areas and promote thicker grass.</p>
          </div>

          <div className="service-card">
            <h3>Fertilizing</h3>
            <p>Provide nutrients for a greener lawn.</p>
          </div>

          <div className="service-card">
            <h3>Maintenance</h3>
            <p>Regular lawn care and seasonal upkeep.</p>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <h2>Why Choose GreenCare?</h2>

        <div className="trust-grid">
          <div className="trust-card">
            <h3>100+</h3>
            <p>Lawns Serviced</p>
          </div>

          <div className="trust-card">
            <h3>★★★★★</h3>
            <p>Trusted by Ottawa Homeowners</p>
          </div>

          <div className="trust-card">
            <h3>Fast Booking</h3>
            <p>Quick online scheduling</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Improve Your Lawn?</h2>

        <Link to="/book">
          <button className="primary-btn">Request a Quote</button>
        </Link>
      </section>

    <section className="admin-demo">
    <h3>Admin Demo</h3>

    <Link to="/admin">
    <button className="secondary-btn">
      Open Admin Dashboard
    </button>
    </Link>
    </section>

    <footer className="footer">
    <h3>GreenCare Lawn Services</h3>

    <p>📍 Ottawa, Ontario</p>
    <p>📞 (613) 555-1234</p>
    <p>✉ info@greencarelawn.ca</p>

    <p>
    <strong>Hours:</strong><br />
    Mon–Fri: 8:00 AM – 6:00 PM
    </p>


  <p>© 2026 GreenCare Lawn Services</p>
</footer>

</div>

  );
}

export default Home;