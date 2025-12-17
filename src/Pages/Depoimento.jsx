import { useState } from "react";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@phosphor-icons/react";
import thaisClienteImg from "../assets/thaisClienteImg.png";
import tacioClienteImg from "../assets/tacioClienteImg.png";
import TestimonialCard from "../Components/TestimonialCard";

const testimonials = [
  {
    name: "Thais Oliveira",
    role: "Nutricionista",
    image: thaisClienteImg,
    text: `Eu amei o site! O trabalho do Ryan superou minhas expectativas. 
           Ele é extremamente atencioso, explica tudo com paciência e entrega exatamente o que promete. 
           O resultado ficou ótimo e deu um destaque enorme ao meu negócio. 
           Recomendo de verdade, é um excelente profissional.`,
    stars: 5,
  },

  {
    name: "Tacio Arruda",
    role: "",
    image: tacioClienteImg,
    text: `Ficou simplesmente perfeito! O site ficou exatamente como eu imaginava. Trabalho incrível e muita atenção em cada detalhe. Muito obrigado, Ryan!`,
    stars: 5,
  },
];

const DepoimentosPage = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <div
      id="depoimentos"
      className="max-sm:p-3 p-5 bg-softSilver scroll-mt-[50px]"
    >
      <div className="max-sm:flex-col sm:flex-col md:flex-col lg:flex-row flex items-center justify-center max-sm:p-0 p-5 mt-10 lg:gap-10">
        <div className="max-sm:w-full sm:w-full md:w-full lg:w-[50%] flex max-sm:items-center sm:items-center md:items-center lg:items-start justify-center flex-col max-sm:pl-0 sm:pl-0 md:pl-0 lg:pl-4 mb-20">
          <h1 className="max-sm:text-center sm:text-center md:text-center lg:text-start text-stoneGraphite max-sm:text-[40px] text-6xl max-sm:leading-10 sm:leading-13 md:leading-13 lg:leading-16 font-semibold max-sm:mt-0 mt-7 max-sm:ml-0 sm:ml-0 md:ml-0 lg:ml-7">
            Depoimentos <br /> de clientes
          </h1>

          <p className="max-sm:w-[80%] sm:w-[80%] md:w-[60%] max-sm:text-[13px] text-black max-sm:text-center sm:text-center md:text-center lg:text-start ml-7 mt-5">
            Confira o que alguns clientes dizem, <br className="lg:hidden" />{" "}
            sobre o meu trabalho.
          </p>
        </div>

        {/* Carrossel */}
        <div className="max-sm:w-full sm:w-[80%] md:w-[80%] lg:w-[50%] flex items-center justify-center relative">
          <div className="max-sm:w-full sm:w-full md:w-[80%] lg:w-full xl:w-[80%] flex items-center justify-center relative">
            <button
              onClick={prev}
              disabled={index === 0}
              className={`absolute max-sm:left-1 sm:left-1 md:left-2 lg:left-5 xl:left-2 transition
            ${
              index === 0
                ? "text-neutralGray cursor-not-allowed"
                : "text-stoneGraphite hover:text-cloudGray cursor-pointer"
            }`}
            >
              <ArrowCircleLeftIcon size={50} weight="fill" />
            </button>

            <TestimonialCard data={t} />

            <button
              onClick={next}
              disabled={index === testimonials.length - 1}
              className={`absolute max-sm:right-1 sm:right-1 md:right-2 lg:right-5 transition
            ${
              index === testimonials.length - 1
                ? "text-neutralGray cursor-not-allowed"
                : "text-stoneGraphite hover:text-cloudGray cursor-pointer"
            }`}
            >
              <ArrowCircleRightIcon size={50} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepoimentosPage;
