import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <div className=" container mx-auto">
      <Routes>
        <Route path="/" default element={<Login />} />
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
