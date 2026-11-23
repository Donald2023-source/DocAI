import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./Pages/Overview";
import IntelligentSearch from "./Pages/IntelligentSearch";
import Login from "./Pages/Login";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Overview />
            </DashboardLayout>
          }
        />
        <Route
  path="/intelligent-search"
  element={
    <DashboardLayout>
      <IntelligentSearch />
    </DashboardLayout>
  }
/>
  <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
