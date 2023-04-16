import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss"

const Nav = () => {

  const activeStyle = ({ isActive }) => 
    isActive ? `${styles.Active} ${styles.Nav_Link}` : `${styles.Nav_Link}`;

  return (
    <nav className={styles.Nav}>
      <NavLink to="/" className={activeStyle} >
        Home
      </NavLink>
    </nav>
  );
};
export default Nav;
