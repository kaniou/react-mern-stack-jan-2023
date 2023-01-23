import { Button } from "@mui/material";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

type Props = {};

export default function App({}: Props) {
  return (
    <div>
      <Routes>
        <Route path="" element={<Navigate to="/page1" />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </div>
  );
}
