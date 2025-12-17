import {
  ArrowUpRightIcon,
  CircuitryIcon,
  DesktopIcon,
} from "@phosphor-icons/react";

const ServicoPage = () => {
  return (
    <div
      id="servicos"
      className="bg-softSilver max-sm:p-5 sm:p-5 md:p-5 lg:p-10 min-h-screen flex items-center"
    >
      <div className="max-sm:flex-col sm:flex-col md:flex-col lg:flex-row flex items-center justify-center mt-20">
        <div className="max-sm:w-full sm:w-full md:w-full lg:w-[55%] xl:w-[50%] max-sm:p-5 p-10 flex items-start justify-center flex-col">
          <div className="max-sm:w-full sm:w-full md:w-full lg:w-[80%] flex items-center justify-center gap-3">
            <div className="w-14 h-12  bg-stoneGraphite p-1 rounded-full flex items-center justify-center text-[20px] text-white font-semibold">
              1
            </div>
            <div className="w-full bg-stoneGraphite h-0.5 rounded-full">.</div>
          </div>

          <div className="flex max-sm:items-center sm:items-center md:items-center lg:items-start  justify-center flex-col max-sm:pl-0 pl-4 mt-10">
            <h1 className="max-sm:w-full sm:w-full text-stoneGraphite max-sm:text-[40px] sm:text-[50px] md:text-[50px] lg:text-6xl max-sm:text-center sm:text-center md:text-center lg:text-start max-sm:leading-10 sm:leading-12 md:leading-16 font-semibold">
              O QUE <br className="hidden lg:block" /> EU FAÇO?
            </h1>
            <p className="max-sm:w-full sm:w-[90%] md:w-[90%] lg:w-[70%] text-black max-sm:mt-7 sm:mt-7 md:mt-7 lg:mt-13 max-sm:text-center sm:text-center md:text-center lg:text-start">
              Desenvolvo sites profissionais e sistemas sob medida, focados em
              aumentar sua presença online e facilitar o dia a dia do seu
              negócio.
            </p>
          </div>

          <div className="max-sm:hidden sm:hidden w-full md:hidden lg:flex items-center max-sm:justify-center justify-start max-sm:mt-15 mt-20 max-sm:ml-0 ml-5 max-sm:mb-15">
            <a
              href="https://www.instagram.com/ryan.nasciment0/"
              className="bg-stoneGraphite hover:bg-neutralGray p-4 flex items-center justify-center gap-2 rounded-4xl"
            >
              <h1 className="max-sm:text-[14px] text-[16px] text-white font-medium">
                Solicitar orçamento
              </h1>
              <ArrowUpRightIcon
                size={22}
                className="text-white max-sm:w-5 max-sm:h-5"
              />
            </a>
          </div>
        </div>

        <div className="max-sm:w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[50%] border border-stoneGraphite rounded-2xl flex items-center justify-center flex-col max-sm:mb-20 sm:mb-20 md:mb-20 lg:mb-0 max-sm:mt-10 sm:mt-10 md:mt-10 lg:mt-0">
          <div className="w-full flex flex-col gap-3 p-5">
            <div className="w-full flex items-center justify-start gap-2 mt-2">
              <DesktopIcon
                size={32}
                weight="fill"
                className="text-stoneGraphite max-sm:w-[25px] max-sm:h-[25px]"
              />
              <h1 className="max-sm:leading-4 max-sm:text-[17px] text-[20px] font-semibold text-stoneGraphite">
                Websites profissionais
              </h1>
            </div>

            <ul className="max-sm:text-[15px] list-disc max-sm:pl-2 pl-6 text-slateGray ml-4">
              <li>Site profissional completo</li>
              <li>Landing page para anúncios ou campanhas</li>
              <li>Site institucional</li>
              <li>Portfólio online para profissionais</li>
              <li>Loja virtual (e-commerce)</li>
              <li>Modernização de sites antigos</li>
            </ul>
          </div>

          <div className="w-full flex  flex-col gap-3 p-5">
            <div className="w-full flex items-center justify-start gap-2 mt-2">
              <CircuitryIcon
                size={32}
                weight="fill"
                className="text-stoneGraphite max-sm:w-[25px] max-sm:h-[25px]"
              />
              <h1 className="max-sm:leading-4 max-sm:text-[17px] text-[20px] font-semibold text-stoneGraphite">
                Sistemas web personalizados
              </h1>
            </div>

            <ul className="max-sm:text-[15px] list-disc max-sm:pl-2 pl-6 text-slateGray ml-4">
              <li>Painéis administrativos</li>
              <li>Sistema de agendamento online</li>
              <li>Sistema de organização financeira</li>
              <li>
                Sistema de gestão para clínicas (agendamentos online,
                prontuários online, organização financeira)
              </li>
              <li>
                Sistema para empresas (controle de clientes, serviços, tarefas,
                estoque, funcionários)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicoPage;
