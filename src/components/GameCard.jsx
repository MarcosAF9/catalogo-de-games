import React, { useContext } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import styles from "./GameCard.module.css";
import CategoryContext from "../context/CategoryContext";

const GameCard = ({ data }) => {
  const { isLiked, setIsLiked, likedList, setLikedList } =
    useContext(CategoryContext);

  const handleLike = (data) => {
    const isGameLiked = likedList.some((item) => item.id === data.id);

    if (isGameLiked) {
      const updatedLikedList = likedList.filter((item) => item.id !== data.id);
      setLikedList(updatedLikedList);
    } else {
      const newLikedList = [...likedList, data];
      setLikedList(newLikedList);
    }
  };

  const isGameLiked = likedList.some((item) => item.id === data.id);
  console.log(likedList);

  return (
    <div className={styles.card}>
      <img src={data.thumbnail} alt="thumb" className={styles.thumb} />
      <div className={styles.infos}>
        <p>{data.title}</p>
        <button
          className={`${styles.likeBtn} `}
          onClick={() => handleLike(data)}
        >
          {isGameLiked ? <BsBookmarkFill /> : <BsBookmark />}
        </button>
      </div>
      <p>{data.genre}</p>
    </div>
  );
};

export default GameCard;
