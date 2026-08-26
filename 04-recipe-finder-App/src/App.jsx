// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import Header from "./components/Header";
// import CardList from "./components/CardList";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main className="main_container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
