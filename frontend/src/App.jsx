import {Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/home/HomePage";
import './App.css';
import PhotoUploadTab from "./pages/analysis/analysis";
import JoinUsTab from "./pages/join/joinUs";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analysis" element={<PhotoUploadTab />} />
        <Route path="/join" element={<JoinUsTab />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
