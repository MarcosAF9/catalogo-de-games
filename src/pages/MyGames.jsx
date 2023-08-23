import React, { useContext, useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import styles from "./Explore.module.css";
import Filters from "../components/Filters";
import CategoryContext from "../context/CategoryContext";

const MyGames = () => {
  const { category, likedList } = useContext(CategoryContext);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    const filterGames = () => {
      if (category === "all") {
        setFilteredGames(likedList);
      } else {
        const filteredData = likedList.filter(
          (item) => item.genre === category
        );
        setFilteredGames(filteredData);
      }
    };
    filterGames();
  }, [category]);

  return (
    <div className={styles.container}>
      <h1>MyGames</h1>
      <Filters />
      <div className={styles.grid}>
        {filteredGames.length > 0 &&
          filteredGames.map((game, index) => (
            <GameCard key={index} data={game} />
          ))}
      </div>
    </div>
  );
};

export default MyGames;
