import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Login />
      </main>
    </>
  );
};

export default App;
