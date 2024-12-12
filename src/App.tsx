import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import GroupManagement from "./pages/Groupmgmt/GroupMgnt";
import logo from "../src/assets/icons/logo.png";
import { FaCircleUser } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import closeIcon from "./assets/icons/close-icon.png";
import hamburgerIcon from "./assets/icons/hamburger-icon.png";
import { createTheme, ThemeProvider } from "@mui/material";
import UserForm from "./pages/userManagement/UserForm";

const theme = createTheme({
  typography: {
    fontFamily: `"Noto Sans Thai"`,
  },
});
const App: React.FC = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <header className="header">
          <div className="menu-icon">
            {showNav ? (
              <img
                src={closeIcon}
                alt="close-icon"
                className="icon"
                onClick={() => setShowNav(false)}
              />
            ) : (
              <img
                src={hamburgerIcon}
                alt="hamburger-icon"
                className="icon"
                onClick={() => setShowNav(true)}
              />
            )}
          </div>

          <div className="header-container ml-5">
            <div className="flex items-center">
              <img src={logo} className="header-logo" alt="logo" />
              <div className="flex flex-col ml-5">
                <div className="header-title">NSB License Plate</div>
                <div className="header-subtitle">
                  Narcotics Suppression Bureau
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <p className="user-text">Admin</p>
              <FaCircleUser className="logo-user"></FaCircleUser>
              <CiLogin className="logo-logout"></CiLogin>
            </div>
          </div>
        </header>

        <Navbar show={showNav} />

        <div className={`main ${showNav ? "shifted" : ""}`}>
          <Routes>
            <Route path="/" element={<Navigate to="/group-management" />} />
            <Route path="/group-management" element={<GroupManagement />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
