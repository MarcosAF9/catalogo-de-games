import { React, useState } from "react";
import { BiCrown, BiJoystick } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineInbox, AiOutlineThunderbolt } from "react-icons/ai";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [page, setPage] = useState("home");

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link
          to={"/"}
          onClick={() => setPage("home")}
          className={`${styles.link} ${page === "home" && styles.active}`}
        >
          <span>
            <BiCrown className={styles.headerIcons} />
            Home
          </span>
        </Link>
        <Link
          to={"/"}
          onClick={() => setPage("my-games")}
          className={`${styles.link} ${page === "my-games" && styles.active}`}
        >
          <span>
            <BiJoystick className={styles.headerIcons} />
            My Games
          </span>
        </Link>
        <Link
          to={"/"}
          onClick={() => setPage("explore")}
          className={`${styles.link} ${page === "explore" && styles.active}`}
        >
          <span>
            <AiOutlineInbox className={styles.headerIcons} />
            Explore
          </span>
        </Link>
        <Link
          to={"/"}
          onClick={() => setPage("active")}
          className={`${styles.link} ${page === "active" && styles.active}`}
        >
          <span>
            <AiOutlineThunderbolt className={styles.headerIcons} />
            Active
          </span>
        </Link>
      </nav>
      <BsPerson className={styles.headerIcons} />
    </header>
  );
};

export default Header;
