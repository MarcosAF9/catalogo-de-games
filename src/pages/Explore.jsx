import React, { useContext, useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import styles from "./Explore.module.css";
import Filters from "../components/Filters";
import CategoryContext from "../context/CategoryContext";

const Explore = () => {
  const [data, setData] = useState([]);
  const { category } = useContext(CategoryContext);

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://free-to-play-games-database.p.rapidapi.com/api/games`;
      if (category !== "all") {
        url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
      }
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "58af704565mshb3028b8414dc702p112bbbjsn776225583f36",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className={styles.container}>
      <h1>Explore</h1>
      <Filters />
      <div className={styles.grid}>
        {data.length > 0 &&
          data.map((game, index) => <GameCard key={index} data={game} />)}
      </div>
    </div>
  );
};

export default Explore;
