import BannerPage from "../Pages/BannerPage";
import DepoimentosPage from "../Pages/Depoimento";
import Home from "../Pages/Home";
import ProjetosPage from "../Pages/Projetos";
import ServicoPage from "../Pages/Servirco";

const LayoutPage = () => {
  return (
    <div className="w-full">
      <Home />
      <ServicoPage />
      <ProjetosPage />
      <DepoimentosPage />
      <BannerPage />
    </div>
  );
};

export default LayoutPage;
