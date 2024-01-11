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
            <button className="nav-button">Let's Chat!</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
