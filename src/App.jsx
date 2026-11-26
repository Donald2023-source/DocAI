import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./Pages/Overview";
import IntelligentSearch from "./Pages/IntelligentSearch";
import Profile from "./Pages/Profile";
import AdmissionLetter from "./Pages/AdmissionLetter";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
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

        <Route
          path="/profile"
          element={
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          }
        />

        <Route
          path="/admission-letter"
          element={<AdmissionLetter />}
        />
      </Routes>
    </BrowserRouter>
  );
}