import {Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/auth/home/HomePage";
import './App.css';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
