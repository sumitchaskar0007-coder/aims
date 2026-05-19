import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  mbaDegreeCredits,
  mbaProgrammeDetails,
  mbaProgrammeIntro,
  mbaProgrammeStructure,
  mbaSpecializations,
  mcaSpecializations,
  mbaSyllabus,
} from '../data/websiteContent';

const mbaSyllabusUrl =
  'http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/FINAL%20MBA_Syllabus_2024_Pattern_NEP_2020_27.03.2025_29032025.pdf';

const mcaCourseStructure = [
  { semester: 'Semester I', credits: 26, ue: 300, ie: 300 },
  { semester: 'Semester II', credits: 26, ue: 300, ie: 300 },
  { semester: 'Semester III', credits: 25, ue: 250, ie: 300 },
  { semester: 'Semester IV', credits: 18, ue: 300, ie: 250 },
];

const mbaCourseStructureSummary = [
  { semester: 'Semester I', credits: 26, ue: 400, ie: 400 },
  { semester: 'Semester II', credits: 26, ue: 400, ie: 400 },
  { semester: 'Semester III', credits: 25, ue: 400, ie: 400 },
  { semester: 'Semester IV', credits: 18, ue: 400, ie: 400 },
];

const mcaIntakeInformation = {
  programme: 'Master of Computer Application (MCA)',
  academicYear: '2025 - 26',
  approvedIntake: 120,
  note: 'Intake is subject to revision as per AICTE, DTE Maharashtra, and SPPU guidelines.',
};

const mcaCareerOpportunities = [
  'Software Developer / Software Engineer',
  'Web & Full Stack Developer',
  'Database Administrator',
  'Network & System Administrator',
  'Data Analyst / Data Scientist',
  'Project Manager & IT Consultant',
  'Marketing Manager',
  'Financial Analyst',
  'HR Manager',
  'Business Analyst',
  'Operations Manager',
  'Entrepreneur',
];

const mcaProgramSections = [
  {
    title: 'Curriculum & Structure',
    desc: 'The MCA program follows a semester pattern consisting of four semesters, combining core computer science subjects, electives, practical labs, projects, and industry-oriented learning.',
  },
  {
    title: 'Teaching-Learning Methodology',
    desc: 'Learning is delivered through lectures, hands-on lab sessions, case studies, live projects, seminars, workshops, and technology-enabled teaching to strengthen conceptual and practical knowledge.',
  },
  {
    title: 'Assessment & Evaluation',
    desc: 'Students are evaluated through internal assessments, end-semester university examinations, practical evaluations, mini projects, and final-year internship/project work.',
  },
  {
    title: 'Practical & Project-Based Learning',
    desc: 'Strong emphasis on programming labs, mini projects, research projects, and a full-semester internship ensures real-world exposure and industry readiness.',
  },
  {
    title: 'Industry Exposure & Internships',
    desc: 'Final semester internship (OJT/FP) provides hands-on experience in software companies, startups, banks, IT consultancies, and corporate organizations.',
  },
  {
    title: 'Research & Innovation',
    desc: 'Students are encouraged to undertake research projects, publish papers, and participate in innovation, entrepreneurship development, and technical competitions.',
  },
  {
    title: 'Global & Emerging Technologies',
    desc: 'Electives in Cloud Computing, AI & ML, Cyber Security, Data Science, MERN Stack, ERP, and E-Commerce prepare students for global IT demands.',
  },
];

export default function Courses() {
  const [activeProgram, setActiveProgram] = useState('MBA');
  const isMca = activeProgram === 'MCA';
  const programSpecializations = isMca ? mcaSpecializations : mbaSpecializations;
  const programTotalCredits = isMca ? '95' : '104';
  const programTotalMarks = isMca ? '2300' : '3200';
  const programIntro = isMca
    ? 'The Master of Computer Application (MCA/MBA) is a two-year full-time program approved by AICTE, recognized by Government of Maharashtra (DTE) and affiliated to Savitribai Phule Pune University (SPPU).'
    : mbaProgrammeIntro;
  const programDetails = isMca
    ? 'The MCA/MBA program aims to provide a strong foundation in computer science, software development, and emerging technologies. The curriculum blends theory, practical training, curricular and co-curricular activities to develop skilled IT professionals and responsible technocrats.'
    : mbaProgrammeDetails;
  const programObjectives = isMca
    ? [
        {
          title: 'Computer Science Foundation',
          desc: 'Build strong foundations in computer science and programming.'
        },
        {
          title: 'IT Career Preparation',
          desc: 'Prepare students for IT roles such as Software Developer, Data Scientist and System Analyst.'
        },
        {
          title: 'Leadership & Communication',
          desc: 'Develop leadership, communication, and management skills.'
        },
        {
          title: 'Innovation & Lifelong Learning',
          desc: 'Encourage innovation, entrepreneurship, and lifelong learning.'
        },
        {
          title: 'Professional Competence',
          desc: 'Provide industry-ready technical and professional competence.'
        },
      ]
    : [
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
      ];

  return (
    <>
      <Helmet>
        <title>MBA/MCA Programs | AIMS Pune | Program Details & Specializations</title>
        <meta
          name="description"
          content="Explore AIMS MBA/MCA programs with AICTE approved learning, industry exposure and career-focused preparation."
        />
        <meta name="keywords" content="MBA programs, MCA programs, MBA/MCA specializations, program curriculum, AIMS MBA/MCA" />
        <meta name="author" content="AIMS Pune" />
        <meta property="og:title" content="MBA/MCA Programs | AIMS Pune" />
        <meta property="og:description" content="Discover AIMS MBA/MCA specializations and program details" />
        <link rel="canonical" href="https://adityainstitutemanagement.com" />
      </Helmet>

      <div className="bg-white">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 md:py-20 px-4">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">MBA/MCA Programs</h1>
                <p className="text-lg text-blue-100 max-w-2xl">
                  Comprehensive MBA and MCA programs with industry-focused learning designed for career excellence
                </p>
              </div>
              <a
                href="/pdf/prospectus.pdf"
                download
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors whitespace-nowrap"
              >
                Download Prospectus
              </a>
            </div>
          </div>
        </section>

        {/* QUICK STATS */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="container-wide">
            <div className="mb-8 flex justify-center">
              <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
                {['MBA', 'MCA'].map((program) => (
                  <button
                    key={program}
                    type="button"
                    onClick={() => setActiveProgram(program)}
                    className={`min-w-28 rounded-md px-6 py-3 text-base font-extrabold transition ${
                      activeProgram === program
                        ? 'bg-[#0a2a66] text-white'
                        : 'text-gray-700 hover:bg-yellow-100 hover:text-[#0a2a66]'
                    }`}
                  >
                    {program}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Program Duration', value: '2 Years', desc: 'Full-Time' },
                { label: 'Total Credits', value: programTotalCredits, desc: `${activeProgram} Structure` },
                { label: 'Total Marks', value: programTotalMarks, desc: 'UE + IE' },
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

        {isMca && (
          <section className="container-wide py-16 md:py-20 px-4">
            <div className="mb-8 rounded-xl border border-blue-100 bg-blue-50 p-6 text-center">
              <p className="text-base font-bold text-[#0a2a66]">
                Approved by AICTE | Recognized by DTE Maharashtra | Affiliated to Savitribai Phule Pune University (SPPU)
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Intake Information</h2>
              <p className="mt-3 max-w-4xl text-gray-600">
                The intake capacity for the MCA/MBA programme is approved by AICTE and applicable as per the norms of Savitribai Phule Pune University.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="min-w-[720px] w-full text-sm">
                <thead className="bg-[#0a2a66] text-white">
                  <tr>
                    {['Sr. No.', 'Programme Name', 'Academic Year', 'Approved Intake'].map((heading) => (
                      <th key={heading} className="px-4 py-3 text-left font-bold">{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">1</td>
                    <td className="px-4 py-3 font-semibold text-gray-900">{mcaIntakeInformation.programme}</td>
                    <td className="px-4 py-3 text-gray-700">{mcaIntakeInformation.academicYear}</td>
                    <td className="px-4 py-3 font-bold text-primary">{mcaIntakeInformation.approvedIntake}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm font-semibold text-gray-600">* {mcaIntakeInformation.note}</p>
          </section>
        )}

        {/* PROGRAM OVERVIEW */}
        <section className="container-wide py-16 md:py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {isMca ? 'MCA/MBA Program Overview' : `${activeProgram} Program Overview`}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/program1.jpg"
                alt={`${activeProgram} Program`}
                className="rounded-xl shadow-lg w-full h-96 object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-l-4 border-primary">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">About AIMS {activeProgram}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {programIntro}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {programDetails}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-gray-900">Program Highlights:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">-</span>
                    <span>AICTE Approved & NAAC Accredited</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">-</span>
                    <span>Affiliated to Savitribai Phule Pune University</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">-</span>
                    <span>{programSpecializations.length} {activeProgram} specialization options</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">-</span>
                    <span>Industry Expert Faculty</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAM OBJECTIVES */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Program Objectives</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {programObjectives.map((obj, index) => (
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

        {/* DURATION & STRUCTURE */}
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">{isMca ? 'Academic Components' : 'Semester Breakdown'}</h3>
              {isMca
                ? mcaProgramSections.slice(0, 4).map((item) => (
                    <div key={item.title} className="bg-white rounded-lg p-6 border-l-4 border-primary hover:shadow-lg transition">
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))
                : mbaSyllabus.map((item, index) => (
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

        {/* PROGRAMME STRUCTURE */}
        <section className="bg-white py-16 md:py-20 px-4">
          <div className="container-wide">
            <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {isMca ? 'MCA Course Structure (SPPU)' : `${activeProgram} Program Structure`}
                </h2>
                <p className="mt-3 max-w-3xl text-gray-600">
                  Semester-wise program type, credits and assessment structure for the {activeProgram} program.
                </p>
              </div>
              {!isMca && (
                <div className="flex flex-wrap gap-3">
                  <a
                    href={mbaSyllabusUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-[#0a2a66] px-5 py-3 text-sm font-bold text-white hover:bg-blue-800"
                  >
                    View MBA Syllabus
                  </a>
                  <span className="rounded-md bg-yellow-100 px-4 py-3 text-sm font-bold text-gray-900">2024 Pattern</span>
                </div>
              )}
            </div>

            {isMca ? (
              <>
                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                  <table className="min-w-[640px] w-full text-sm">
                    <thead className="bg-[#0a2a66] text-white">
                      <tr>
                        {['Semester', 'Credits', 'UE', 'IE'].map((heading) => (
                          <th key={heading} className="px-4 py-3 text-left font-bold">{heading}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {mcaCourseStructure.map((row) => (
                        <tr key={row.semester} className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-semibold text-gray-900">{row.semester}</td>
                          <td className="px-4 py-3 text-gray-700">{row.credits}</td>
                          <td className="px-4 py-3 text-gray-700">{row.ue}</td>
                          <td className="px-4 py-3 text-gray-700">{row.ie}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-blue-100 bg-blue-50 p-5">
                    <h3 className="font-bold text-gray-900">Total Credits</h3>
                    <p className="mt-2 text-3xl font-extrabold text-primary">95</p>
                  </div>
                  <div className="rounded-lg border border-yellow-100 bg-yellow-50 p-5">
                    <h3 className="font-bold text-gray-900">Total Marks</h3>
                    <p className="mt-2 text-3xl font-extrabold text-primary">2300</p>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="mb-6 text-2xl font-bold text-gray-900">MBA Course Structure (SPPU)</h3>
                  <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                    <table className="min-w-[640px] w-full text-sm">
                      <thead className="bg-[#0a2a66] text-white">
                        <tr>
                          {['Semester', 'Credits', 'UE', 'IE'].map((heading) => (
                            <th key={heading} className="px-4 py-3 text-left font-bold">{heading}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {mbaCourseStructureSummary.map((row) => (
                          <tr key={row.semester} className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-gray-900">{row.semester}</td>
                            <td className="px-4 py-3 text-gray-700">{row.credits}</td>
                            <td className="px-4 py-3 text-gray-700">{row.ue}</td>
                            <td className="px-4 py-3 text-gray-700">{row.ie}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-blue-100 bg-blue-50 p-5">
                      <h3 className="font-bold text-gray-900">Total Credits</h3>
                      <p className="mt-2 text-3xl font-extrabold text-primary">104</p>
                    </div>
                    <div className="rounded-lg border border-yellow-100 bg-yellow-50 p-5">
                      <h3 className="font-bold text-gray-900">Total Marks</h3>
                      <p className="mt-2 text-3xl font-extrabold text-primary">3200</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                  <table className="min-w-[920px] w-full text-sm">
                    <thead className="bg-[#0a2a66] text-white">
                      <tr>
                        {['Type', 'Semester', 'Program Type', 'Programs', 'Credits', 'Total Credits', 'FA', 'SA', 'Total'].map((heading) => (
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
                        Programs: <span className="font-bold">{row[1]}</span> | Credits: <span className="font-bold">{row[2]}</span> | Total Marks: <span className="font-bold">{row[5]}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
         
        </section>
        {isMca && (
          <section className="bg-white py-16 md:py-20 px-4">
            <div className="container-wide">
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">MCA Learning & Industry Exposure</h2>
                <p className="mx-auto mt-3 max-w-3xl text-gray-600">
                  The MCA program combines practical learning, internship exposure, research orientation and emerging technologies for IT industry readiness.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {mcaProgramSections.slice(4).map((section) => (
                  <div key={section.title} className="rounded-xl border border-gray-200 bg-white p-8 transition hover:border-primary hover:shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-700">{section.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {isMca && (
          <section className="container-wide py-16 md:py-20 px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Career Opportunities After MCA/MBA</h2>
              <p className="mx-auto mt-3 max-w-3xl text-gray-600">
                Graduates pursue careers as Software Developers, Web Developers, Database Administrators, Network Engineers, Data Analysts, Project Managers, and IT Consultants.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mcaCareerOpportunities.map((role) => (
                <div key={role} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-primary hover:shadow-md">
                  <p className="font-bold text-gray-900">{role}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ADMISSION REQUIREMENTS */}
        <section className="container-wide py-16 md:py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Admission Requirements</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
                <h4 className="font-bold text-gray-900 mb-3">Academic Qualification</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Bachelor's degree from a recognized university with minimum 50% aggregate for open category and 45% aggregate for reserve category.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
                <h4 className="font-bold text-gray-900 mb-3">Entrance Test</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  MHCET score is considered first for admissions. Valid CET/entrance score as applicable for MBA or MCA admission is required.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
                <h4 className="font-bold text-gray-900 mb-3">Work Experience</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Work experience is preferred for management applicants, but it is not mandatory for fresh graduates.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-l-4 border-primary">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">-</span>
                    <span className="text-gray-700">Bachelor's degree certificate & mark sheets</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">-</span>
                    <span className="text-gray-700">12th & 10th class certificates</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">-</span>
                    <span className="text-gray-700">Entrance exam score card (CAT/MAT/XAT)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">-</span>
                    <span className="text-gray-700">Passport size photographs (4x6 cm)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">-</span>
                    <span className="text-gray-700">Valid ID proof (Aadhar/PAN/Driving License)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">-</span>
                    <span className="text-gray-700">Work experience certificate (if applicable)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">-</span>
                    <span className="text-gray-700">Category certificate (SC/ST/OBC if applicable)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FEES & FINANCIAL AID */}
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
                  <p className="text-sm font-bold uppercase tracking-wide text-gray-500">{activeProgram} Fees</p>
                  <p className="mt-3 text-5xl font-extrabold text-primary">Rs. 89,000/-</p>
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

        {/* CURRICULUM HIGHLIGHT */}
        <section className="container-wide py-16 md:py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Curriculum Highlights</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {(isMca
              ? [
                  {
                    title: 'Core Computer Science',
                    items: ['Programming Foundations', 'Database Systems', 'Software Engineering', 'Computer Networks', 'Operating Systems']
                  },
                  {
                    title: 'Emerging Technologies',
                    items: ['Cloud Computing', 'AI & ML', 'Cyber Security', 'Data Science', 'MERN Stack']
                  },
                  {
                    title: 'Practical Learning',
                    items: ['Hands-on Labs', 'Mini Projects', 'Research Projects', 'Seminars & Workshops', 'Full-Semester Internship']
                  },
                ]
              : [
                  {
                    title: 'Core Programs',
                    items: ['Management Fundamentals', 'Financial Accounting', 'Business Statistics', 'Organizational Behavior', 'Marketing Essentials']
                  },
                  {
                    title: 'Advanced Programs',
                    items: ['Strategic Management', 'International Business', 'Corporate Finance', 'Digital Marketing', 'Business Analytics']
                  },
                  {
                    title: 'Experiential Learning',
                    items: ['Industry Projects', 'Case Studies', 'Seminars & Workshops', 'Industry Internship', 'Capstone Project']
                  },
                ]).map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <span className="text-primary font-bold">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
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

        {/* QUICK LINKS */}
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
