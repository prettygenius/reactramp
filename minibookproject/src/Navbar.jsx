
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Bookstore</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#books">Books</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
