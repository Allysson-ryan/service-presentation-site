import {
  ArrowUpRightIcon,
  GlobeIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import bgBanner from "../assets/bgBanner.png";

const BannerPage = () => {
  return (
    <div className="p-5 bg-softSilver">
      <div
        className="max-sm:h-auto sm:h-auto md:h-110 w-full bg-cover bg-center flex items-start justify-start flex-col max-sm:p-10 sm:p-15 md:p-20 relative rounded-[10px] mt-25"
        style={{ backgroundImage: `url(${bgBanner})` }}
        id="inicio"
      >
        <h3 className="max-sm:text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px] max-sm:text-center text-mildSilver max-sm:mt-5">
          Pronto para tirar seu projeto do papel?
        </h3>

        <h1 className="max-sm:w-full sm:w-full w-[90%] text-white max-sm:text-[25px] sm:text-[30px] md:text-[30px] lg:text-[40px] font-semibold mt-3 max-sm:leading-6 sm:leading-7 md:leading-8 lg:leading-10 max-sm:mt-5">
          Seu site merece ser moderno, estratégico e feito com cuidado. Vamos
          transformar sua ideia em algo que realmente gere resultado.
        </h1>

        <div className="w-full flex items-center justify-start mt-17 max-sm:mb-3 mb-10">
          <a
            href="https://www.instagram.com/ryan.nasciment0/"
            className="w-70 bg-stoneGraphite hover:bg-neutralGray max-sm:p-3 sm:p-3 md:p-3 lg:p-4 flex items-center justify-center gap-2 rounded-4xl"
          >
            <h1 className="max-sm:text-[15px] sm:text-[15px] md:text-[16px] text-white font-medium">
              Solicitar orçamento
            </h1>
            <ArrowUpRightIcon size={22} className="text-white" />
          </a>
        </div>

        <div className="max-sm:hidden absolute bottom-0 right-0 flex items-center gap-2 px-6 py-4">
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://potfolio-ryan.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Meu Portfólio"
              className="bg-white hover:bg-mildSilver sm:p-1.5 md:p-2 rounded-full"
            >
              <GlobeIcon size={25} />
            </a>
            <a
              href="https://www.instagram.com/ryan.nasciment0/"
              target="_blank"
              rel="noopener noreferrer"
              title="Meu Instagram"
              className="bg-white hover:bg-mildSilver sm:p-1.5 md:p-2 rounded-full"
            >
              <InstagramLogoIcon size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/allysson-ryan/"
              target="_blank"
              rel="noopener noreferrer"
              title="Meu Linkedin"
              className="bg-white hover:bg-mildSilver sm:p-1.5 md:p-2 rounded-full"
            >
              <LinkedinLogoIcon size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
