import React, { useState } from "react";
import CategoryContext from "./CategoryContext";

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("moba");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
