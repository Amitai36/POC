import React from "react";
import { Route, Routes } from "react-router-dom";
import MainWin from "./components/MainWin";

function App() {
  return (
    <Routes>
      <Route element={<MainWin />} path="/main" />
    </Routes>
  );
}

export default App;
