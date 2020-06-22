import React from "react";
import { NavLink } from "react-router-dom";
import s from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.conteiner}>
      <nav>
        <ul>
          <li>
            <NavLink className={s.link} to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink className={s.link} to="/help">Help</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
