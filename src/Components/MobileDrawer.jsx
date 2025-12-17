import { XIcon } from "@phosphor-icons/react";

const MobileDrawer = ({ open, onClose, links, onNavigate, active }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-[75%] max-w-xs bg-neutral-800 z-50
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header do Drawer */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="text-white font-semibold text-lg">Menu</span>
          <button
            onClick={onClose}
            className="text-white cursor-pointer hover:text-urbanGray"
          >
            <XIcon size={24} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-6 py-6 gap-2">
          {links.map((link) => {
            const isActive = active === link.id;

            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  onClose();
                }}
                className={`
                  text-left text-[15px] px-4 py-2 rounded-lg transition-colors duration-200
                  ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-mildSilver hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                {link.label}
              </button>
            );
          })}

          <a
            href="https://potfolio-ryan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold text-center hover:bg-mildSilver transition"
          >
            Meu portfólio
          </a>
        </nav>
      </aside>
    </>
  );
};

export default MobileDrawer;
