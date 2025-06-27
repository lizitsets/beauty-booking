import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        © {new Date().getFullYear()} სილამაზის სალონი. ყველა უფლება დაცულია.
      </div>

      <div className="footer-links">
        <a href="/services">სერვისები</a>
        <a href="/booking">დაჯავშნა</a>
        <a href="/contact">კონტაქტი</a>
      </div>

      <div className="footer-icons">
        {/* აქ ჩასვავ სოციალური ხატულებს, მაგალითად FontAwesome ან react-icons */}
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-tiktok"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
