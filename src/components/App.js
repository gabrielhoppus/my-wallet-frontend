import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useState } from "react";
import LoginScreen from "./LoginScreen";
import Signup from "./Signup";
import Home from "./Home";
import NewEntry from "./NewEntry";
import NewExit from "./NewExit";

function App() {

  return (
    <BrowserRouter>
      <UserContext.Provider value={{}}>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastro" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nova-entrada" element={<NewEntry />} />
          <Route path="/nova-saida" element={<NewExit />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
