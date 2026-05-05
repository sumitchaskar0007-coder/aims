import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const aboutPages = {
  "the-jadhavar": {
    menu: "The Jadhavar",
    title: "Jadhavar Group of Institutes",
    eyebrow: "About AIMS",
    image: "/assets/logo1.png",
    alt: "Jadhavar Group logo",
    intro:
      "Jadhavar - The Symbol of Success, established in 2014, represents a growing educational movement committed to social, intellectual and quality education under the umbrella of Prin. Dr. Sudhakarrao Jadhavar Group of Educational Institutes.",
    highlights: ["Since 2014", "18,000+ students", "700+ employees", "55 institutes"],
    bodyParagraphs: [
      "Education at the Jadhavar Group of Institutes is focused on bringing social, intellectual and quality education under one umbrella. Once a student enters any standard from nursery to post-graduation, the group believes in translating educational aims into action with perfection, discipline and value-based development.",
      "The group provides education across different disciplines including Arts, Commerce, Science, Nursing, D.Ed., B.Ed., Open University education and two-year Masters in Business Administration. This broad academic ecosystem supports learners at multiple stages of their educational journey.",
      "Within a short span, Jadhavar - The Symbol of Success has earned the trust of more than 18,000 students and their parents, along with 700+ employees. The journey that began in 2014 with a girls school has grown to 55 educational institutes.",
      "The group is headed by Prin. Dr. Sudhakarrao Jadhavar, a visionary educationist and former Dean, Faculty of Commerce, Savitribai Phule Pune University. He has contributed to university academic bodies, served as a research guide at national and international levels, and has also been associated with the Maharashtra Nursing Council and Principal Forum of S.P.P.U.",
      "The group is co-headed by Adv. Shardulrao S. Jadhavar, a young and dynamic leader known for committed, disciplined and enthusiastic work in the social, cultural and educational fields. As President of Dr. Sudhakarrao Jadhavar Social and Educational Trust, he has supported activities for empowerment and upliftment of target groups in society, and has received recognitions including the Sardar Vallabhbhai Patel National Youth Award, New Delhi.",
      "Through its educational approach, the group builds students' collective ability to cope with a changing global, competitive and technology-driven era. Along with structured knowledge, dynamic development, best practices, ethics and values are nurtured through the learning process, supported by state-of-the-art facilities and discipline-specific resources.",
      "The group believes that seeking knowledge is a continuous and never-ending process. Value addition programmes are customized to suit student needs and equip them with skills demanded by the globalized corporate world.",
    ],
    gallery: ["/assets/logo2.png", "/assets/bg1.png", "/assets/cultural-fest.png"],
  },
  "vision-mission": {
    menu: "Vision & Mission",
    title: "Vision, Mission and Institutional Goals",
    eyebrow: "Direction",
    image: "/assets/mba1.jpeg",
    alt: "AIMS MBA learning environment",
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
    degrees: "M.Com, M.A., LL.M., D.T.L., M.P.M., D.L.L. & L.W., G.D.C. & A., Ph.D",
    profileParagraphs: [
      "Dr. Sudhakarrao Jadhavar is a visionary educationist whose lifelong commitment to learning, discipline and social upliftment has shaped the foundation of AIMS. His work reflects the belief that education must create strength of character, clarity of thought and a responsible attitude toward society.",
      "As Founder President & Chairman, he has guided the institution with a balanced focus on academic quality, student welfare and institutional growth. His leadership encourages a culture where students are not only trained for professional success, but also prepared to act with humility, integrity and confidence.",
      "His multidisciplinary academic background in commerce, law, management and humanities gives him a broad understanding of modern education. This perspective helps AIMS connect classroom learning with practical development, ethical values and social awareness.",
      "Under his guidance, the institute continues to strengthen its academic systems, mentoring practices, placement support and student development initiatives. His message to every student is simple and powerful: knowledge becomes meaningful only when it is supported by discipline, courage and service.",
    ],
    messageTitle: "Secretary's Message",
    messageGreeting: "Dear Researchers,",
    messageParagraphs: [
      "It is a matter of great pleasure and pride that the MBA and PGDM programs at Aditya Institute of Management - AIMS, Prin. Dr. Sudhakarrao Jadhavar Educational Campus, Manaji Nagar, Narhe, Pune, are recognized among the prestigious institutes in Pune city.",
      "I implore all members of the faculty to follow a path of ethically oriented and socially relevant education so that the institute can play a pivotal role in creating and disseminating knowledge, educating a highly skilled workforce for technological and intellectual leadership, and enhancing the competitiveness of society in the emerging knowledge economy.",
      "AIMS, with this goal in mind, will offer postgraduate courses as per the syllabus designed by Savitribai Phule Pune University.",
      "I am confident that AIMS will live up to the expectations of today's corporate world and help the nation and society fulfill the dream of becoming a superpower by creating empowered managers and entrepreneurs of high caliber.",
      "I wish heartiest congratulations to students, teacher-educators and members of staff. Wish you all the best.",
    ],
    messageSignature: "Hon. Prin. Dr. Sudhakarrao Jadhavar",
    roles: [
      "President: Akhil Bhartiya Principal Federation",
      "Ex. Management Council Member: Savitribai Phule Pune University, Pune",
      "General Secretary: Maharashtra State Principal Federation",
      "Secretary General: Principal Forum, Savitribai Phule Pune University, Pune",
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
    degrees: "M.B.A., P.G.D.H.R.M., B.Com., D.H.R.L., D.C.L., D.C.P.L., A.C.P.L., CMED, D.L.L. & L.W., LL.M.",
    profileParagraphs: [
      "Adv. Shardulrao Sudhakarrao Jadhavar brings a dynamic, student-first approach to institutional leadership. His work at AIMS focuses on building a learning environment where academic teaching, personal mentoring, placement preparation and industry exposure move together.",
      "As Vice President, he supports initiatives that help students become professionally capable and personally confident. His guidance strengthens career counseling, skill development, internship readiness, NSS activities, mental health awareness and holistic student support.",
      "With qualifications across management, commerce, law, human resource development and mediation, he brings a practical and multidisciplinary perspective to education. This helps the institute design systems that respond to the changing expectations of industry and society.",
      "He believes that management and computer application students need more than classroom knowledge. They need communication skills, decision-making ability, ethical judgment, leadership habits and the confidence to work in real professional environments.",
    ],
    messageTitle: "President's Message",
    messageGreeting: "Dear Researchers,",
    messageParagraphs: [
      "It is my pride, pleasure and privilege to welcome you to our renowned educational management institute. Efficient business administration has become a norm of today's competitive world and has touched and transformed our lives across society and industry.",
      "To fulfill the dream of making our country a superpower, we need quality managers and new entrepreneurs. Aditya Educational Foundation has recognized and addressed this need through AIMS by creating knowledgeable and empowered leaders for the corporate world.",
      "AIMS has a student-centric approach that will bring all-round development of students and empower them to face the challenges of a highly competitive world.",
      "Our aim is to harness every student's potential, enhance skills to perfection and build professional leaders with high academic aptitude through a student-centric system and advanced teaching methods.",
      "The faculty at AIMS are meticulously chosen. They will not merely impart knowledge, but will also imbibe ambition in students and strive to extract the best in each student.",
      "AIMS, with this goal in mind, will offer postgraduate courses as per the syllabus designed by Savitribai Phule Pune University.",
      "I am confident that AIMS will live up to the expectations of today's corporate world and help the nation and society fulfill the dream of becoming a superpower by creating empowered managers and entrepreneurs of high caliber. Wish you all the best.",
    ],
    messageSignature: "Hon. Adv. Shardul Sudhakarrao Jadhavar",
    roles: ["Vice President: Jadhavar Group of Institutes"],
    ventures: [
      "Jadhavar Hotel and Developers Pvt. Ltd.",
      "Jadhavar Films",
      "Jadhavar Real Estate",
      "Shardul Sudhakarrao Jadhavar Associates",
      "Jadhavar Legal Firm",
      "Pracharya Dr. Sudhakarrao Jadhavar Sevakanachi Patsanstha",
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
    gallery: ["/assets/Shardul_jadhavar.jpeg", "/assets/mba1.jpeg", "/assets/sports-meet.png"],
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
      "Pune gives AIMS and Jadhavar Group students access to academic culture, industry exposure, internships, entrepreneurship and a vibrant student community.",
    highlights: ["Education hub", "IT and industry", "Startup ecosystem", "Student-friendly city"],
    bodyParagraphs: [
      "Pune is widely known as one of India's most respected education cities, and this academic environment gives students of AIMS and the Jadhavar Group a strong advantage. The city has a long tradition of learning, universities, professional colleges, research culture and student-friendly surroundings, making it a natural destination for young learners from across Maharashtra and India.",
      "For management and computer application students, Pune offers meaningful exposure beyond the classroom. The city is connected with IT parks, manufacturing companies, banking and finance organizations, consulting firms, retail businesses, startups and service-sector opportunities. This gives AIMS students access to internships, industry visits, guest sessions, live projects and practical understanding of how modern organizations work.",
      "The Jadhavar Group's educational campus at Narhe benefits from Pune's growing academic and industrial ecosystem. Students learn in a city where education, entrepreneurship and employment opportunities move together, helping them connect classroom knowledge with real business challenges. This environment supports the institute's focus on employability, professional discipline and value-based development.",
      "Pune is also a culturally rich and socially active city. Students experience a balanced lifestyle through academic events, cultural programs, seminars, workshops, sports, social initiatives and networking opportunities. This helps learners build communication, confidence, teamwork and leadership qualities that are important for professional success.",
      "The city's startup and innovation culture is especially useful for students who wish to become entrepreneurs or business leaders. Exposure to new ideas, technology-driven businesses and evolving market practices helps students understand competition, customer needs, digital transformation and the importance of continuous learning.",
      "For the Jadhavar Group of Institutes, Pune is more than a location; it is an educational advantage. The city supports the group's mission of creating capable, ethical and socially responsible students who can contribute to industry, society and the nation with confidence.",
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
            {page.messageParagraphs && (
              <div className="mb-12 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-primary">
                  {page.messageTitle}
                </p>
                <p className="mt-5 font-semibold text-gray-900">{page.messageGreeting}</p>
                <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700">
                  {page.messageParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-6 border-t border-gray-200 pt-5 text-gray-700">
                  <p className="text-lg font-bold text-gray-900">{page.messageSignature}</p>
                  <p className="mt-2 text-sm">{page.degrees}</p>
                  {page.roles?.map((role) => (
                    <p key={role} className="mt-1 text-sm">
                      {role}
                    </p>
                  ))}
                  {page.ventures && (
                    <div className="mt-5">
                      <p className="font-bold text-gray-900">Associated Ventures</p>
                      <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {page.ventures.map((venture) => (
                          <p key={venture} className="rounded-md bg-blue-50 px-3 py-2 text-sm font-semibold text-[#0a2a66]">
                            {venture}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
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
                      {item === "Since 2014" && "2014"}
                      {item === "18,000+ students" && "18K+"}
                      {item === "700+ employees" && "700+"}
                      {item === "55 institutes" && "55"}
                      {item === "Education hub" && "EDU"}
                      {item === "IT and industry" && "IT"}
                      {item === "Startup ecosystem" && "START"}
                      {item === "Student-friendly city" && "CITY"}
                      {!["Founder Leadership", "Academic Excellence", "Value-based Education", "Institutional Vision", "Student-Centric Leadership", "Industry Integration", "Legal & Management Expertise", "Holistic Development", "Employability", "Ethical leadership", "Practical learning", "Global outlook", "Since 2014", "18,000+ students", "700+ employees", "55 institutes", "Education hub", "IT and industry", "Startup ecosystem", "Student-friendly city"].includes(item) && "OK"}
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
            {page.bodyParagraphs ? (
              <AnimatedCard>
                <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-md">
                  <div className="space-y-5 text-[17px] leading-8 text-gray-700">
                    {page.bodyParagraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ) : (
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
            )}
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
