import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthContext from "./components/context/auth-context";

const App = () => {
  const appCtx = useContext(AuthContext);
  return (
    <>
      <Header />
      <main>
        {!appCtx.isLoggedIn && <Login />}
        {appCtx.isLoggedIn && <Home />}
      </main>
    </>
  );
};

export default App;
