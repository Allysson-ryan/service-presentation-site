import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import LayoutPage from "../Layout/Index";
import Footer from "../Components/Footer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LayoutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
