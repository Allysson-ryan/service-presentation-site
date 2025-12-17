import { StarIcon } from "@phosphor-icons/react";

const TestimonialCard = ({ data }) => {
  const { name, role, image, text, stars } = data;

  return (
    <div className="bg-white  max-sm:w-[85%] sm:w-[87%] md:w-[80%] lg:w-[70%] xl:w-[70%] max-sm:h-auto min-h-125 max-sm:p-5 sm:p-7 md:p-7 lg:p-10 rounded-3xl shadow-lg flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-15 h-15 rounded-full object-cover"
      />

      <h2 className="text-stoneGraphite max-sm:text-lg text-xl font-semibold mt-1 ">
        {name}
      </h2>
      <p className="text-urbanGray text-sm">{role}</p>

      <p className="text shadow-gray mt-6 leading-7 max-sm:text-[14px] text-[15px] w-[90%]">
        {text}
      </p>

      <div className="mt-auto flex justify-center items-end gap-1 pt-8">
        {Array.from({ length: stars }).map((_, i) => (
          <StarIcon
            key={i}
            size={20}
            weight="fill"
            className="text-goldenPulse"
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
