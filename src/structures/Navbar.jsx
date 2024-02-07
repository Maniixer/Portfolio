export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-items flex">
          <a href="/" className="nav-logo flex">
            <img src="/maniixer-logo.svg" alt="Brand logo" className="brand-logo" />
          </a>
          <div className="nav-socials flex">
            <div className="nav-links flex">
              <a href="https://github.com/Maniixer" target="_blank">
                <i className="fa-brands fa-github fa-lg"></i>
              </a>
              <a href="https://x.com/Maniixer" target="_blank">
                <i className="fa-brands fa-x-twitter fa-lg"></i>
              </a>
            </div>
            <a className="nav-button" href="mailto:maniixer@hotmail.com">Let's chat!</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
