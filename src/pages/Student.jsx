import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Student() {
  const services = [
    {
      title: "Mentoring & Counseling",
      text: "Faculty mentors guide students for academics, confidence building, career clarity and personal development.",
    },
    {
      title: "Skill Development",
      text: "Regular sessions support communication, aptitude, presentation, group discussion and interview readiness.",
    },
    {
      title: "Student Activities",
      text: "Cultural programs, sports, seminars, NSS activities and management events help students build leadership.",
    },
    {
      title: "Career Support",
      text: "Students receive resume guidance, internship support, placement preparation and corporate exposure.",
    },
    {
      title: "Library & Digital Learning",
      text: "Learning resources include books, journals, case discussions, digital content and classroom assignments.",
    },
    {
      title: "Grievance & Support",
      text: "Student concerns are handled through institutional support systems and a transparent grievance process.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Student Life | AIMS Pune</title>
        <meta name="description" content="Student support, activities, mentoring, facilities and career development at AIMS Pune." />
      </Helmet>

      <div className="bg-white">
        <section className="bg-[#0a2a66] text-white py-16 md:py-20 px-4">
          <div className="container-wide">
            <p className="text-sm font-bold uppercase tracking-wide text-yellow-300">Student</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold">Student Life & Support</h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-100">
              AIMS supports students through mentoring, professional skill development,
              academic guidance and campus activities.
            </p>
          </div>
        </section>

        <section className="container-wide py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <img src="/assets/cultural-fest.png" alt="Student cultural activity" className="h-96 w-full rounded-lg object-cover shadow-lg" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">A practical and active MBA/MCA journey</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Student development at AIMS is designed around classroom learning, practical
                exposure, activity-based participation and career preparation. The aim is to
                help students become confident, disciplined and workplace-ready.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Mentoring", "Events", "Sports", "Placements", "NSS"].map((item) => (
                  <span key={item} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-[#0a2a66]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-4">
          <div className="container-wide">
            <h2 className="text-3xl font-bold text-gray-900">Student Services</h2>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="mt-3 text-gray-700 leading-relaxed">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-wide py-16">
          <div className="rounded-lg bg-[#0a2a66] p-8 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold">Need student support information?</h2>
              <p className="mt-2 text-blue-100">Contact the institute for admissions, student services and campus visits.</p>
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
