import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/home/HomePage";
import './App.css';
import PhotoUploadTab from "./pages/analysis/analysis";
import JoinUsTab from "./pages/join/joinUs";
import { Toaster } from "react-hot-toast"; // ✅ import toast component
import SignIn from "./pages/auth/login/LoginPage";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analysis" element={<PhotoUploadTab />} />
          <Route path="/join" element={<JoinUsTab />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </MainLayout>
      
      {/* ✅ Mount Toaster globally */}
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
    </>
  );
}

export default App;
