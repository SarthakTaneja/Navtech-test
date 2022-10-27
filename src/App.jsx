import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Login from "./components/Login/Login";

const App = () => {
  const [loggedIn, setloggedIn] = useState(false);

  function callback(childData) {
    setloggedIn(childData);
  }

  return (
    <Router>
      <Routes>
        <Route path="/Orders"  element={!loggedIn ? <Navigate to="/" /> : <Orders />} />
        <Route path="/" element={loggedIn ? <Navigate to="/Orders" /> : <Login callback = {callback}  />} />
      </Routes>
    </Router>
  );
};

export default App;
