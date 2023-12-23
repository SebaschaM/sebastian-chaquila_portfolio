import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/index.jsx";
import { Navigate } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
