export default function Footer() {

  const curentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-container">
        <div className="copyright">© {curentYear} Maniixer - Made with <i className="fa-brands fa-react fa-spin" style={{color: "#00caff"}}></i> React.js</div>
        <div className="nav-links flex">
          <a href="https://github.com/Maniixer" target="_blank">
            <i className="fa-brands fa-github fa-lg"></i>
          </a>
          <a href="https://x.com/Maniixer" target="_blank">
            <i className="fa-brands fa-x-twitter fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
