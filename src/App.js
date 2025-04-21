import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Homepage.js";
import { HeaderComponent } from "./components/HeaderComponent.js";
import { FooterComponent } from "./components/FooterComponent.js";
import { NewSurveyPage } from "./pages/NewSurveyPage.js";
import { ProtectRouterComponent } from "./components/ProtectRouterComponent.js";
import { Success } from "./pages/SuccessPage.js";
import { Cancel } from "./pages/CancelPage.js";
import { DashboardPage } from "./pages/DashboardPage.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <div className="pt-28 md:pt-28 lg:pt-28 min-h-screen">
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<ProtectRouterComponent />}>
              <Route element={<DashboardPage />} path="/surveys" />
              <Route element={<NewSurveyPage />} path="/surveys/new" />
              <Route element={<Success />} path="/success" />
              <Route element={<Cancel />} path="/cancel" />
            </Route>
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;

//here Routes is must to use as Routes uses the nested search algo to find the exact route instead of reaching the each and every route one after the other
// we cannot handled the nested route without the routes
