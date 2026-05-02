import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const aboutPages = {
  "the-jadhavar": {
    menu: "The Jadhavar",
    title: "The Jadhavar Educational Legacy",
    eyebrow: "About AIMS",
    image: "/assets/logo1.png",
    alt: "Jadhavar Group logo",
    intro:
      "The Jadhavar educational journey is built on the belief that education should develop strength, wisdom, intellect and social responsibility. AIMS carries this legacy into management education through disciplined academics, mentoring and student-centred growth.",
    highlights: ["Value-based education", "Academic discipline", "Student development", "Social responsibility"],
    sections: [
      {
        title: "About the Institution",
        text:
          "Aditya Institute of Management Studies works under the larger Jadhavar educational vision. The institute focuses on creating confident management professionals who understand business, people, ethics and society.",
      },
      {
        title: "Educational Thought",
        text:
          "The Jadhavar approach gives importance to knowledge, character, humility and confidence. Students are encouraged to participate in academic, cultural, social and professional activities.",
      },
      {
        title: "AIMS Connection",
        text:
          "At AIMS Pune, this legacy is reflected through MBA and MCA learning, placement support, industry exposure, mentoring, research orientation and a practical campus environment.",
      },
    ],
    gallery: ["/assets/logo2.png", "/assets/bg1.png", "/assets/cultural-fest.png"],
  },
  "vision-mission": {
    menu: "Vision & Mission",
    title: "Vision, Mission and Institutional Goals",
    eyebrow: "Direction",
    image: "/assets/admission1.png",
    alt: "AIMS admission and learning environment",
    intro:
      "AIMS aims to develop ethical, employable and confident management professionals through industry-linked learning, mentoring, practical exposure and continuous improvement.",
    highlights: ["Employability", "Ethical leadership", "Practical learning", "Global outlook"],
    sections: [
      {
        title: "Vision",
        text:
          "To be a centre of excellence in management education that develops ethical, innovative and employable leaders with social awareness and professional confidence.",
      },
      {
        title: "Mission",
        text:
          "To provide industry-aligned management education through classroom learning, internships, projects, research, mentoring, skill development and personality enhancement.",
      },
      {
        title: "Institutional Goals",
        text:
          "The institute works to improve communication, decision-making, analytical thinking, entrepreneurship, teamwork, leadership and career readiness among students.",
      },
    ],
    gallery: ["/assets/slider1.jpg", "/assets/slider3.jpg", "/assets/program1.jpg"],
  },
  "founder-president-chairman": {
    menu: "Founder President & Chairman",
    title: "Dr. Sudhakarrao Jadhavar",
    eyebrow: "Leadership",
    image: "/assets/owner.jpeg",
    alt: "Dr. Sudhakarrao Jadhavar - Founder President",
    intro:
      "Dr. Sudhakarrao Jadhavar, the visionary Founder President & Chairman of AIMS, brings decades of academic excellence and a deep commitment to value-based education. His leadership has shaped the institution into a center of holistic learning and professional development.",
    designation: "Founder President & Chairman",
    degrees: "M.Com, M.A., LL.M., M.P.M., D.T.L., D.L.L. & L.W., G.D.C. & A., Ph.D",
    profileParagraphs: [
      "Dr. Sudhakarrao Jadhavar is a visionary educationist whose lifelong commitment to learning, discipline and social upliftment has shaped the foundation of AIMS. His work reflects the belief that education must create strength of character, clarity of thought and a responsible attitude toward society.",
      "As Founder President & Chairman, he has guided the institution with a balanced focus on academic quality, student welfare and institutional growth. His leadership encourages a culture where students are not only trained for professional success, but also prepared to act with humility, integrity and confidence.",
      "His multidisciplinary academic background in commerce, law, management and humanities gives him a broad understanding of modern education. This perspective helps AIMS connect classroom learning with practical development, ethical values and social awareness.",
      "Under his guidance, the institute continues to strengthen its academic systems, mentoring practices, placement support and student development initiatives. His message to every student is simple and powerful: knowledge becomes meaningful only when it is supported by discipline, courage and service.",
    ],
    highlights: ["Founder Leadership", "Academic Excellence", "Value-based Education", "Institutional Vision"],
    sections: [
      {
        title: "Profile",
        text:
          "Dr. Sudhakarrao Jadhavar is a distinguished academician with qualifications including M.Com, M.A., LL.M., M.P.M., D.T.L., D.L.L. & L.W., G.D.C. & A., and Ph.D. His extensive educational background reflects a deep understanding of commerce, law, management, and humanities, enabling him to provide holistic leadership to the institution.",
      },
      {
        title: "Academic Contribution",
        text:
          "Throughout his illustrious career, Dr. Jadhavar has made significant contributions to higher education through university-level academic roles, leadership positions, and active involvement in educational administration. His vision has been instrumental in establishing AIMS as a premier management institute.",
      },
      {
        title: "Message for Students",
        text:
          "Dr. Jadhavar's educational philosophy encourages students to combine knowledge with discipline, humility, confidence, and service to society. He believes in nurturing future leaders who are not only professionally competent but also socially responsible citizens.",
      },
    ],
    gallery: ["/assets/owner.jpeg", "/assets/bg2.png", "/assets/logo2.png"],
  },
  "vice-president": {
    menu: "Vice President",
    title: "Adv. Shardulrao Sudhakarrao Jadhavar",
    eyebrow: "Leadership",
    image: "/assets/Shardul_jadhavar.jpeg",
    alt: "Adv. Shardulrao Sudhakarrao Jadhavar - Vice President",
    intro:
      "Adv. Shardulrao Sudhakarrao Jadhavar, the dynamic Vice President of AIMS, combines expertise in management, commerce, and law to drive student-focused development, modern education practices, and robust industry connections.",
    designation: "Vice President",
    degrees: "MBA, PGD-HRM, M.Com, D.H.R & L., D.C.L, D.C.P.L, A.P.C.L, C.MED, D.L.L & L.W., LL.M.",
    profileParagraphs: [
      "Adv. Shardulrao Sudhakarrao Jadhavar brings a dynamic, student-first approach to institutional leadership. His work at AIMS focuses on building a learning environment where academic teaching, personal mentoring, placement preparation and industry exposure move together.",
      "As Vice President, he supports initiatives that help students become professionally capable and personally confident. His guidance strengthens career counseling, skill development, internship readiness, NSS activities, mental health awareness and holistic student support.",
      "With qualifications across management, commerce, law, human resource development and mediation, he brings a practical and multidisciplinary perspective to education. This helps the institute design systems that respond to the changing expectations of industry and society.",
      "He believes that management and computer application students need more than classroom knowledge. They need communication skills, decision-making ability, ethical judgment, leadership habits and the confidence to work in real professional environments.",
    ],
    highlights: ["Student-Centric Leadership", "Industry Integration", "Legal & Management Expertise", "Holistic Development"],
    sections: [
      {
        title: "Profile",
        text:
          "Adv. Shardulrao Sudhakarrao Jadhavar brings a unique multidisciplinary perspective to educational leadership. With professional qualifications spanning Management (MBA, PGD-HRM), Commerce (M.Com), Law (LL.M., D.C.L, D.C.P.L, D.H.R & L.), and specialized certifications including A.P.C.L and C.MED, he provides comprehensive guidance for institutional growth.",
      },
      {
        title: "Student Development & Mentorship",
        text:
          "Adv. Jadhavar's primary focus includes student mentoring, career counseling, skill development, NSS activities, mental health awareness, and placement readiness. He believes in creating an ecosystem where students receive personalized attention and guidance to achieve their professional aspirations.",
      },
      {
        title: "Institutional Growth & Industry Connect",
        text:
          "Under his leadership, AIMS has strengthened its industry partnerships, modernized its curriculum, and enhanced placement support. His practical, student-first approach ensures that classroom learning is complemented by internships, live projects, corporate exposure, and professional development activities.",
      },
    ],
    gallery: ["/assets/Shardul_jadhavar.jpeg", "/assets/admission2.png", "/assets/sports-meet.png"],
  },
  campus: {
    menu: "Campus",
    title: "AIMS Campus at Narhe, Pune",
    eyebrow: "Campus",
    image: "/assets/52355.jpg",
    alt: "AIMS campus building",
    intro:
      "The AIMS campus provides a focused environment for management learning, placement preparation, seminars, student activities and professional development.",
    highlights: ["Digital classrooms", "Computer lab", "Library", "Seminar spaces", "Placement support", "Student activities"],
    sections: [
      {
        title: "Learning Infrastructure",
        text:
          "The campus supports academic delivery through classrooms, learning resources, computer access, presentations and seminar-style sessions.",
      },
      {
        title: "Student Facilities",
        text:
          "Students benefit from spaces for activities, mentoring, discussions, cultural participation, sports and career preparation.",
      },
      {
        title: "Location Advantage",
        text:
          "Located at Narhe, Pune, the campus is connected to an education and industry ecosystem that supports internships, placements and exposure.",
      },
    ],
    gallery: ["/assets/52355.jpg", "/assets/bg1.png", "/assets/slider4.jpg"],
  },
  "about-pune": {
    menu: "About Pune",
    title: "About Pune: Education, Industry and Student Life",
    eyebrow: "City Advantage",
    image: "/assets/slider 2.jpg",
    alt: "Pune city and campus life",
    intro:
      "Pune is one of India's leading education and industry cities, giving management students access to academic culture, internships, corporate exposure and a vibrant student community.",
    highlights: ["Education hub", "IT and industry", "Startup ecosystem", "Student-friendly city"],
    sections: [
      {
        title: "Education Hub",
        text:
          "Pune is known for higher education, professional colleges, universities and a strong academic environment that attracts students from across India.",
      },
      {
        title: "Industry Access",
        text:
          "The city has opportunities across IT, banking, finance, consulting, manufacturing, retail, services and startups, making it useful for MBA and MCA exposure.",
      },
      {
        title: "Student Life",
        text:
          "Pune offers a balanced environment for learning, networking, cultural activity, internships and professional growth.",
      },
    ],
    gallery: ["/assets/slider 2.jpg", "/assets/slider1.jpg", "/assets/cultural-fest.png"],
  },
};

// Animated Section Component
function AnimatedSection({ children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// Animated Card Component
function AnimatedCard({ children, delay = 0, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function LeadershipProfile({ page }) {
  return (
    <>
      <Helmet>
        <title>{page.menu} | About AIMS Pune</title>
        <meta
          name="description"
          content={`${page.title} - Leadership profile, qualifications and contribution at AIMS Pune.`}
        />
      </Helmet>

      <div className="bg-white">
        <section className="py-14 md:py-20 px-4">
          <div className="container-wide">
            <div className="mx-auto mb-12 max-w-3xl bg-[#f25a1d] px-6 py-4 text-center">
              <h1 className="text-2xl md:text-3xl font-extrabold text-white">
                {page.designation}
              </h1>
            </div>

            <div className="grid lg:grid-cols-[1fr,460px] gap-12 items-center">
              <div>
                <div className="space-y-6 text-[17px] leading-8 text-gray-900">
                  {page.profileParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h2 className="text-2xl font-extrabold text-gray-900">{page.title}</h2>
                  <p className="mt-2 text-lg font-semibold text-[#0a2a66]">{page.designation}</p>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-gray-700">
                    <span className="font-bold text-gray-900">Degrees: </span>
                    {page.degrees}
                  </p>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -right-8 -top-8 h-72 w-72 rounded-full border-4 border-[#f25a1d]"></div>
                <div className="relative border-4 border-[#f25a1d] bg-white p-4 shadow-xl">
                  <img
                    src={page.image}
                    alt={page.alt}
                    className="h-96 w-full bg-gray-50 object-contain p-3"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-4">
          <div className="container-wide">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Detailed Profile of {page.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {page.sections.map((section) => (
                <div key={section.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                  <p className="mt-3 text-gray-700 leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0a2a66] py-12 text-white">
          <div className="container-wide flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Explore admissions at AIMS</h2>
              <p className="mt-2 text-blue-100">Get guidance for MBA/MCA admissions and campus visits.</p>
            </div>
            <Link to="/contact" className="rounded-md bg-yellow-400 px-6 py-3 text-center font-bold text-gray-900 hover:bg-yellow-300">
              Apply Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default function AboutDetail() {
  const { slug } = useParams();
  const page = aboutPages[slug];
  const [imageError, setImageError] = useState({});

  if (!page) return <Navigate to="/about" replace />;

  if (page.profileParagraphs) {
    return <LeadershipProfile page={page} />;
  }

  const handleImageError = (key) => {
    setImageError(prev => ({ ...prev, [key]: true }));
  };

  const getValidImageSrc = (src, key) => {
    if (imageError[key]) {
      // Fallback to a placeholder image
      return "https://via.placeholder.com/800x600?text=Image+Not+Available";
    }
    return src;
  };

  return (
    <>
      <Helmet>
        <title>{page.menu} | About AIMS Pune</title>
        <meta name="description" content={`${page.title} - Comprehensive information about AIMS Pune with leadership details, vision, mission, and institutional values.`} />
      </Helmet>

      <div className="bg-white overflow-hidden">
        {/* Hero Section with Animation */}
        <AnimatedSection className="bg-gradient-to-r from-[#0a2a66] to-blue-800 text-white">
          <div className="container-wide grid lg:grid-cols-2 gap-10 items-center py-16 md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-yellow-300 animate-fadeInUp">
                {page.eyebrow}
              </p>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold animate-slideInRight">
                {page.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-blue-100 animate-fadeInUp">
                {page.intro}
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm transform transition-transform duration-500 hover:scale-105">
              <img
                src={getValidImageSrc(page.image, "hero")}
                alt={page.alt}
                className="h-80 w-full rounded-md object-cover bg-white shadow-lg"
                onError={() => handleImageError("hero")}
                loading="lazy"
              />
              {page.designation && (
                <div className="mt-4 rounded-md bg-white p-4 text-center text-gray-900 shadow-md">
                  <p className="text-sm font-bold text-primary uppercase tracking-wide">{page.designation}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700 font-medium">
                    {page.degrees}
                  </p>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Highlights Section */}
        <AnimatedSection className="container-wide py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {page.highlights.map((item, index) => (
              <AnimatedCard key={item} delay={index * 100}>
                <div className="rounded-lg border-2 border-gray-100 bg-white p-5 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:border-primary hover:scale-105 cursor-pointer">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">
                      {item === "Founder Leadership" && "👨‍🎓"}
                      {item === "Academic Excellence" && "📚"}
                      {item === "Value-based Education" && "💎"}
                      {item === "Institutional Vision" && "🔭"}
                      {item === "Student-Centric Leadership" && "👥"}
                      {item === "Industry Integration" && "🏭"}
                      {item === "Legal & Management Expertise" && "⚖️"}
                      {item === "Holistic Development" && "🌱"}
                      {item === "Employability" && "💼"}
                      {item === "Ethical leadership" && "🏆"}
                      {item === "Practical learning" && "🔧"}
                      {item === "Global outlook" && "🌍"}
                      {!["Founder Leadership", "Academic Excellence", "Value-based Education", "Institutional Vision", "Student-Centric Leadership", "Industry Integration", "Legal & Management Expertise", "Holistic Development", "Employability", "Ethical leadership", "Practical learning", "Global outlook"].includes(item) && "✓"}
                    </span>
                  </div>
                  <p className="font-bold text-[#0a2a66]">{item}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Content Sections */}
        <AnimatedSection className="bg-gray-50 pb-16 px-4">
          <div className="container-wide">
            <div className="space-y-6">
              {page.sections.map((section, index) => (
                <AnimatedCard key={section.title} delay={index * 150}>
                  <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300">
                    <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-primary pl-4">
                      {section.title}
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section with Animation */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-14">
            <div className="container-wide flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold">Want more information about AIMS?</h2>
                <p className="mt-2 text-blue-100">Contact the admissions team for campus visits and MBA/MCA guidance.</p>
              </div>
              <Link
                to="/contact"
                className="rounded-md bg-yellow-400 px-6 py-3 font-bold text-gray-900 hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}
