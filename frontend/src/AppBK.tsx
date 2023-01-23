import { Button } from "@mui/material";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ReportPage from "./components/pages/ReportPage";
import ShopPage from "./components/pages/ShopPage";
import StockCreatePage from "./components/pages/StockCreatePage";
import StockEditPage from "./components/pages/StockEditPage";
import StockPage from "./components/pages/StockPage";
import TransactionPage from "./components/pages/TransactionPage";

type Props = {};

export default function App({}: Props) {
  return (
    <div>
      <Routes>
        {/* Protected routes */}

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/stock" element={<StockPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/stock/create" element={<StockCreatePage />} />
        <Route path="/stock/edit/:id" element={<StockEditPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/" element={<Navigate to="/report" />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}
