import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RifaProvider } from "./context/RifaContext";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <Router basename="/AdminRifa/">
      <RifaProvider>
        <Routes>
          <Route path="/" element={<Admin />} />
        </Routes>
      </RifaProvider>
    </Router>
  );
};

export default App;
