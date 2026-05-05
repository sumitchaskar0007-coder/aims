import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const NewsTicker = () => {
  const news = [
    "Admissions Open for 2026-27",
    "Lateral Entry admissions available",
    "MBA and MCA admissions available at AIMS Pune",
  ];

  return (
    <div className="bg-[#0a2a66] text-white py-2 overflow-hidden border-b border-yellow-400">
      <div className="whitespace-nowrap animate-marquee font-semibold text-xs sm:text-sm md:text-base">
        {[...news, ...news].map((item, i) => (
          <span key={i} className="mx-8">
            <span className="mr-3">{item}</span>
            {item.toLowerCase().includes("admissions") && (
              <Link
                to="/contact"
                className="inline-flex rounded bg-yellow-400 px-3 py-1 text-xs font-extrabold text-gray-900 hover:bg-yellow-300"
              >
                Click Here
              </Link>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

const aboutMenu = [
  { label: "Jadhavar Group Of Institute", path: "/about/the-jadhavar" },
  { label: "Vision & Mission", path: "/about/vision-mission" },
  { label: "Founder President & Chairman", path: "/about/founder-president-chairman" },
  { label: "Vice President", path: "/about/vice-president" },
  { label: "Campus", path: "/about/campus" },
  { label: "About Pune", path: "/about/about-pune" },
];

const mainMenu = [
  { label: "Courses", path: "/courses" },
 // { label: "Placement", path: "/placement" },
  { label: "Student", path: "/student" },
  { label: "Accreditation-NAAC", path: "/naac" },
  { label: "Gallery", path: "/gallery" },
];

const researchMenu = [
  {
    label: "National Conference",
    children: [
      { label: "Abstract Book", path: "/pdf/national_conference.pdf", external: true },
      { label: "Report", path: "/pdf/national_conference_report.pdf", external: true },
    ],
  },
  { label: "Faculty Research Paper", path: "/pdf/faculty_research_papers.pdf", external: true },
  { label: "Student Research Paper", path: "/pdf/student_research_papers.pdf", external: true },
];

const moreMenu = [
  { label: "AICTE LOA", path: "/pdf/LOA.pdf", external: true },
  { label: "Prospectus", path: "/pdf/mba_mca_br.pdf", external: true },
  { label: "Academics", path: "/academics" },
  { label: "UDAN", path: "/udan" },
  { label: "Programs", path: "/programs" },
  { label: "Events", path: "/events" },
  { label: "Notices", path: "/notices" },
  { label: "Blog", path: "/blog" },
  { label: "Career", path: "/career" },
  { label: "Grievance", path: "/grievance" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const renderLink = (item, className = "navBtn") =>
    item.external ? (
      <a href={item.path} target="_blank" rel="noopener noreferrer" className={className}>
        {item.label}
      </a>
    ) : (
      <Link to={item.path} className={`${className} ${isActive(item.path) ? "activeNav" : ""}`}>
        {item.label}
      </Link>
    );

  return (
    <nav ref={navRef} className="fixed top-0 w-full z-50 bg-white shadow-md border-b">
      <NewsTicker />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/logo2.png"
              alt="Aditya Institute of Management Studies"
              className="h-14 sm:h-16 md:h-20 lg:h-24 object-contain"
            />
          </Link>

          <div className="hidden lg:flex flex-col text-center flex-1 px-4">
            <h2 className="font-bold text-[#0a2a66] text-2xl xl:text-3xl">
              Aditya Institute of Management - AIMS
            </h2>
            <p className="text-sm xl:text-base text-gray-700">
              Approved by AICTE New Delhi & DTE Maharashtra
            </p>
            <p className="text-sm xl:text-base font-semibold text-[#0a2a66]">NAAC Accredited "B"</p>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden rounded-md p-2 text-gray-800 hover:bg-gray-100"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex flex-wrap justify-center items-center gap-2 mt-4">
          {renderLink({ label: "Home", path: "/" })}

          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")}
              aria-expanded={openDropdown === "about"}
              aria-haspopup="true"
              className={`navBtn ${location.pathname.startsWith("/about") ? "activeNav" : ""}`}
            >
              About Us
            </button>
            {openDropdown === "about" && (
            <div className="absolute left-0 top-full z-50 mt-1 w-72 rounded-md border bg-white py-2 shadow-lg">
              {aboutMenu.map((item) => (
                <Link key={item.path} to={item.path} className="dropItem" onClick={() => setOpenDropdown(null)}>
                  {item.label}
                </Link>
              ))}
            </div>
            )}
          </div>

          {mainMenu.map((item) => (
            <span key={item.path}>{renderLink(item)}</span>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "research" ? null : "research")}
              aria-expanded={openDropdown === "research"}
              aria-haspopup="true"
              className={`navBtn ${location.pathname.startsWith("/research") ? "activeNav" : ""}`}
            >
              Research
            </button>
            {openDropdown === "research" && (
              <div className="absolute left-0 top-full z-50 mt-1 w-64 rounded-md border bg-white py-2 shadow-lg">
                {researchMenu.map((item) =>
                  item.children ? (
                    <div key={item.label} className="relative">
                      <button
                        type="button"
                        className="dropItem flex w-full items-center justify-between text-left"
                        onClick={() => setOpenSubDropdown(openSubDropdown === item.label ? null : item.label)}
                        aria-expanded={openSubDropdown === item.label}
                      >
                        <span>{item.label}</span>
                        <span className="text-xs">&gt;</span>
                      </button>
                      {openSubDropdown === item.label && (
                        <div className="absolute left-full top-0 z-50 ml-1 w-52 rounded-md border bg-white py-2 shadow-lg">
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="dropItem"
                              onClick={() => {
                                setOpenDropdown(null);
                                setOpenSubDropdown(null);
                              }}
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      key={item.label}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropItem"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.label}
                    </a>
                  ),
                )}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="navBtn"
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "more" ? null : "more")}
              aria-expanded={openDropdown === "more"}
              aria-haspopup="true"
            >
              More
            </button>
            {openDropdown === "more" && (
            <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-md border bg-white py-2 shadow-lg">
              {moreMenu.map((item) => (
                <span key={item.path} onClick={() => setOpenDropdown(null)}>{renderLink(item, "dropItem")}</span>
              ))}
            </div>
            )}
          </div>

          <Link to="/contact" className="contactBtn">
            Apply Now
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t max-h-[80vh] overflow-y-auto"
          >
            <Link to="/" className="mobileItem">
              Home
            </Link>
            <div className="mobileItem font-bold text-[#0a2a66]">
              About
            </div>
            {aboutMenu.map((item) => (
              <Link key={item.path} to={item.path} className="mobileSubItem">
                {item.label}
              </Link>
            ))}
            <div className="mobileItem font-bold text-[#0a2a66]">
              Research
            </div>
            {researchMenu.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <div className="mobileSubItem font-bold text-[#0a2a66]">{item.label}</div>
                  {item.children.map((child) => (
                    <a key={child.label} href={child.path} target="_blank" rel="noopener noreferrer" className="mobileSubSubItem">
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a key={item.label} href={item.path} target="_blank" rel="noopener noreferrer" className="mobileSubItem">
                  {item.label}
                </a>
              ),
            )}
            {[...mainMenu, ...moreMenu].map((item) =>
              item.external ? (
                <a key={item.path} href={item.path} target="_blank" rel="noopener noreferrer" className="mobileItem">
                  {item.label}
                </a>
              ) : (
                <Link key={item.path} to={item.path} className="mobileItem">
                  {item.label}
                </Link>
              ),
            )}
            <Link to="/contact" className="mobileContact">
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navBtn {
          display: inline-flex;
          align-items: center;
          min-height: 38px;
          padding: 8px 12px;
          font-weight: 600;
          border-radius: 6px;
          color: #374151;
          transition: all 0.2s ease;
          font-size: 13px;
        }

        .navBtn:hover {
          background: #fef3c7;
          color: #0a2a66;
        }

        .activeNav {
          background: #0a2a66;
          color: white;
        }

        .dropItem {
          display: block;
          padding: 9px 12px;
          font-size: 14px;
          color: #374151;
          transition: 0.2s;
        }

        .dropItem:hover {
          background: #fef3c7;
          color: #0a2a66;
        }

        .contactBtn {
          min-height: 38px;
          padding: 8px 16px;
          border-radius: 6px;
          background: #facc15;
          color: #111827;
          font-size: 13px;
          font-weight: 800;
          transition: all 0.2s ease;
        }

        .contactBtn:hover {
          background: #fbbf24;
          transform: translateY(-1px);
        }

        .mobileItem,
        .mobileSubItem,
        .mobileSubSubItem,
        .mobileContact {
          display: block;
          width: 100%;
          text-align: left;
          padding: 14px;
          border-bottom: 1px solid #eee;
          font-weight: 500;
        }

        .mobileSubItem {
          padding-left: 30px;
          font-size: 14px;
          color: #4b5563;
          background: #f9fafb;
        }

        .mobileSubSubItem {
          padding-left: 46px;
          font-size: 14px;
          color: #4b5563;
          background: #fff;
        }

        .mobileContact {
          background: #facc15;
          color: #111827;
          font-weight: 800;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
