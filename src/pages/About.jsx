import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SectionTitle = ({ eyebrow, title, text }) => (
  <div className="max-w-3xl">
    <p className="text-sm font-bold uppercase tracking-wide text-primary">{eyebrow}</p>
    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
    {text && <p className="mt-4 text-gray-700 leading-relaxed">{text}</p>}
  </div>
);

const InfoCard = ({ title, children }) => (
  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </div>
);

export default function About() {
  const campusFacilities = [
    "Digital classrooms and seminar hall",
    "Management library with journals and business resources",
    "Computer lab with internet access",
    "Placement and career guidance cell",
    "Sports, cultural and student activity spaces",
    "Safe, accessible campus environment in Narhe, Pune",
  ];

  return (
    <>
      <Helmet>
        <title>About AIMS Pune | Aditya Institute of Management Studies</title>
        <meta
          name="description"
          content="About Aditya Institute of Management Studies Pune, The Jadhavar Group, vision and mission, leadership, campus and Pune advantage."
        />
      </Helmet>

      <div className="bg-white">
        <section className="relative overflow-hidden bg-[#0a2a66] text-white">
          <img
            src="/assets/bg1.png"
            alt="AIMS campus"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="relative container-wide py-16 md:py-20">
            <p className="text-sm font-bold uppercase tracking-wide text-yellow-300">About AIMS</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold">
              Aditya Institute of Management Studies, Pune
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-blue-50 leading-relaxed">
              AIMS is a management institute in Narhe, Pune, guided by the Jadhavar Group's
              commitment to value-based education, professional discipline and student growth.
            </p>
          </div>
        </section>

        <section id="the-jadhavar" className="container-wide scroll-mt-40 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle
                eyebrow="1. The Jadhavar"
                title="A legacy built around education and social responsibility"
                text="The Jadhavar educational initiative works with the belief that learning should build strength, wisdom, intellect and character. AIMS carries this thought into management education by combining academic learning with discipline, mentoring and exposure to real business practice."
              />
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {["Values", "Discipline", "Opportunity"].map((item) => (
                  <div key={item} className="rounded-lg bg-blue-50 p-4 text-center font-bold text-[#0a2a66]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <img
              src="/assets/logo1.png"
              alt="Jadhavar Group"
              className="w-full max-h-96 rounded-lg border border-gray-200 object-contain p-6 shadow-sm"
            />
          </div>
        </section>

        <section id="vision-mission" className="bg-gray-50 scroll-mt-40 py-16">
          <div className="container-wide">
            <SectionTitle
              eyebrow="2. Vision Mission"
              title="Purpose-driven management education"
              text="The institute focuses on employability, ethical leadership and practical capability so students can grow into confident professionals."
            />
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <InfoCard title="Vision">
                To be a centre of excellence in management education that develops ethical,
                innovative and employable leaders with a strong sense of social responsibility.
              </InfoCard>
              <InfoCard title="Mission">
                To deliver industry-aligned learning through classroom teaching, internships,
                live projects, research orientation, mentoring and personality development.
              </InfoCard>
            </div>
          </div>
        </section>

        <section id="founder-president-chairman" className="container-wide scroll-mt-40 py-16">
          <SectionTitle
            eyebrow="3. Founder President and Chairman"
            title="Prin. Dr. Sudhakarrao Jadhavar"
            text="The founder leadership brings academic depth, institutional experience and a long-standing commitment to accessible, value-based education."
          />
          <div className="mt-10 grid lg:grid-cols-[340px,1fr] gap-8 items-stretch">
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
              <img
                src="/assets/owner.jpeg"
                alt="Prin. Dr. Sudhakarrao Jadhavar"
                className="mx-auto h-60 w-60 rounded-lg object-cover border border-gray-200"
              />
              <h3 className="mt-5 text-2xl font-bold text-gray-900">Prin. Dr. Sudhakarrao Jadhavar</h3>
              <p className="mt-1 text-sm font-semibold text-primary">Founder President & Chairman</p>
              <p className="mt-4 border-t pt-4 text-sm leading-relaxed text-gray-600">
                Degrees: M.Com, M.A., L.L.M., M.P.M., D.T.L., D.L.L.&L.W., G.D.C.&A., Ph.D.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <InfoCard title="Educational Leadership">
                Former Dean of Commerce at Savitribai Phule Pune University and an active
                contributor to academic administration, institutional governance and student
                development.
              </InfoCard>
              <InfoCard title="Message">
                AIMS follows the spirit of education for strength, wisdom and intellect by
                encouraging students to combine knowledge with humility, confidence and service.
              </InfoCard>
            </div>
          </div>
        </section>

        <section id="vice-president" className="bg-gray-50 scroll-mt-40 py-16">
          <div className="container-wide">
            <SectionTitle
              eyebrow="4. Vice President"
              title="Adv. Shardul Sudhakarrao Jadhavar"
              text="The vice president's guidance strengthens student-centric learning, industry readiness, career support and holistic campus development."
            />
            <div className="mt-10 grid lg:grid-cols-[340px,1fr] gap-8 items-stretch">
              <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
                <img
                  src="/assets/Shardul_jadhavar.jpeg"
                  alt="Adv. Shardul Sudhakarrao Jadhavar"
                  className="mx-auto h-60 w-60 rounded-lg object-cover border border-gray-200"
                />
                <h3 className="mt-5 text-2xl font-bold text-gray-900">Adv. Shardul S. Jadhavar</h3>
                <p className="mt-1 text-sm font-semibold text-primary">Vice President</p>
                <p className="mt-4 border-t pt-4 text-sm leading-relaxed text-gray-600">
                  Degrees: M.B.A., P.G.D.H.R.M., M.Com., D.H.R.&L., D.C.L., D.CP.L.,
                  APCL, CMED, D.LL&L.W., L.L.M.
                </p>
              </div>
              <InfoCard title="Student Development Focus">
                The institute emphasizes mentoring, counseling, NSS activities, mental health
                awareness, placements and career guidance so that students graduate with both
                professional skill and personal confidence.
              </InfoCard>
            </div>
          </div>
        </section>

        <section id="campus" className="container-wide scroll-mt-40 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle
                eyebrow="5. Campus"
                title="A focused management learning environment"
                text="The AIMS campus at Narhe, Pune supports classroom learning, practical training, guest sessions, cultural activity and placement preparation."
              />
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {campusFacilities.map((facility) => (
                  <div key={facility} className="rounded-lg border border-gray-200 bg-white p-4 text-sm font-semibold text-gray-700">
                    {facility}
                  </div>
                ))}
              </div>
            </div>
            <img
              src="/assets/52355.jpg"
              alt="AIMS campus building"
              className="h-96 w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </section>

        <section id="about-pune" className="bg-gray-50 scroll-mt-40 py-16">
          <div className="container-wide">
            <SectionTitle
              eyebrow="6. About Pune"
              title="Learning in one of India's strongest education and industry cities"
              text="Pune gives management students access to corporate offices, IT parks, manufacturing clusters, startups, cultural life and a large student community."
            />
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <InfoCard title="Education Hub">
                Pune is known for universities, professional colleges and a strong academic
                culture that supports ambitious students from across India.
              </InfoCard>
              <InfoCard title="Industry Access">
                The city connects students with opportunities in IT, banking, finance, retail,
                manufacturing, consulting and service sectors.
              </InfoCard>
              <InfoCard title="Student Life">
                A balanced city for learning, internships, cultural exposure, networking and
                career preparation.
              </InfoCard>
            </div>
          </div>
        </section>

        <section className="bg-[#0a2a66] text-white py-14">
          <div className="container-wide flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold">Explore admissions at AIMS</h2>
              <p className="mt-2 text-blue-100">Connect with the admissions team for MBA and MCA program guidance.</p>
            </div>
            <Link to="/contact" className="rounded-md bg-yellow-400 px-6 py-3 font-bold text-gray-900 hover:bg-yellow-300">
              Apply Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
