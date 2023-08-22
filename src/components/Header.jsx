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
        <ul>
          <li>
            <Link
              to={"/"}
              onClick={() => setPage("home")}
              className={`${styles.link} ${page === "home" && styles.active}`}
            >
              <BiCrown className={styles.headerIcons} />
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/mygames"}
              onClick={() => setPage("my-games")}
              className={`${styles.link} ${
                page === "my-games" && styles.active
              }`}
            >
              <BiJoystick className={styles.headerIcons} />
              My Games
            </Link>
          </li>
          <li>
            <Link
              to={"/explore"}
              onClick={() => setPage("explore")}
              className={`${styles.link} ${
                page === "explore" && styles.active
              }`}
            >
              <AiOutlineInbox className={styles.headerIcons} />
              Explore
            </Link>
          </li>
          <li>
            <Link
              to={"/active"}
              onClick={() => setPage("active")}
              className={`${styles.link} ${page === "active" && styles.active}`}
            >
              <AiOutlineThunderbolt className={styles.headerIcons} />
              Active
            </Link>
          </li>
        </ul>
      </nav>
      <BsPerson className={styles.headerIcons} />
    </header>
  );
};

export default Header;
