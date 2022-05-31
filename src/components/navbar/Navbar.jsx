import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarComponent">
        <span className="logo">AviLogo</span>
        <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
