import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Naac() {
  const criteria = [
    "Curricular Aspects",
    "Teaching, Learning and Evaluation",
    "Research, Innovations and Extension",
    "Infrastructure and Learning Resources",
    "Student Support and Progression",
    "Governance, Leadership and Management",
    "Institutional Values and Best Practices",
  ];

  const documents = [
    { title: "AICTE Letter of Approval", url: "/pdf/LOA.pdf" },
    { title: "Quality Assurance Documents", url: "/naac" },
    { title: "Institutional Best Practices", url: "/naac" },
  ];

  return (
    <>
      <Helmet>
        <title>Accreditation-NAAC | AIMS Pune</title>
        <meta
          name="description"
          content="NAAC accreditation information, quality assurance framework and institutional quality initiatives at AIMS Pune."
        />
      </Helmet>

      <div className="bg-white">
        <section className="bg-[#0a2a66] text-white py-16 md:py-20 px-4">
          <div className="container-wide">
            <p className="text-sm font-bold uppercase tracking-wide text-yellow-300">Accreditation-NAAC</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold">NAAC Accredited Institution</h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-100">
              AIMS is committed to quality assurance, continuous improvement and outcome-based
              management education.
            </p>
          </div>
        </section>

        <section className="container-wide py-16">
          <div className="grid lg:grid-cols-[360px,1fr] gap-10 items-center">
            <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
              <img src="/assets/nac.png" alt="NAAC accreditation" className="mx-auto h-40 w-40 object-contain" />
              <p className="mt-6 text-sm font-bold uppercase tracking-wide text-green-700">Status</p>
              <h2 className="mt-2 text-4xl font-black text-green-700">Grade B</h2>
              <p className="mt-2 text-gray-700">National Assessment and Accreditation Council</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Quality Assurance at AIMS</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                NAAC accreditation reflects institutional focus on academic planning, teaching
                quality, student progression, governance, infrastructure and best practices.
                The institute works toward a transparent, student-focused and continuously
                improving academic environment.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {["Academic Quality", "Student Support", "Continuous Improvement"].map((item) => (
                  <div key={item} className="rounded-lg bg-blue-50 p-4 text-center text-sm font-bold text-[#0a2a66]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-4">
          <div className="container-wide">
            <h2 className="text-3xl font-bold text-gray-900">NAAC Criteria</h2>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {criteria.map((item, index) => (
                <div key={item} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="text-sm font-bold text-primary">Criterion {index + 1}</p>
                  <h3 className="mt-2 text-lg font-bold text-gray-900">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-wide py-16">
          <h2 className="text-3xl font-bold text-gray-900">Accreditation Documents</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <a
                key={doc.title}
                href={doc.url}
                target={doc.url.startsWith("/pdf") ? "_blank" : undefined}
                rel={doc.url.startsWith("/pdf") ? "noreferrer" : undefined}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:border-primary"
              >
                <h3 className="text-xl font-bold text-gray-900">{doc.title}</h3>
                <p className="mt-3 text-sm text-gray-600">View document or section</p>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-[#0a2a66] text-white py-14">
          <div className="container-wide flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold">Questions about accreditation?</h2>
              <p className="mt-2 text-blue-100">Contact AIMS for quality assurance and institutional information.</p>
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
