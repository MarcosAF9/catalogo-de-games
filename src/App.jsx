import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import MyGames from "./pages/MyGames";
import Home from "./pages/Home";
import Active from "./pages/Active";
import CategoryProvider from "./context/CategoryProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CategoryProvider>
      <div className={styles.main}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mygames" element={<MyGames />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/active" element={<Active />} />
        </Routes>
      </div>
    </CategoryProvider>
  );
}

export default App;
