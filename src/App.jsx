import { BrowserRouter, Routes, Route } from "react-router";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./Pages/Overview";
import IntelligentSearch from "./Pages/IntelligentSearch";
import Profile from "./Pages/Profile";
const App = () => {
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
