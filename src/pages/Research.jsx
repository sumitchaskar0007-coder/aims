import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Research() {
  const focusAreas = [
    "Marketing strategy and consumer behaviour",
    "Human resource management and organisational development",
    "Finance, banking and investment awareness",
    "Entrepreneurship and startup ecosystem studies",
    "Operations, analytics and business decision-making",
    "Sustainability, ethics and social responsibility",
  ];

  const activities = [
    {
      title: "Faculty Research",
      text: "Faculty members encourage applied research, case-based learning and academic publication culture.",
    },
    {
      title: "Student Projects",
      text: "Students work on field projects, market studies, internships, presentations and problem-solving assignments.",
    },
    {
      title: "Seminars & Workshops",
      text: "Research orientation is supported through expert talks, paper presentations and industry interactions.",
    },
  ];

  const researchDocuments = [
    {
      title: "National Conference",
      text: "Access the national conference abstract book and report.",
      links: [
        { label: "Abstract Book", href: "/pdf/national_conference.pdf" },
        { label: "Report", href: "/pdf/national_conference_report.pdf" },
      ],
    },
    {
      title: "Faculty Research Paper",
      text: "View research papers by faculty members.",
      links: [{ label: "Open PDF", href: "/pdf/faculty_research_papers.pdf" }],
    },
    {
      title: "Student Research Paper",
      text: "View research papers submitted by students.",
      links: [{ label: "Open PDF", href: "/pdf/student_research_papers.pdf" }],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Research | AIMS Pune</title>
        <meta name="description" content="Research focus areas, student projects, seminars and innovation culture at AIMS Pune." />
      </Helmet>

      <div className="bg-white">
        <section className="bg-[#0a2a66] text-white py-16 md:py-20 px-4">
          <div className="container-wide">
            <p className="text-sm font-bold uppercase tracking-wide text-yellow-300">Research</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold">Research & Innovation</h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-100">
              AIMS promotes inquiry, analytical thinking, project work and industry-connected
              research as part of management learning.
            </p>
          </div>
        </section>

        <section className="container-wide py-16">
          <div className="grid lg:grid-cols-[1fr,420px] gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Research Focus Areas</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The research tab is designed as a home for faculty work, student projects,
                seminar updates, publications and academic collaboration information.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {focusAreas.map((area) => (
                  <div key={area} className="rounded-lg border border-gray-200 bg-white p-4 text-sm font-semibold text-gray-700 shadow-sm">
                    {area}
                  </div>
                ))}
              </div>
            </div>
            <img src="/assets/program1.jpg" alt="Research and academic activity" className="h-full min-h-80 rounded-lg object-cover shadow-lg" />
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-4">
          <div className="container-wide">
            <h2 className="text-3xl font-bold text-gray-900">Research Activities</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {activities.map((activity) => (
                <div key={activity.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900">{activity.title}</h3>
                  <p className="mt-3 text-gray-700 leading-relaxed">{activity.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-wide py-16">
          <h2 className="text-3xl font-bold text-gray-900">Research Documents</h2>
          <p className="mt-4 max-w-3xl text-gray-700 leading-relaxed">
            Browse national conference material, faculty research papers and student research papers.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {researchDocuments.map((document) => (
              <div key={document.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">{document.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{document.text}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {document.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md bg-[#0a2a66] px-4 py-2 text-sm font-bold text-white hover:bg-blue-800"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container-wide py-16">
          <div className="rounded-lg bg-[#0a2a66] p-8 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold">Share research and academic updates</h2>
              <p className="mt-2 text-blue-100">Use the contact page for collaborations, seminars and institutional enquiries.</p>
            </div>
            <Link to="/contact" className="rounded-md bg-yellow-400 px-6 py-3 font-bold text-gray-900 hover:bg-yellow-300">
              Contact AIMS
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
