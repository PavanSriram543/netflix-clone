import React, { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
  const [Show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeaddEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${Show && "nav_black"}`}>
      <img
        className="nav-img"
        src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=30"
        alt="logo"
      />{" "}
      <img
        className="avatar"
        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/female-avatar-12-774634.png"
        alt="avarat"
      />
    </div>
  );
}

export default Nav;
