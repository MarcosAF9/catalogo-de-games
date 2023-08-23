import React, { useContext, useState } from "react";
import { CiGrid41, CiGrid2H } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";
import styles from "./Filters.module.css";
import CategoryContext from "../context/CategoryContext";

const Filters = () => {
  const { category, setCategory } = useContext(CategoryContext);

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <form className={styles.form}>
          <BiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </form>
        <button
          onClick={() => setCategory("all")}
          className={`${styles.categoriesFilter} ${
            category === "all" && styles.active
          }`}
        >
          All
        </button>
        <button
          onClick={() => setCategory("Shooter")}
          className={`${styles.categoriesFilter} ${
            category === "Shooter" && styles.active
          }`}
        >
          Shooter
        </button>
        <button
          onClick={() => setCategory("Fighting")}
          className={`${styles.categoriesFilter} ${
            category === "Fighting" && styles.active
          }`}
        >
          Fighting
        </button>
        <button
          onClick={() => setCategory("MOBA")}
          className={`${styles.categoriesFilter} ${
            category === "MOBA" && styles.active
          }`}
        >
          Moba
        </button>
      </div>
      <div className={styles.gridFilter}>
        <CiGrid41 />
        <CiGrid2H />
      </div>
    </div>
  );
};

export default Filters;
