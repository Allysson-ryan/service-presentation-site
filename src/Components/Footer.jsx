import {
  CodeIcon,
  EnvelopeSimpleIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="w-full bg-softSilver pt-18">
      <div className="lg:w-full mx-auto max-sm:flex max-sm:flex-col-reverse max-sm:items-center max-sm:justify-center grid sm:grid-cols-2 md:flex md:items-center md:justify-center max-sm:gap-12 sm:gap-5 md:gap-7 lg:gap-30 sm:m-3 md:m-7 lg:m-0">
        {/* Coluna 1 */}
        <div className="flex flex-col max-sm:p-3 sm:p-4 md:p-0">
          <div className="max-sm:justify-center flex items-center gap-2 mb-3">
            <CodeIcon
              size={28}
              className="max-sm:w-[22px] sm:w-[22px] max-sm:h-[22px] sm:h-[22px]"
            />
            <h2 className="max-sm:text-[18px] sm:text-[18px] md:text-[18px] lg:text-2xl font-semibold">
              DevRyan
            </h2>
          </div>

          <p className="text-stoneGraphite max-sm:text-[14px] sm:text-[15px] md:text-[15px] lg:text-lg max-sm:text-center leading-relaxed max-w-xs">
            Tecnologia, design e estratégia unidos para impulsionar sua marca no
            ambiente digital.
          </p>
        </div>

        {/* Coluna 2 */}
        <div className="flex flex-col max-sm:items-center max-sm:justify-center">
          <h2 className="max-sm:text-[18px] sm:text-[18px] md:text-[18px] lg:text-2xl font-semibold mb-3 max-sm:ml-0 ml-5">
            Fale comigo
          </h2>

          <div className="flex flex-col max-sm:items-center max-sm:justify-center gap-2">
            <a
              href="https://www.instagram.com/ryan.nasciment0/"
              className="max-sm:w-full flex items-center gap-3 hover:text-cloudGray transition-opacity"
            >
              <InstagramLogoIcon
                size={30}
                className="max-sm:w-[27px] sm:w-[25px] lg:w-[30px] max-sm:h-[27px] sm:h-[25px] lg:h-[30px]"
              />
              <span className="max-sm:text-[16px] sm:text-[16px] md:text-[16px] lg:text-lg">
                @ryan.nasciment0
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/allysson-ryan/"
              className="max-sm:w-full flex items-center gap-3 hover:text-cloudGray transition-opacity"
            >
              <LinkedinLogoIcon
                size={30}
                className="max-sm:w-[27px] sm:w-[25px] lg:w-[30px] max-sm:h-[27px] sm:h-[25px] lg:h-[30px]"
              />
              <span className="max-sm:text-[16px] sm:text-[16px] md:text-[16px] lg:text-lg">
                Meu Linkedin
              </span>
            </a>

            <div className="max-sm:w-full flex items-center gap-3 transition-opacity">
              <EnvelopeSimpleIcon
                size={30}
                className="max-sm:w-[27px] sm:w-[25px] lg:w-[30px] max-sm:h-[27px] sm:h-[25px] lg:h-[30px]"
              />
              <span className="max-sm:text-[16px] sm:text-[16px] md:text-[16px] lg:text-lg">
                allyssonr002@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* Coluna 3 */}
        <div className="flex flex-col max-sm:items-center max-sm:justify-center sm:col-span-2 sm:items-center sm:justify-center sm:justify-self-center md:col-span-1 md:items-start md:justify-center sm:p-4 md:p-0 sm:mr-15 md:mr-0">
          <h2 className="max-sm:text-[18px] sm:text-[18px] md:text-[18px] lg:text-2xl font-semibold mb-3">
            Sou Ryan
          </h2>

          <p className="text-stoneGraphite max-sm:text-[14px] sm:text-[15px] md:text-[15px] lg:text-lg max-sm:text-center sm:text-center md:text-start leading-relaxed max-w-xs">
            Dedicado a criar sites de alto padrão e sistemas que elevam sua
            presença digital.
          </p>
        </div>
      </div>

      {/* Linha divisória */}
      <div className="w-full border-t border-carbonGray mt-16 pt-5 pb-5">
        <p className="max-sm:text-[11px] text-center text-stoneGraphite sm:text-[13px] md:text-[15px]">
          © 2026 Allysson Ryan. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
