import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { NotFound } from "./components/pages/NotFound";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};