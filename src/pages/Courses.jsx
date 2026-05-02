import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  mbaDegreeCredits,
  mbaProgrammeDetails,
  mbaProgrammeIntro,
  mbaProgrammeStructure,
  mbaSpecializations,
  mbaSyllabus,
} from '../data/websiteContent';

export default function Courses() {
  return (
    <>
      <Helmet>
        <title>MBA/MCA Courses | AIMS Pune | Program Details & Specializations</title>
        <meta
          name="description"
          content="Explore AIMS MBA/MCA programs with AICTE approved learning, industry exposure and career-focused preparation."
        />
        <meta name="keywords" content="MBA courses, MCA courses, MBA/MCA specializations, course curriculum, AIMS MBA/MCA" />
        <meta name="author" content="AIMS Pune" />
        <meta property="og:title" content="MBA/MCA Courses | AIMS Pune" />
        <meta property="og:description" content="Discover AIMS MBA/MCA specializations and program details" />
        <link rel="canonical" href="https://adityainstitutemanagement.com" />
      </Helmet>

      <div className="bg-white">
        {/* â­ HERO SECTION */}
        <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 md:py-20 px-4">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">MBA/MCA Courses</h1>
                <p className="text-lg text-blue-100 max-w-2xl">
                  Comprehensive MBA and MCA programs with industry-focused learning designed for career excellence
                </p>
              </div>
              <a
                href="/pdf/mba_mca_br.pdf"
                download
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors whitespace-nowrap"
              >
                Download Prospectus
              </a>
            </div>
          </div>
        </section>

        {/* â­ QUICK STATS */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Program Duration', value: '2 Years', desc: 'Full-Time' },
                { label: 'Semesters', value: '4', desc: 'MBA Pattern' },
                { label: 'Specializations', value: '7', desc: 'Career Tracks' },
                { label: 'University', value: 'SPPU', desc: 'Affiliated' },
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:border-primary hover:shadow-lg transition">
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="font-semibold text-gray-900 text-sm">{stat.label}</p>
                  <p className="text-xs text-gray-600">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â­ PROGRAM OVERVIEW */}
        <section className="container-wide py-16 md:py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Program Overview</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/program1.jpg"
                alt="MBA and MCA Program"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-l-4 border-primary">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">About AIMS MBA/MCA</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {mbaProgrammeIntro}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {mbaProgrammeDetails}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-gray-900">Program Highlights:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">âœ“</span>
                    <span>AICTE Approved & NAAC Accredited</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">âœ“</span>
                    <span>Affiliated to Savitribai Phule Pune University</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">âœ“</span>
                    <span>7 MBA specialization options</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">âœ“</span>
                    <span>Industry Expert Faculty</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* â­ PROGRAM OBJECTIVES */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Program Objectives</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Competency Development',
                  desc: 'Provide necessary knowledge, skills, values, and attitude to succeed in management & administration sectors'
                },
                {
                  title: 'Latest Practices',
                  desc: 'Inculcate contemporary management theories and best industry practices'
                },
                {
                  title: 'Managerial Skills',
                  desc: 'Offer opportunities to develop practical managerial and leadership capabilities'
                },
                {
                  title: 'Values & Vision',
                  desc: 'Develop right values and vision to function effectively in corporate and global environment'
                },
              ].map((obj, index) => (
                <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-primary">{index + 1}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{obj.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{obj.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â­ DURATION & STRUCTURE */}
        <section className="container-wide py-16 md:py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Program Structure</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Duration */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary to-blue-700 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Course Duration</h3>
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-lg font-bold mb-1">Total Duration</p>
                    <p className="text-3xl font-bold">2 Years</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-lg font-bold mb-1">Semesters</p>
                    <p className="text-3xl font-bold">4 Semesters</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-lg font-bold mb-1">Mode</p>
                    <p className="text-3xl font-bold">Full-Time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Semester Breakdown */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Semester Breakdown</h3>
              {mbaSyllabus.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-primary hover:shadow-lg transition">
                  <h4 className="font-bold text-gray-900 mb-2">{item.semester}</h4>
                  <p className="text-sm text-gray-600">
                    {item.courses.map((course) => course[1]).join(', ')}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-primary">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MBA PROGRAMME STRUCTURE */}
        <section className="bg-white py-16 md:py-20 px-4">
          <div className="container-wide">
            <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">MBA Programme Structure as per NEP</h2>
                <p className="mt-3 max-w-3xl text-gray-600">
                  Semester-wise course type, credits and assessment structure for the MBA programme.
                </p>
              </div>
              <span className="rounded-md bg-yellow-100 px-4 py-2 text-sm font-bold text-gray-900">2024 Pattern</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="min-w-[920px] w-full text-sm">
                <thead className="bg-[#0a2a66] text-white">
                  <tr>
                    {['Type', 'Semester', 'Course Type', 'Courses', 'Credits', 'Total Credits', 'FA', 'SA', 'Total'].map((heading) => (
                      <th key={heading} className="px-4 py-3 text-left font-bold">{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {mbaProgrammeStructure.map((row, index) => (
                    <tr key={`${row[1]}-${row[2]}-${index}`} className={row[0] === 'Total' ? 'bg-yellow-50 font-bold text-gray-900' : 'hover:bg-gray-50'}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-3 text-gray-700">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {mbaDegreeCredits.map((row) => (
                <div key={row[0]} className="rounded-lg border border-blue-100 bg-blue-50 p-5">
                  <h3 className="font-bold text-gray-900">{row[0]}</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Courses: <span className="font-bold">{row[1]}</span> | Credits: <span className="font-bold">{row[2]}</span> | Total Marks: <span className="font-bold">{row[5]}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â­ SPECIALIZATIONS */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">MBA Specializations</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mbaSpecializations.map((name, index) => {
                const colors = [
                  'from-blue-600 to-blue-700',
                  'from-green-600 to-teal-700',
                  'from-purple-600 to-pink-700',
                  'from-orange-600 to-red-700',
                  'from-indigo-600 to-blue-700',
                  'from-yellow-600 to-orange-700',
                  'from-cyan-600 to-sky-700',
                ];

                return (
                <div key={name} className={`bg-gradient-to-br ${colors[index]} text-white rounded-xl p-8 hover:shadow-xl transition-transform hover:scale-105`}>
                  <h3 className="text-xl font-bold mb-3">{name}</h3>
                  <p className="text-sm leading-relaxed opacity-95">
                    Specialized MBA learning track aligned with current industry and career pathways.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block mt-4 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-semibold transition text-sm"
                  >
                    Apply Now â†’
                  </Link>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* â­ ADMISSION REQUIREMENTS */}
        <section className="container-wide py-16 md:py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Admission Requirements</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
                <h4 className="font-bold text-gray-900 mb-3">Academic Qualification</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Bachelor's degree in any discipline from a recognized university with minimum 50% aggregate (45% for SC/ST candidates)
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
                <h4 className="font-bold text-gray-900 mb-3">Entrance Test</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Valid score in CAT, MAT, XAT, CMAT, or AIMS Entrance Test (GMAT accepted for international candidates)
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
                <h4 className="font-bold text-gray-900 mb-3">Work Experience</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Minimum 2-3 years of professional experience preferred (not mandatory for fresh graduates)
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-l-4 border-primary">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">âœ“</span>
                    <span className="text-gray-700">Bachelor's degree certificate & mark sheets</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">âœ“</span>
                    <span className="text-gray-700">12th & 10th class certificates</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">âœ“</span>
                    <span className="text-gray-700">Entrance exam score card (CAT/MAT/XAT)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">âœ“</span>
                    <span className="text-gray-700">Passport size photographs (4x6 cm)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">âœ“</span>
                    <span className="text-gray-700">Valid ID proof (Aadhar/PAN/Driving License)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">âœ“</span>
                    <span className="text-gray-700">Work experience certificate (if applicable)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">âœ“</span>
                    <span className="text-gray-700">Category certificate (SC/ST/OBC if applicable)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* â­ FEES & FINANCIAL AID */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Fees & Financial Information</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Fee Structure Table */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-blue-700 text-white p-6">
                  <h3 className="text-xl font-bold">Fee Structure</h3>
                </div>
                <div className="p-8 text-center">
                  <p className="text-sm font-bold uppercase tracking-wide text-gray-500">MBA/MCA Fees</p>
                  <p className="mt-3 text-5xl font-extrabold text-primary">Rs. 79,200</p>
                  <p className="mt-3 text-sm text-gray-600">Contact the admissions office for payment and scholarship guidance.</p>
                </div>
              </div>

              {/* Financial Aid & Support */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Financial Assistance</h3>

                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
                  <h4 className="font-bold text-gray-900 mb-3">Merit Scholarships</h4>
                  <p className="text-gray-700 text-sm">
                    Merit-based scholarships up to 30% of tuition fees for high-performing students
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
                  <h4 className="font-bold text-gray-900 mb-3">Need-Based Financial Aid</h4>
                  <p className="text-gray-700 text-sm">
                    Flexible payment options and fee concessions for deserving students
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
                  <h4 className="font-bold text-gray-900 mb-3">Education Loans</h4>
                  <p className="text-gray-700 text-sm">
                    Assistance in securing education loans from partner banks at competitive rates
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
                  <h4 className="font-bold text-gray-900 mb-3">Category Scholarships</h4>
                  <p className="text-gray-700 text-sm">
                    Scholarships for SC/ST/OBC/Minority students as per government norms
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 text-center">
              <p className="text-gray-700 mb-4">
                Financial assistance and payment plans are available. Contact our admissions office for more details.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition"
              >
                Contact Admissions Office
              </Link>
            </div>
          </div>
        </section>

        {/* â­ CURRICULUM HIGHLIGHT */}
        <section className="container-wide py-16 md:py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Curriculum Highlights</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Core Courses',
                items: ['Management Fundamentals', 'Financial Accounting', 'Business Statistics', 'Organizational Behavior', 'Marketing Essentials']
              },
              {
                title: 'Advanced Courses',
                items: ['Strategic Management', 'International Business', 'Corporate Finance', 'Digital Marketing', 'Business Analytics']
              },
              {
                title: 'Experiential Learning',
                items: ['Industry Projects', 'Case Studies', 'Seminars & Workshops', 'Industry Internship', 'Capstone Project']
              },
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <span className="text-primary font-bold">â€¢</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* â­ CTA SECTION */}
        <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 md:py-20 px-4">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your MBA/MCA Journey?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join AIMS and transform into a business leader with global competence and industry readiness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 hover:text-gray-900 transition-colors"
              >
                Schedule a Counseling
              </Link>
            </div>
          </div>
        </section>

        {/* â­ QUICK LINKS */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="container-wide">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Quick Links</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Faculty', href: '/academics' },
                { label: 'Facilities', href: '/about/campus' },
                { label: 'Placements', href: '/placement' },
                { label: 'Admissions', href: '/contact' },
                { label: 'Apply Now', href: '/contact' },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:text-primary hover:border-primary transition text-sm font-semibold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
