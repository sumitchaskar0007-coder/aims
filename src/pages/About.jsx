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
  const jadhavarGroupParagraphs = [
    "Education at the Prin. Dr. Sudhakarrao Jadhavar Group of Educational Institutes is focused on bringing social, intellectual and quality education under one umbrella. From nursery to post-graduation across different disciplines, the group believes in translating educational aims into action with discipline, values and a commitment to human development.",
    "The group provides education across different disciplines including Arts, Commerce, Science, Nursing, D.Ed., B.Ed., Open University education and two-year Masters in Business Administration. This broad academic ecosystem supports learners at multiple stages of their educational journey.",
    "Within a short span, the brand name Jadhavar - The Symbol of Success has earned the trust of more than 18,000 students and parents, supported by 700+ employees. The group offers education across Arts, Commerce, Science, Nursing, D.Ed., B.Ed., Open University education and professional management education.",
    "The group is headed by Prin. Dr. Sudhakarrao Jadhavar, a visionary educationist and former Dean, Faculty of Commerce, Savitribai Phule Pune University. He has contributed to university academic bodies, served as a research guide at national and international levels, and has also been associated with the Maharashtra Nursing Council and Principal Forum of S.P.P.U.",
    "The group is co-headed by Adv. Shardulrao S. Jadhavar, a young and dynamic leader known for committed, disciplined and enthusiastic work in the social, cultural and educational fields. As President of Dr. Sudhakarrao Jadhavar Social and Educational Trust, he has supported activities for empowerment and upliftment of target groups in society, and has received recognitions including the Sardar Vallabhbhai Patel National Youth Award, New Delhi.",
    "Through its educational approach, the group builds students' collective ability to cope with a changing global, competitive and technology-driven era. Along with structured knowledge, dynamic development, best practices, ethics and values are nurtured through the learning process, supported by state-of-the-art facilities and discipline-specific resources.",
    "The group believes that seeking knowledge is a continuous and never-ending process. Value addition programmes are customized to suit student needs and equip them with skills demanded by the globalized corporate world.",
    "The journey that began in 2014 with a girls school has grown into 55 educational institutes, guided by a vision of accessible education, character building and preparation for a changing global and competitive era.",
  ];

  const jadhavarStats = [
    ["Since", "2014"],
    ["Students", "18,000+"],
    ["Employees", "700+"],
    ["Institutes", "55"],
  ];

  const secretaryMessageParagraphs = [
    "Dear Researchers, it is a matter of great pleasure and pride that the MBA and PGDM programs at Aditya Institute of Management - AIMS, Prin. Dr. Sudhakarrao Jadhavar Educational Campus, Manaji Nagar, Narhe, Pune, are recognized among the prestigious institutes in Pune city.",
    "I implore all members of the faculty to follow a path of ethically oriented and socially relevant education so that the institute can play a pivotal role in creating and disseminating knowledge, educating a highly skilled workforce for technological and intellectual leadership, and enhancing the competitiveness of society in the emerging knowledge economy.",
    "AIMS, with this goal in mind, will offer postgraduate courses as per the syllabus designed by Savitribai Phule Pune University. I am confident that AIMS will live up to the expectations of today's corporate world and help the nation and society fulfill the dream of becoming a superpower by creating empowered managers and entrepreneurs of high caliber.",
    "I wish heartiest congratulations to students, teacher-educators and members of staff. Wish you all the best.",
  ];

  const presidentMessageParagraphs = [
    "Dear Researchers, it is my pride, pleasure and privilege to welcome you to our renowned educational management institute. Efficient business administration has become a norm of today's competitive world and has touched and transformed our lives across society and industry.",
    "To fulfill the dream of making our country a superpower, we need quality managers and new entrepreneurs. Aditya Educational Foundation has recognized and addressed this need through AIMS by creating knowledgeable and empowered leaders for the corporate world.",
    "AIMS has a student-centric approach that will bring all-round development of students and empower them to face the challenges of a highly competitive world. Our aim is to harness every student's potential, enhance skills to perfection and build professional leaders with high academic aptitude through advanced teaching methods.",
    "The faculty at AIMS are meticulously chosen. They will not merely impart knowledge, but will also imbibe ambition in students and strive to extract the best in each student. AIMS will offer postgraduate courses as per the syllabus designed by Savitribai Phule Pune University.",
    "I am confident that AIMS will live up to the expectations of today's corporate world and help the nation and society fulfill the dream of becoming a superpower by creating empowered managers and entrepreneurs of high caliber. Wish you all the best.",
  ];

  const presidentVentures = [
    "Jadhavar Hotel and Developers Pvt. Ltd.",
    "Jadhavar Films",
    "Jadhavar Real Estate",
    "Shardul Sudhakarrao Jadhavar Associates",
    "Jadhavar Legal Firm",
    "Pracharya Dr. Sudhakarrao Jadhavar Sevakanachi Patsanstha",
  ];

  const aboutPuneParagraphs = [
    "Pune is widely known as one of India's most respected education cities, and this academic environment gives students of AIMS and the Jadhavar Group a strong advantage. The city has a long tradition of learning, universities, professional colleges, research culture and student-friendly surroundings, making it a natural destination for young learners from across Maharashtra and India.",
    "For management and computer application students, Pune offers meaningful exposure beyond the classroom. The city is connected with IT parks, manufacturing companies, banking and finance organizations, consulting firms, retail businesses, startups and service-sector opportunities. This gives AIMS students access to internships, industry visits, guest sessions, live projects and practical understanding of how modern organizations work.",
    "The Jadhavar Group's educational campus at Narhe benefits from Pune's growing academic and industrial ecosystem. Students learn in a city where education, entrepreneurship and employment opportunities move together, helping them connect classroom knowledge with real business challenges. This environment supports the institute's focus on employability, professional discipline and value-based development.",
    "Pune is also a culturally rich and socially active city. Students experience a balanced lifestyle through academic events, cultural programs, seminars, workshops, sports, social initiatives and networking opportunities. This helps learners build communication, confidence, teamwork and leadership qualities that are important for professional success.",
    "The city's startup and innovation culture is especially useful for students who wish to become entrepreneurs or business leaders. Exposure to new ideas, technology-driven businesses and evolving market practices helps students understand competition, customer needs, digital transformation and the importance of continuous learning.",
    "For the Jadhavar Group of Institutes, Pune is more than a location; it is an educational advantage. The city supports the group's mission of creating capable, ethical and socially responsible students who can contribute to industry, society and the nation with confidence.",
  ];

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
                title="Jadhavar Group of Institutes: The Symbol of Success"
                text="Since 2014, the Jadhavar Group of Institutes has worked to provide value-based, socially conscious and quality education across multiple academic disciplines."
              />
              <div className="mt-5 space-y-4 text-gray-700 leading-relaxed">
                {jadhavarGroupParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {["Values", "Discipline", "Opportunity"].map((item) => (
                  <div key={item} className="rounded-lg bg-blue-50 p-4 text-center font-bold text-[#0a2a66]">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {jadhavarStats.map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm">
                    <p className="text-2xl font-extrabold text-[#0a2a66]">{value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wide text-gray-500">{label}</p>
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
                className="mx-auto h-72 w-full max-w-64 rounded-lg border border-gray-200 bg-gray-50 object-contain p-3"
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
                <div className="space-y-4">
                  {secretaryMessageParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900">Hon. Prin. Dr. Sudhakarrao Jadhavar</p>
                    <p className="text-sm">M.Com., M.A., LL.M., D.T.L., M.P.M., D.L.L. & L.W., G.D.C & A., Ph.D</p>
                    <p className="mt-2 text-sm">President: Akhil Bhartiya Principal Federation</p>
                    <p className="text-sm">Ex. Management Council Member: Savitribai Phule Pune University, Pune</p>
                    <p className="text-sm">General Secretary: Maharashtra State Principal Federation</p>
                    <p className="text-sm">Secretary General: Principal Forum, Savitribai Phule Pune University, Pune</p>
                  </div>
                </div>
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
                  className="mx-auto h-72 w-full max-w-64 rounded-lg border border-gray-200 bg-gray-50 object-contain p-3"
                />
                <h3 className="mt-5 text-2xl font-bold text-gray-900">Adv. Shardul S. Jadhavar</h3>
                <p className="mt-1 text-sm font-semibold text-primary">Vice President</p>
                <p className="mt-4 border-t pt-4 text-sm leading-relaxed text-gray-600">
                  Degrees: M.B.A., P.G.D.H.R.M., M.Com., D.H.R.&L., D.C.L., D.CP.L.,
                  APCL, CMED, D.LL&L.W., L.L.M.
                </p>
              </div>
              <InfoCard title="Student Development Focus">
                <div className="space-y-4">
                  {presidentMessageParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900">Hon. Adv. Shardul Sudhakarrao Jadhavar</p>
                    <p className="text-sm">M.B.A., P.G.D.H.R.M., B.Com., D.H.R.L., D.C.L., D.C.P.L., A.C.P.L., CMED, D.L.L. & L.W., LL.M.</p>
                    <p className="mt-2 text-sm">Vice President: Jadhavar Group of Institutes</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Associated Ventures</p>
                    <div className="mt-3 grid sm:grid-cols-2 gap-2">
                      {presidentVentures.map((venture) => (
                        <p key={venture} className="rounded-md bg-blue-50 px-3 py-2 text-sm font-semibold text-[#0a2a66]">
                          {venture}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
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
              title="Pune: An education and industry advantage for Jadhavar students"
              text="Pune gives AIMS and Jadhavar Group students access to academic culture, industry exposure, internships, entrepreneurship and a vibrant student community."
            />
            <div className="mt-8 grid lg:grid-cols-[1fr,360px] gap-8 items-start">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {aboutPuneParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-[#0a2a66] p-6 text-white shadow-sm">
                <h3 className="text-2xl font-bold">Pune Advantage</h3>
                <div className="mt-5 space-y-3">
                  {["Education hub", "IT and industry", "Startup ecosystem", "Student-friendly city"].map((item) => (
                    <p key={item} className="rounded-md bg-white/10 px-4 py-3 font-semibold text-blue-50">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
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
