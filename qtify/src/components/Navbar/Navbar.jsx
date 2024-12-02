import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button text={"Give Feedback"} />
    </nav>
  );
}

export default Navbar;
