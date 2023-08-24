import React, { useEffect, useState } from "react";
import styles from "./Game.module.css";
import { useParams } from "react-router-dom";

const Game = () => {
  const params = useParams();
  const id = Number(params.id);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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
  }, [id]);

  return (
    <div className={styles.container}>
      {data ? (
        <>
          <h1 className={styles.title}>{data.title}</h1>
          <img
            src={data.thumbnail}
            alt="thumbnail"
            className={styles.thumbnail}
          />
          <p className={styles.description}>{data.short_description}</p>
          <p>Screenshots</p>
          {data.screenshots.length > 0 && (
            <img
              src={data.screenshots[0].image}
              alt="thumbnail"
              className={styles.screenshots}
            />
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Game;
