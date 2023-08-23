import React from "react";
import { BsBookmark } from "react-icons/bs";
import styles from "./GameCard.module.css";

const GameCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <img src={data.thumbnail} alt="thumb" className={styles.thumb} />
      <div className={styles.infos}>
        <p>{data.title}</p>
        <button className={styles.likeBtn}>
          <BsBookmark />
        </button>
      </div>
      <p>{data.genre}</p>
    </div>
  );
};

export default GameCard;
