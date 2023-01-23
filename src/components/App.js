import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useState } from "react";
import LoginScreen from "./LoginScreen";
import Signup from "./Signup";
import Home from "./Home";
import Transaction from "./Transaction";


function App() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("")

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ token, setToken, name, setName, type, setType }}>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastro" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nova-entrada" element={<Transaction />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
