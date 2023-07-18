import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddMovie from "../pages/AddMovie";
import EditMovie from "../pages/EditMovie";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";

function MainRoute() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/edit/:id" element={<EditMovie />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default MainRoute;
