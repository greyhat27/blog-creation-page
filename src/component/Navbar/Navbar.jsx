import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <h1>BlogBuilder</h1>
          <span>Write a blog</span>
        </div>
        <div className="nav-right">
          <span>Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
