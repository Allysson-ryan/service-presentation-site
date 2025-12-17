import { ArrowUpRightIcon } from "@phosphor-icons/react";
import barberXImg from "../assets/barberX-img.png";
import nutriThaisWebsite from "../assets/nutriThaisWebsite.png";
import studioFinanceTacioWebsite from "../assets/studioFinanceTacioWebsite.png";
import meuPortfolioimg from "../assets/meuPortfolioimg.png";
import petvidaWebsite from "../assets/petvidaWebsite.png";
import ProjectPreview from "../Components/ProjectPreview";

const ProjetosPage = () => {
  return (
    <div id="projetos" className="p-5">
      <div className="w-full flex items-center justify-center flex-col mt-30 mb-20">
        <div className="w-full flex items-center justify-center flex-col text-center">
          <h1 className="max-sm:w-full sm:w-full md:w-full lg:w-[60%] max-sm:text-[40px] max-sm:text-center max-sm:leading-10 text-5xl font-semibold text-stoneGraphite">
            Alguns projetos feitos
          </h1>
          <p className="max-sm:text-[13px] sm:text-[13px] md:text-[13px] lg:text-[15px] max-sm:w-[80%] sm:w-[80%] md:w-[80%] lg:w-[35%] mt-4 leading-5">
            Destaco alguns projetos marcantes feitos por mim que proporcionaram
            grandes resultados.
          </p>
        </div>

        <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-sm:grid-rows-1 sm:grid-rows-3 md:grid-rows-3 lg:grid-rows-2 mt-15 max-sm:gap-4 sm:gap-6 md:gap-10 lg:gap-5">
          <div className="flex flex-col items-center justify-start">
            <ProjectPreview img={nutriThaisWebsite} />
            <h1 className="w-70 text-center mt-2 text-neutralGray">
              Portfólio da nutricionista Thaiz
            </h1>
          </div>

          <div className="flex flex-col items-center justify-start">
            <ProjectPreview img={studioFinanceTacioWebsite} />
            <h1 className="w-70 text-center mt-2 text-neutralGray">
              Sistema de gestão de finanças para o cliente Tacio
            </h1>
          </div>

          <div className="flex flex-col items-center justify-start">
            <ProjectPreview img={meuPortfolioimg} />
            <h1 className="w-70 text-center mt-2 text-neutralGray">
              Meu portfólio
            </h1>
          </div>

          <div className="flex flex-col items-center justify-start">
            <ProjectPreview img={barberXImg} />
            <h1 className="w-70 text-center mt-2 text-neutralGray">
              Sistema de agendamento de barbearia com página de administrador
            </h1>
          </div>

          <div className="flex flex-col items-center justify-start">
            <ProjectPreview img={petvidaWebsite} />
            <h1 className="w-70 text-center mt-2 text-neutralGray">
              Sistema de e-comerce de petshop
            </h1>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-20 ml-5">
          <a
            href="https://potfolio-ryan.netlify.app/projetos"
            className="bg-stoneGraphite hover:bg-neutralGray p-4 flex items-center justify-center gap-2 rounded-4xl"
          >
            <h1 className="max-sm:text-[13px] text-[16px] text-white font-medium">
              ver mais projetos no meu portfólio
            </h1>
            <ArrowUpRightIcon
              size={22}
              className="text-white max-sm:w-5 max-sm:h-5"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjetosPage;
