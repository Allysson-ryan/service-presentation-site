import { useRef } from "react";

const ProjectPreview = ({ img }) => {
  const imgRef = useRef(null);

  const handleMouseEnter = () => {
    const img = imgRef.current;
    if (!img) return;

    const containerHeight = img.parentElement.offsetHeight;
    const imgHeight = img.scrollHeight;

    const distance = imgHeight - containerHeight;
    const duration = imgHeight * 3;

    img.style.transition = `transform ${duration}ms linear`;
    img.style.transform = `translateY(-${distance}px)`;
  };

  const handleMouseLeave = () => {
    const img = imgRef.current;
    if (!img) return;

    img.style.transition = "transform 1200ms ease-out";
    img.style.transform = "translateY(0px)";
  };

  return (
    <div
      className="w-70 h-90 rounded-2xl overflow-hidden bg-black relative cursor-pointer border border-cloudGray"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imgRef}
        src={img}
        alt="preview"
        className="absolute top-0 left-0 w-full object-cover"
      />
    </div>
  );
};

export default ProjectPreview;
