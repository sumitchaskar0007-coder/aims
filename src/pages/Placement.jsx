import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const placementData = [
  { name: "Shweta Krishna Shukla", spec: "HR", company: "ABFRL", role: "Management Trainee", ctc: "10 LPA", location: "Delhi NCR" },
  { name: "Ashlekha Jamwal", spec: "Marketing", company: "Intelipaat", role: "Business Development Executive", ctc: "9 LPA", location: "Bengaluru" },
  { name: "Omkar Vijay Patole", spec: "Marketing", company: "Autobahn Terrago / Magicpin", role: "Business Development Associate", ctc: "9 LPA", location: "Mumbai" },
  { name: "Tushar Dattatray Ingle", spec: "Marketing", company: "Intelipaat", role: "Business Development Executive", ctc: "9 LPA", location: "Bengaluru" },
  { name: "Hemant Pravin Bind", spec: "Marketing", company: "IT Nova", role: "Business Development Intern", ctc: "8.2 LPA", location: "Remote" },
  { name: "Kanchan Vijay Dhangar", spec: "Marketing", company: "Xanadu", role: "Management Trainee", ctc: "7.5 LPA", location: "PAN India" },
  { name: "Abhishek Anand", spec: "Marketing", company: "Agumentik", role: "MT - Sales", ctc: "7 LPA", location: "India" },
  { name: "Ananya Rahul Mishra", spec: "HR", company: "Mantra Prop", role: "Management Trainee - Sales", ctc: "7 LPA", location: "Pune" },
  { name: "Purva Mahendra Shriramwar", spec: "Finance", company: "ANZ Bank", role: "Triage Officer", ctc: "6.5 LPA", location: "Bengaluru" },
  { name: "Vijaykumar B Karimungi", spec: "Marketing", company: "ACC Cement", role: "Inside Sales Representative", ctc: "6.5 LPA", location: "Bengaluru" },
  { name: "Abhishek Bhattacharya", spec: "Marketing", company: "Policy Bazaar", role: "Relationship Manager", ctc: "6.4 LPA", location: "Pune" },
  { name: "Akash Bhagwan Wanve", spec: "Marketing", company: "Policy Bazaar", role: "Relationship Manager", ctc: "6.4 LPA", location: "Pune" },
  { name: "Michelle Anil George", spec: "Finance", company: "ZS Associate", role: "Finance Associate", ctc: "6 LPA", location: "Pune" },
  { name: "Tejal Gajanan Patil", spec: "Marketing", company: "PhonePe Pincode", role: "Growth Executive", ctc: "6 LPA", location: "Pune" },
  { name: "Ajay Pravin Gujar", spec: "Marketing", company: "Suntek Energy Systems", role: "Territory Sales Executive", ctc: "5.85 LPA", location: "Pune" },
  { name: "Akhilesh Pratyush Tailor", spec: "Finance", company: "Envision", role: "Mortgage Analyst", ctc: "5.5 LPA", location: "India" },
  { name: "Amisha Vishwakarma", spec: "Marketing", company: "Lenskart / Intelipaat", role: "Assistant Store Manager", ctc: "5.5 LPA", location: "India" },
  { name: "Saloni Kishor Kothari", spec: "Finance", company: "Envision", role: "Mortgage Analyst", ctc: "5.5 LPA", location: "Ahmedabad" },
  { name: "Taha Hatim Chayyar", spec: "Finance", company: "Anand Rathi", role: "Financial Analyst", ctc: "5.5 LPA", location: "Pune" },
  { name: "Vansh Ketankumar Lakdawala", spec: "Finance", company: "Envision", role: "Mortgage Analyst", ctc: "5.5 LPA", location: "Ahmedabad" },
  { name: "Harsh Rajnarayan Yadav", spec: "Finance", company: "Joyalukkas", role: "Management Trainee - Finance", ctc: "5 LPA", location: "Bengaluru" },
  { name: "Harshit Shrimali", spec: "Finance", company: "Joyalukkas", role: "Management Trainee - Finance", ctc: "5 LPA", location: "Noida" },
  { name: "Nayan Bhaskar Chaudhari", spec: "Marketing", company: "Mehta Hi Tech", role: "Sales & Marketing Executive", ctc: "5 LPA", location: "Mumbai" },
  { name: "Pradumanya Hariram Kapse", spec: "Marketing", company: "Stanza Living", role: "Junior Sales Associate", ctc: "5 LPA", location: "Pune" },
  { name: "Rohan Ravindra Jaiswal", spec: "Marketing", company: "Sonkan / Magicpin", role: "Sales Officer", ctc: "5 LPA", location: "Mumbai" },
];

const recruiters = [
  "ABFRL",
  "Intelipaat",
  "Magicpin",
  "ANZ",
  "ACC",
  "Policy Bazaar",
  "ZS",
  "PhonePe",
  "Envision",
  "Joyalukkas",
  "Anand Rathi",
  "Stanza Living",
];

const initials = (name) =>
  name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

export default function Placement() {
  const stats = [
    { label: "Students Placed", value: `${placementData.length}+`, desc: "documented outcomes" },
    { label: "Highest CTC", value: "10 LPA", desc: "ABFRL" },
    { label: "Average CTC", value: "6.5 LPA", desc: "strong MBA/MCA outcome" },
    { label: "Recruiters", value: "12+", desc: "across sectors" },
  ];

  return (
    <>
      <Helmet>
        <title>Placement Cell | AIMS MBA/MCA Pune</title>
        <meta
          name="description"
          content="AIMS placement information with recruiter logo slides, placement training, student details, companies, roles and CTC."
        />
      </Helmet>

      <div className="bg-white">
        <section className="bg-[#0a2a66] text-white py-16 md:py-20 px-4">
          <div className="container-wide">
            <p className="text-sm font-bold uppercase tracking-wide text-yellow-300">Placement</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold">Career Development & Placement Cell</h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-100">
              Training, mentoring, recruiter interaction and placement support for MBA/MCA students.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4">
          <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 font-semibold text-gray-900">{stat.label}</p>
                <p className="text-xs text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-wide py-16">
          <div className="grid lg:grid-cols-[1fr,420px] gap-10 items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-primary">Recruiter Logo Slides</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">Companies connected with student placements</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The placement cell works with recruiters for internships, campus interviews,
                skill workshops and role-specific preparation. The slide below highlights major
                companies where students have received opportunities.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-gray-900">Placement Training Includes</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>Resume building and LinkedIn profile guidance</li>
                <li>Aptitude, group discussion and interview practice</li>
                <li>Corporate guest lectures and role awareness sessions</li>
                <li>Internship guidance and placement readiness tracking</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-lg border border-gray-200 bg-white py-6 shadow-sm">
            <div className="placement-marquee flex gap-5">
              {[...recruiters, ...recruiters].map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="flex h-24 min-w-48 flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#0a2a66] text-sm font-black text-white">
                    {initials(company)}
                  </div>
                  <p className="mt-2 text-center text-sm font-bold text-gray-800">{company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-4">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-primary">Placed Students</p>
                <h2 className="mt-2 text-3xl font-bold text-gray-900">Who placed where</h2>
              </div>
              <p className="max-w-2xl text-sm text-gray-600">
                Details include specialization, company, designation, package and location.
              </p>
            </div>

            <div className="mt-8 overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
              <table className="w-full min-w-[900px] border-collapse text-sm">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Student</th>
                    <th className="px-4 py-3 text-left">Specialization</th>
                    <th className="px-4 py-3 text-left">Company</th>
                    <th className="px-4 py-3 text-left">Designation</th>
                    <th className="px-4 py-3 text-left">Location</th>
                    <th className="px-4 py-3 text-right">CTC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {placementData.map((student) => (
                    <tr key={`${student.name}-${student.company}`} className="hover:bg-blue-50">
                      <td className="px-4 py-3 font-bold text-gray-900">{student.name}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                          {student.spec}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-700">{student.company}</td>
                      <td className="px-4 py-3 text-gray-700">{student.role}</td>
                      <td className="px-4 py-3 text-gray-700">{student.location}</td>
                      <td className="px-4 py-3 text-right font-bold text-green-700">{student.ctc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="container-wide py-16">
          <div className="rounded-lg bg-[#0a2a66] p-8 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold">Prepare for your career with AIMS</h2>
              <p className="mt-2 text-blue-100">Connect with admissions to learn about MBA/MCA placements and training.</p>
            </div>
            <Link to="/contact" className="rounded-md bg-yellow-400 px-6 py-3 font-bold text-gray-900 hover:bg-yellow-300">
              Contact Placement Cell
            </Link>
          </div>
        </section>

        <style>{`
          .placement-marquee {
            width: max-content;
            animation: placementSlide 28s linear infinite;
          }

          @keyframes placementSlide {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </>
  );
}
