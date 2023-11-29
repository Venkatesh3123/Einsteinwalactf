import React, { useState } from "react";
import "../src/navrbar.css";
import albert from "../src/ctf.jpg";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const data = () => {
    navigate("/data");
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <img
            src="https://images.icompaas.com/i/ic-logo.png"
            height="30px"
          ></img>
          <span>iCompaas CTF</span>
        </div>
        <button className="nav-toggle button" onClick={data}>
          Submit the Flag
        </button>
      </nav>
      <div className="imgDiv">
        <img src={albert} className="img"></img>
      </div>
      <footer className="footer">
        <p className="p"> Powered by iCompaas LLC</p>
        <p>Sample text</p>
      </footer>
    </>
  );
};
export default Navbar;
