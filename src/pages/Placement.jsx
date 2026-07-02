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

const recruiterLogos = Array.from({ length: 93 }, (_, index) => index + 1)
  .filter((number) => number !== 17)
  .map((number) => {
    const extension = number >= 89 ? "jpg" : "png";
    return `/assets/placement/recruiter-${String(number).padStart(2, "0")}.${extension}`;
  });

const placedStudents = [
  ["Akshada Kambale", "Axelyne LLP", "Business Analyst"],
  ["Alok Borlikar", "Bharatam Ventures Limited", "Credit Manager"],
  ["Kamini Mundake", "Gallagher service centre", "Analyst"],
  ["Mrunal Sutane", "Credence Indo mechanics", "HR & Admin Consultant"],
  ["Rahul kokate", "Unicorn info solutions", "HR Executive"],
  ["Vaishnavi Mali", "Iconstruct pvt Ltd", "Senior HR Executive"],
  ["Abhinav Helaskar", "Bajaj Finserv", "Sales Manager"],
  ["Abhishek Anand", "Agumentik", "MT- Sales"],
  ["Abhishek Bhattacharya", "Policy Bazaar", "Relationship Manager"],
  ["Ajay Eknath Shelke", "Motilal Oswal", "Relationship Manager"],
  ["Akash Balasaheb Gubre", "Ekart logistics", "Operation Executive"],
  ["Ameya Kulkarni", "Pune E stock broking", "Jr. Research Analyst"],
  ["Amisha Vishwakarma", "Lenskart", "Asst Store Manager"],
  ["Amol Jadhav", "Tata STRIVE", "Project Manager BMS, West- Maharashtra"],
  ["Ananya Rahul Mishra", "Mantra Prop", "Management Trainee - Sales"],
  ["Ashlekha jamwal", "Intelipaat", "Business Development Executive"],
  ["CHITRA VIJAY WASEKAR", "Johnson Control", "Analyst"],
  ["Dipak Ashokrao Manaspure", "Arque Technologies", "Territory Manager"],
  ["Gnanamercy Selvaraj", "Epsilon Money", "Asst Manager - HR"],
  ["Harsh Kamlesh Gupta", "Denave (Saint Gobain)", "Territory Sales Incharge"],
  ["Harshali Pandharinath Pawar", "BPW Trailer Systems Pvt. Ltd", "HR Executive"],
  ["Hemant Pravin Bind", "IT Nova", "Business Development Intern"],
  ["Janvi G. Gaddam", "struct guard", "Finance & Accounting Executive"],
  ["Kanchan Vijay Dhangar", "Xanadu", "Management Trainee"],
  ["Lobhas Kokate", "Kiwi General Insurance", "Business development trainee - Partners"],
  ["Michelle Anil George", "ZS Associate", "Finance Associate"],
  ["Mr. Kartikesh Dhonde", "Varun Beverages Ltd.", "Customer Executive"],
  ["Nandini Sharma", "State Street Corporation", "Investment Banking - Apprenticeship Program"],
  ["Omkar Vijay Patole", "Autobahn Terrago / Magicpin", "Business Development Associate"],
  ["Preksha Prakash Ramteke", "Policy Bazaar", "Talent Acquisition Executive"],
  ["Purva Mahendra Shriramwar", "ANZ Bank", "Triage Officer"],
  ["Rahul Lingappa Chavan", "PNG", "Data Analyst"],
  ["Ravindra Sonvane", "Federal Bank Ltd.", "Assistant Officer"],
  ["Sajal Kurariya", "Citi Bank", "Investment Banking - Apprenticeship Program"],
  ["Saniya Pradip Saste", "Atlas Copco (Edwards India Pvt Ltd)", "HR Generalist"],
  ["Shweta Krishna Shukla", "ABFRL", "Management Trainee"],
  ["Sudarshan kapse", "Truzon Solar", "Territory Sales Manager"],
  ["Tejal Gajanan Patil", "Phonepe-Pincode", "Growth Executive"],
  ["Tushar Dattatray Ingle", "Intelipaat", "Business Development Executive"],
  ["Vaishnavi Patil", "Intuitive.AI", "Talent Acquisition specialist"],
  ["Vijaykumar B Karimungi", "ACC Cement", "Inside Sales Representative"],
  ["Yatish Sahu", "SSIPCL", "FMCG Sales Executive"],
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

        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="container-wide">
            <div className="mb-8 text-center">
              <p className="text-sm font-bold uppercase tracking-wide text-primary">Our Recruiters</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Companies Hiring AIMS Talent</h2>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white py-6 shadow-sm">
              <div className="placement-logo-track">
                {[...recruiterLogos, ...recruiterLogos].map((logo, index) => (
                  <div key={`${logo}-${index}`} className="placement-logo-card">
                    <img src={logo} alt="AIMS recruiter logo" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-wide py-16 md:py-20 px-4">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-primary">Proud Alumni</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Placed Students</h2>
          </div>

          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-left">
                <thead className="bg-[#0a2a66] text-white">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-sm font-bold uppercase tracking-wide">Student Name</th>
                    <th scope="col" className="px-5 py-4 text-sm font-bold uppercase tracking-wide">Company</th>
                    <th scope="col" className="px-5 py-4 text-sm font-bold uppercase tracking-wide">Designation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {placedStudents.map(([name, company, role]) => (
                    <tr key={`${name}-${company}`} className="transition hover:bg-blue-50/60">
                      <td className="px-5 py-4 text-sm font-semibold text-gray-900">{name}</td>
                      <td className="px-5 py-4 text-sm font-medium text-[#0a2a66]">{company}</td>
                      <td className="px-5 py-4 text-sm text-gray-700">{role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

        <style>{`
          .placement-logo-track {
            display: flex;
            width: max-content;
            gap: 22px;
            animation: placement-scroll 95s linear infinite;
          }

          .placement-logo-track:hover {
            animation-play-state: paused;
          }

          .placement-logo-card {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 230px;
            height: 130px;
            flex: 0 0 auto;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
            background: #ffffff;
            padding: 18px;
          }

          .placement-logo-card img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }

          @media (max-width: 640px) {
            .placement-logo-card {
              width: 190px;
              height: 112px;
            }
          }

          @keyframes placement-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </>
  );
}
