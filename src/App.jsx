import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
// import Dashboard from "./pages/Dashboard";
// import PropertySearch from "./pages/PropertySearch";
// import AnalysisReport from "./pages/AnalysisReport";
// import AIChat from "./pages/AIChat";
// import SavedPortfolio from "./pages/SavedPortfolio";

export default function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/search" element={<PropertySearch />} />
      <Route path="/analysis/:id" element={<AnalysisReport />} />
      <Route path="/chat" element={<AIChat />} />
      <Route path="/portfolio" element={<SavedPortfolio />} /> */}
        </Routes>
      </BrowserRouter>
      <h1 className="text-3xl font-bold underline text-red-700">
        Hello world!
      </h1>
    </>
  );
}
