import React, { useState } from "react";
import CategoryContext from "./CategoryContext";

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("all");
  const [isLiked, setIsLiked] = useState(false);
  const [likedList, setLikedList] = useState([]);

  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory,
        isLiked,
        setIsLiked,
        likedList,
        setLikedList,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
