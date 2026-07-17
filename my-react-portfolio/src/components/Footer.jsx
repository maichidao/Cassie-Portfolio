import "../css/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      © {year} Mai Chi - 24520212@gm.uit.edu.vn
    </footer>
  );
}

export default Footer;
