import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const placementContent = [
  {
    title: "Placement Support",
    description:
      "AIMS supports students with campus placement guidance, recruiter interaction and career opportunity updates.",
  },
  {
    title: "Training & Development",
    description:
      "Students receive training for resumes, aptitude tests, group discussions, interviews and professional communication.",
  },
  {
    title: "Industry Connect",
    description:
      "The institute encourages corporate sessions, guest lectures, internships and industry-oriented learning exposure.",
  },
  {
    title: "Career Guidance",
    description:
      "Faculty and placement mentors guide students to choose suitable roles based on their specialization, skills and goals.",
  },
];

export default function Placement() {
  return (
    <>
      <Helmet>
        <title>Placement | AIMS Pune</title>
        <meta
          name="description"
          content="Placement support, training, industry connect and career guidance at AIMS Pune."
        />
      </Helmet>

      <div className="bg-white">
        <section className="bg-[#0a2a66] text-white py-16 md:py-20 px-4">
          <div className="container-wide text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-yellow-300">Placement</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold">Career Development & Placement</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-blue-100">
              AIMS helps students prepare for professional opportunities through training,
              mentoring and industry interaction.
            </p>
          </div>
        </section>

        <section className="container-wide py-16 md:py-20 px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {placementContent.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
                <p className="mt-3 leading-relaxed text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-wide pb-16 md:pb-20 px-4">
          <div className="rounded-lg bg-gray-50 p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Connect With Placement Cell</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-700">
              For placement related details, students and recruiters can contact the college office.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-md bg-[#0a2a66] px-7 py-3 font-bold text-white hover:bg-blue-800"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
