import React, { useEffect, useState } from "react";
import logo from "../Netflix-Logo.wine.svg";

const Navbar = () => {
  const [show, setShow] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setShow(true);
        } else setShow(false);
      });
    };
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbar ${show && "nav_black"}`}>
      <img src={logo} alt="" style={{ width: "200px", height: "50px" }} />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  );
};

export default Navbar;
