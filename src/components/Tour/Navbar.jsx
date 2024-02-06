export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const menuClass = isMenuOpen ? "change" : "";

  return (
    <>
      <div className="open-navbar-icon navbar-icon center" onClick={setIsMenuOpen}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="close-navbar-icon navbar-icon center" onClick={setIsMenuOpen}>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
          </div>

          <div className="nav-list">
            <a href="#" className="nav-link center">
              Home
            </a>
            <a href="#" className="nav-link center">
              Tours
            </a>
            <a href="#" className="nav-link center">
              Offers
            </a>
            <a href="#" className="nav-link center">
              About
            </a>
            <a href="#" className="nav-link center">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
