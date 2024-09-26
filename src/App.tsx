import React, { lazy } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const WelcomePage = lazy(() => import("./app/pages/welcome-page"));
const GenderPage = lazy(() => import("./app/pages/gender"));
const DateOfBirthPage = lazy(() => import("./app/pages/date-of-birth"));
const AddBodyWeightPage = lazy(() => import("./app/pages/add-body-weight"));
const ProfilePage = lazy(() => import("./app/pages/profile"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/gender" element={<GenderPage />} />
      <Route path="/date-of-birth" element={<DateOfBirthPage />} />
      <Route path="/add-body-weight" element={<AddBodyWeightPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
