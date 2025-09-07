import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Start Bootstrap
        </a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li>
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
