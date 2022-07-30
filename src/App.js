import React from "react";
import HomePage from "./pages/homePage";
import { FaHeart } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <HomePage />
      <footer>
        Crafted with <FaHeart /> by{" "}
        <a
          href="https://www.linkedin.com/in/venkateshkamath08/"
          target="_blank"
        >
          <span>VK</span>
        </a>
      </footer>
      <h5 style={{ textAlign: "center" }}>
        All the logos used and the entire design copyright goes to CRED. This
        website is only for learning/education purpose.
      </h5>
    </div>
  );
};

export default App;
