import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div className="d-flex">
            <Link to="/">
              <span type="button" className="btn btn-danger mr-2 text-white">
                <span className="fa fa-home" />
                <span className="ml-1">Home</span>
              </span>
            </Link>
            <Link to="card">
              <button
                type="button"
                className="btn btn-danger position-relative text-white mr-4"
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                  {props.cart.length}
                  <span className="visually-hidden"></span>
                </span>
              </button>
            </Link>
            <Link to="about">
              <span type="button" className="btn btn-danger  text-white">
                <span className="ml-1">About</span>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
