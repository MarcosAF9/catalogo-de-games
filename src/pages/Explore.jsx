import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import styles from "./Explore.module.css";

const Explore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter";
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
  }, []);

  return (
    <div className={styles.container}>
      <h1>Explore</h1>
      <div className={styles.grid}>
        {data.length > 0 &&
          data.map((game, index) => <GameCard key={index} data={game} />)}
      </div>
    </div>
  );
};

export default Explore;
