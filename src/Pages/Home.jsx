import {
  ArrowUpRightIcon,
  CodeIcon,
  GlobeIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import bgHome from "../assets/bgHome.png";

const Home = () => {
  return (
    <div className="p-5 bg-softSilver">
      <div
        className="min-h-[95vh] w-full bg-cover bg-center flex items-center justify-center flex-col p-9 relative rounded-[10px] scroll-mt-[100px]"
        style={{ backgroundImage: `url(${bgHome})` }}
        id="inicio"
      >
        <div className="w-full flex items-center justify-center flex-col">
          <h1 className="w-[90%] max-sm:text-[27px] max-sm:leading-6 sm:text-[27px] md:text-[35px] lg:text-[50px] sm:leading-6 md:leading-8 lg:leading-12 text-white text-center font-semibold mt-7">
            Construindo Produtos Digitais <br /> que Conectam Pessoas e Marcas
          </h1>

          <p className="max-sm:w-[80%] sm:w-[70%] md:w-[70%] lg:w-[65%] leading-5 max-sm:text-[15px] sm:text-[15px] md:text-[15px] lg:text-[20px] text-cloudGray text-center font-medium max-sm:mt-3 sm:mt-3 mt-6">
            Sites modernos, sistemas personalizados <br /> e experiências que
            encantam seus clientes.
          </p>

          <a
            href="https://www.instagram.com/ryan.nasciment0/"
            className="bg-stoneGraphite text-white flex items-center justify-center gap-3 max-sm:mt-14 mt-18 px-4 py-2 rounded-[10px] cursor-pointer hover:bg-neutralGray"
          >
            <h1 className="max-sm:text-[15px] sm:text-[15px] lg:text-[18px]">
              Solicitar orçamento
            </h1>
            <ArrowUpRightIcon size={25} className="max-sm:w-5 max-sm:h-5" />
          </a>
        </div>

        {/* Marca DevRyan - bottom left */}
        <div className="absolute bottom-0 left-0 flex items-center gap-2 bg-softSilver px-5 py-2 rounded-tr-[17px]">
          <CodeIcon size={20} className="text-black" />
          <span className=" text-black font-medium text-[16px]">DevRyan</span>
        </div>

        <div className="absolute bottom-0 right-0 flex items-center gap-2 px-6 py-4 ">
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://potfolio-ryan.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-mildSilver p-2 rounded-full"
            >
              <GlobeIcon size={25} className="max-sm:w-5 max-sm:h-5" />
            </a>
            <a
              href="https://www.instagram.com/ryan.nasciment0/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-mildSilver p-2 rounded-full"
            >
              <InstagramLogoIcon size={25} className="max-sm:w-5 max-sm:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/allysson-ryan/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-mildSilver p-2 rounded-full"
            >
              <LinkedinLogoIcon size={25} className="max-sm:w-5 max-sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
