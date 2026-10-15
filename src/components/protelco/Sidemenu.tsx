import { FunctionComponent } from "react";

export type SidemenuProps = {
  className?: string;
  activeItem?: string;
  onNavigate?: (item: string) => void;
};

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "/protelco/icon-dashboard.svg" },
  { id: "user-data", label: "User Data", icon: "/protelco/icon-user.svg" },
  { id: "tickets", label: "Tickets", icon: "/protelco/icon-tickets.svg" },
  { id: "all-services", label: "All Services", icon: "/protelco/icon-services.svg" },
  { id: "settings", label: "Settings", icon: "/protelco/icon-settings.svg" },
];

/**
 * Protelco dashboard sidebar with brand mark, primary nav, and support link.
 */
const Sidemenu: FunctionComponent<SidemenuProps> = ({
  className = "",
  activeItem = "user-data",
  onNavigate,
}) => {
  return (
    <nav
      className={`relative flex h-full w-[240px] min-w-[180px] max-w-[240px] shrink-0 flex-col items-center overflow-hidden bg-white px-6 pb-6 pt-10 ${className}`}
      role="navigation"
      aria-label="Protelco navigation"
    >
      <div className="pointer-events-none absolute bottom-[37px] left-[-62px] flex h-[232px] w-[242px] items-center justify-center">
        <img
          className="h-[184px] w-[198px] rotate-[16.29deg]"
          src="/protelco/deco-stroke.svg"
          alt=""
        />
      </div>

      <div className="relative mb-[65px] flex h-[98px] w-[121px] shrink-0 items-center justify-center">
        <img
          className="h-full w-full object-contain"
          src="/protelco/logo.svg"
          alt="Protelco"
        />
      </div>

      <div className="relative flex w-full flex-1 flex-col justify-between gap-5">
        <ul className="flex w-full flex-col gap-[18px]">
          {navItems.map((item) => {
            const isActive = item.id === activeItem;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onNavigate?.(item.id)}
                  className={`flex w-full items-center gap-2 rounded px-[2px] py-[6px] pr-[6px] text-left transition-colors ${
                    isActive
                      ? "bg-[rgba(212,10,13,0.06)]"
                      : "hover:bg-[rgba(212,10,13,0.04)]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="relative size-5 shrink-0 overflow-hidden rounded">
                    <img
                      className="absolute inset-0 size-full object-contain"
                      src={item.icon}
                      alt=""
                    />
                  </span>
                  <span
                    className={`whitespace-nowrap font-inter text-sm leading-none ${
                      isActive ? "text-[#d40a0d]" : "text-[#373737]"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="flex w-full items-center gap-[7px] text-left"
        >
          <span className="relative size-5 shrink-0 overflow-hidden rounded">
            <img
              className="absolute inset-0 size-full object-contain"
              src="/protelco/icon-support.svg"
              alt=""
            />
          </span>
          <span className="whitespace-nowrap font-inter text-sm leading-none text-[#797b7d]">
            Need Support?
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Sidemenu;
