import { FaHome, FaUser, FaBriefcase } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import styles from "../css/navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink to="/porfolio_yellow/home" className={({isActive}) => isActive ? [styles.navlink, styles.navlinkActive].join(' ').trim() : styles.navlink}>
            <FaHome className={styles.navbar__icono} />
            <h2>Home</h2>
          </NavLink>
        </li>
        <li>
        <NavLink to="/porfolio_yellow/about" className={({isActive}) => isActive ? [styles.navlink, styles.navlinkActive].join(' ').trim() : styles.navlink}>
            <FaUser className={styles.navbar__icono} />
            <h2>About</h2>
          </NavLink>
        </li>
        <li>
        <NavLink to="/porfolio_yellow/portfolio" className={({isActive}) => isActive ? [styles.navlink, styles.navlinkActive].join(' ').trim() : styles.navlink}>
            <FaBriefcase className={styles.navbar__icono} />
            <h2>Portfolio</h2>
          </NavLink>
        </li>
        <li>
        <NavLink to="/porfolio_yellow/contact" className={({isActive}) => isActive ? [styles.navlink, styles.navlinkActive].join(' ').trim() : styles.navlink}>
            <HiMailOpen className={styles.navbar__icono} />
            <h2>Contact</h2>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
