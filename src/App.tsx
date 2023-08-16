import "./App.css";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/home/Header";
import Footer from "./pages/home/Footer";
import { Routes, Route } from "react-router-dom";
import { WhyArbisoft } from "./pages/about/WhyArbisoft";
import { Overview } from "./pages/services/Overview";
import Dashboard from "./pages/dashboard/Dashboard";
import DefaultLayout from "./layouts/DefaultLayout";
import BaseLayout from "./layouts/BaseLayout";

function App() {
  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/about"
          element={
            <DefaultLayout>
              <WhyArbisoft />
            </DefaultLayout>
          }
        />
        <Route
          path="/services"
          element={
            <DefaultLayout>
              <Overview />
            </DefaultLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <BaseLayout>
              <Dashboard />
            </BaseLayout>
          }
        />
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
