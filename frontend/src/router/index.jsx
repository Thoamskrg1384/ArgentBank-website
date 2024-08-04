import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Home from "../pages/home";
import Login from "../pages/login";
import User from "../pages/user";
import NotFound from "../pages/notFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.dashboard} element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
