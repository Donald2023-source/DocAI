import { BrowserRouter, Routes, Route } from "react-router";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./Pages/Overview";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // Enter signup component e.g <Signup />
            <DashboardLayout>
              <Overview />
            </DashboardLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
