import { CodeIcon, ListIcon } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const links = [
    { id: "inicio", label: "Início" },
    { id: "servicos", label: "Serviços" },
    { id: "projetos", label: "Projetos" },
    { id: "depoimentos", label: "Depoimentos" },
  ];

  const scrollToSection = (section) => {
    setActive(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      setScrolled(window.scrollY > vh - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={
          `max-sm:w-[80%] sm:w-[80%] md:w-[75%] lg:w-[55%] fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 flex items-center justify-center ` +
          (scrolled ? "top-6" : "top-6 mt-7")
        }
      >
        <nav
          className={
            `max-sm:hidden sm:hidden md:flex items-center md:gap-3 lg:gap-3 xl:gap-5 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 transition-all duration-500 ` +
            (scrolled
              ? "bg-carbonGray/90 text-mildSilver"
              : "bg-carbonGray/30 text-urbanGray")
          }
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={
                `text-[14px] transition font-medium cursor-pointer ` +
                (active === link.id
                  ? "text-white opacity-100 underline underline-offset-5"
                  : "text-urbanGray") +
                (scrolled ? "text-neutralGray" : "text-mildSilver")
              }
            >
              {link.label}
            </button>
          ))}

          <a
            className="ml-6 bg-white text-black px-5 py-1.5 rounded-full text-sm font-semibold shadow cursor-pointer hover:bg-mildSilver"
            href="https://potfolio-ryan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meu portfólio
          </a>
        </nav>

        <nav
          className={
            `max-sm:w-[80%] sm:w-[80%] md:hidden flex items-center justify-between backdrop-blur-md px-6 py-4 rounded-full border border-white/10 transition-all duration-500 ` +
            (scrolled
              ? "bg-carbonGray/90 text-mildSilver"
              : "bg-carbonGray/30 text-urbanGray")
          }
        >
          <div className="flex items-center justify-center">
            <CodeIcon size={20} className="text-mildSilver" />
            <span className=" text-mildSilver font-medium text-[16px]">
              DevRyan
            </span>
          </div>

          <button
            onClick={() => setDrawerOpen(true)}
            className="text-white hover:text-urbanGray cursor-pointer"
          >
            <ListIcon size={30} />
          </button>
        </nav>
      </header>
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        links={links}
        onNavigate={scrollToSection}
        active={active}
      />
    </>
  );
};

export default Header;
