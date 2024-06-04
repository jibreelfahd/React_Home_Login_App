import React, { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <Header onLogin={isLoggedIn} onLogout={logoutHandler}/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler}/>}
        {isLoggedIn && <Home />}
      </main>
    </>
  );
};

export default App;
