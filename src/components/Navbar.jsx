import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const NewsTicker = () => {
  const news = [
    "Admissions Open for 2026-28",
    "MBA and MCA admissions guidance available at AIMS Pune",
  ];

  return (
    <div className="bg-[#0a2a66] text-white py-2 overflow-hidden border-b border-yellow-400">
      <div className="whitespace-nowrap animate-marquee font-semibold text-xs sm:text-sm md:text-base">
        {[...news, ...news].map((item, i) => (
          <span key={i} className="mx-8">
            {item}
            {item.includes("Admissions Open") && (
              <Link
                to="/contact"
                className="ml-3 inline-flex rounded bg-yellow-400 px-3 py-1 text-xs font-extrabold text-gray-900 hover:bg-yellow-300"
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
  { label: "The Jadhavar", path: "/about/the-jadhavar" },
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
  { label: "Research", path: "/research" },
  { label: "Accreditation-NAAC", path: "/naac" },
  { label: "Gallery", path: "/gallery" },
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
  const [showContactPopup, setShowContactPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => setIsOpen(false), [location]);

  useEffect(() => {
    if (!showContactPopup) return undefined;
    const timer = setTimeout(() => setShowContactPopup(false), 2600);
    return () => clearTimeout(timer);
  }, [showContactPopup]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const handleApply = () => {
    setShowContactPopup(true);
    navigate("/contact");
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
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md border-b">
      <NewsTicker />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/logo2.png"
              alt="Aditya Institute of Management Studies"
              className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain"
            />
          </Link>

          <div className="hidden lg:flex flex-col text-center flex-1 px-4">
            <h2 className="font-bold text-[#0a2a66] text-lg xl:text-xl">
              Aditya Institute of Management - AIMS
            </h2>
            <p className="text-xs text-gray-700">
              Approved by AICTE New Delhi & DTE Maharashtra
            </p>
            <p className="text-xs font-semibold text-[#0a2a66]">NAAC Accredited "B"</p>
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

          <div className="relative group">
            <button
              type="button"
              className={`navBtn ${location.pathname.startsWith("/about") ? "activeNav" : ""}`}
            >
              About
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-72 py-2 border mt-1">
              {aboutMenu.map((item) => (
                <Link key={item.path} to={item.path} className="dropItem">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {mainMenu.map((item) => (
            <span key={item.path}>{renderLink(item)}</span>
          ))}

          <div className="relative group">
            <button className="navBtn" type="button">
              More
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-56 py-2 border mt-1">
              {moreMenu.map((item) => (
                <span key={item.path}>{renderLink(item, "dropItem")}</span>
              ))}
            </div>
          </div>

          <button onClick={handleApply} className="contactBtn" type="button">
            Apply Now
          </button>
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
            <button onClick={handleApply} className="mobileContact" type="button">
              Apply Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContactPopup && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed top-28 right-4 z-[60] max-w-xs rounded-lg border border-green-200 bg-white p-4 shadow-xl"
          >
            <p className="font-bold text-gray-900">Apply Now page opened</p>
            <p className="text-sm text-gray-600">Submit your admission enquiry for MBA or MCA.</p>
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
