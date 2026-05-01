import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mbaSyllabus } from '../data/websiteContent';

export default function Academics() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => {
      const newState = {};
      // Close all other sections when opening a new one
      if (!prev[section]) {
        newState[section] = true;
      } else {
        newState[section] = false;
      }
      return newState;
    });
  };

  return (
    <>
      <Helmet>
        <title>Academics | AIMS MBA/MCA | Faculty, Library & Examination</title>
        <meta name="description" content="AIMS MBA/MCA academics - Faculty profiles, library resources, examination cell, code of conduct, and disciplinary policies for students." />
        <meta name="keywords" content="MBA academics, faculty, library, examination, code of conduct, college rules, student discipline" />
        <meta name="author" content="AIMS Pune" />
        <meta property="og:title" content="Academics | AIMS MBA/MCA Pune" />
        <meta property="og:description" content="Explore AIMS academics including faculty, resources, and student guidelines" />
        <link rel="canonical" href="https://adityainstitutemanagement.com" />
      </Helmet>

      <div className="bg-white">
        {/* ⭐ HERO SECTION */}
        <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 md:py-20 px-4">
          <div className="container-wide">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
            <p className="text-lg text-blue-100 max-w-3xl">
              Academic excellence powered by experienced faculty, comprehensive resources, and strong institutional framework
            </p>
          </div>
        </section>

        {/* ⭐ QUICK STATS */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Faculty Members', value: '40+', desc: 'Experienced Professors' },
                { label: 'Library Books', value: '5000+', desc: 'Business Resources' },
                { label: 'Digital Journals', value: '100+', desc: 'E-journals' },
                { label: 'Study Areas', value: '8+', desc: 'Facilities' },
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

        {/* ⭐ ACCORDION SECTIONS */}
        <section className="container-wide py-16 md:py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Academic Information</h2>

          <div className="space-y-4">
            {/* SYLLABUS SECTION */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <button
                onClick={() => toggleSection('syllabus')}
                className="w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r from-sky-50 to-sky-100 hover:from-sky-100 hover:to-sky-200 transition"
              >
                <div className="flex items-center gap-4 text-left flex-1">
                  <h3 className="text-xl font-bold text-gray-900">MBA Program Syllabus</h3>
                </div>
                <span className={`text-3xl font-bold text-primary transition-transform duration-300 ${expandedSections.syllabus ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {expandedSections.syllabus && (
                <div className="px-8 py-8 bg-white border-t border-gray-200 space-y-8 animate-in fade-in duration-300">
                  <p className="text-gray-700 leading-relaxed">
                    Semester-wise MBA syllabus details from the 2024 pattern, including generic core, research, specialization and project components.
                  </p>

                  <div className="grid lg:grid-cols-2 gap-6">
                    {mbaSyllabus.map((semester) => (
                      <div key={semester.semester} className="rounded-lg border border-sky-100 bg-sky-50 p-6">
                        <h4 className="mb-4 text-lg font-bold text-gray-900">{semester.semester}</h4>
                        <div className="overflow-hidden rounded-md border border-sky-200 bg-white">
                          <table className="w-full text-sm">
                            <thead className="bg-[#0a2a66] text-white">
                              <tr>
                                <th className="px-4 py-3 text-left">Course Code</th>
                                <th className="px-4 py-3 text-left">Course</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                              {semester.courses.map(([code, course]) => (
                                <tr key={code}>
                                  <td className="px-4 py-3 font-semibold text-gray-900">{code}</td>
                                  <td className="px-4 py-3 text-gray-700">{course}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <p className="mt-4 text-sm font-semibold text-primary">{semester.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* FACULTY SECTION */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <button
                onClick={() => toggleSection('faculty')}
                className="w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition"
              >
                <div className="flex items-center gap-4 text-left flex-1">
                  <h3 className="text-xl font-bold text-gray-900">Faculty & Departments</h3>
                </div>
                <span className={`text-3xl font-bold text-primary transition-transform duration-300 ${expandedSections.faculty ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {expandedSections.faculty && (
                <div className="px-8 py-8 bg-white border-t border-gray-200 space-y-6 animate-in fade-in duration-300">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        dept: 'Management Studies',
                        desc: 'Strategic management, organizational behavior, and business ethics'
                      },
                      {
                        dept: 'Finance & Accounting',
                        desc: 'Corporate finance, accounting principles, and financial analysis'
                      },
                      {
                        dept: 'Marketing & Sales',
                        desc: 'Strategic marketing, consumer behavior, and brand management'
                      },
                      {
                        dept: 'Human Resources',
                        desc: 'HR management, talent management, and employee relations'
                      },
                      {
                        dept: 'Information Technology',
                        desc: 'IT strategy, business intelligence, and data analytics'
                      },
                      {
                        dept: 'Operations & Supply Chain',
                        desc: 'Logistics, procurement, and supply chain optimization'
                      },
                    ].map((dept, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-primary hover:shadow-md transition">
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">{dept.dept}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{dept.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-3">About Our Faculty</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      AIMS faculty comprises highly qualified academicians and industry professionals with expertise in their respective domains. Our faculty members hold PhD degrees and possess extensive corporate experience.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Regular participation in national and international conferences ensures our curriculum remains updated with latest business practices.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* LIBRARY SECTION */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <button
                onClick={() => toggleSection('library')}
                className="w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition"
              >
                <div className="flex items-center gap-4 text-left flex-1">
                  <h3 className="text-xl font-bold text-gray-900">Library & Learning Resources</h3>
                </div>
                <span className={`text-3xl font-bold text-green-600 transition-transform duration-300 ${expandedSections.library ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {expandedSections.library && (
                <div className="px-8 py-8 bg-white border-t border-gray-200 space-y-6 animate-in fade-in duration-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img
                        src="/assets/library.jpg"
                        alt="College Library"
                        className="rounded-lg shadow-md w-full h-64 object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-900 text-lg">Comprehensive Learning Hub</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        AIMS library is equipped with state-of-the-art infrastructure providing students with extensive resources for research and learning.
                      </p>

                      <div className="space-y-2">
                        <p className="font-semibold text-gray-900 text-sm">Library Features:</p>
                        <ul className="space-y-2">
                          <li className="flex gap-2 text-sm text-gray-700">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>5000+ Business books and references</span>
                          </li>
                          <li className="flex gap-2 text-sm text-gray-700">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>Digital access to e-journals</span>
                          </li>
                          <li className="flex gap-2 text-sm text-gray-700">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>Book bank facility</span>
                          </li>
                          <li className="flex gap-2 text-sm text-gray-700">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>Reading rooms with Wi-Fi</span>
                          </li>
                          <li className="flex gap-2 text-sm text-gray-700">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>Case study archives</span>
                          </li>
                          <li className="flex gap-2 text-sm text-gray-700">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>Collaborative study spaces</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h4 className="font-bold text-gray-900 mb-4">Digital Resources</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { title: 'E-Journals', desc: '100+ international business journals' },
                        { title: 'Research Databases', desc: 'JSTOR, ProQuest, academic platforms' },
                        { title: 'Online Books', desc: '1000+ e-books on management topics' },
                      ].map((resource, index) => (
                        <div key={index} className="bg-white rounded p-4">
                          <p className="font-semibold text-gray-900 text-sm">{resource.title}</p>
                          <p className="text-xs text-gray-600 mt-1">{resource.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* EXAMINATION CELL SECTION */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <button
                onClick={() => toggleSection('examination')}
                className="w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition"
              >
                <div className="flex items-center gap-4 text-left flex-1">
                  <h3 className="text-xl font-bold text-gray-900">Examination Cell</h3>
                </div>
                <span className={`text-3xl font-bold text-orange-600 transition-transform duration-300 ${expandedSections.examination ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {expandedSections.examination && (
                <div className="px-8 py-8 bg-white border-t border-gray-200 space-y-6 animate-in fade-in duration-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
                      <h4 className="font-bold text-gray-900 mb-4">Examination Schedule</h4>
                      <ul className="space-y-3 text-sm text-gray-700">
                        <li className="flex gap-2">
                          <span className="text-orange-600 font-bold">→</span>
                          <span>Regular updates on notice board</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-orange-600 font-bold">→</span>
                          <span>Semester-end exams per university calendar</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-orange-600 font-bold">→</span>
                          <span>Results within 30 days</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-orange-600 font-bold">→</span>
                          <span>Answer sheet review facility</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-orange-600 font-bold">→</span>
                          <span>Supplementary exam opportunities</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 border border-amber-200">
                      <h4 className="font-bold text-gray-900 mb-4">Examination Guidelines</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✓ 75% attendance mandatory</li>
                        <li>✓ Valid identity card required</li>
                        <li>✓ Arrive 15 minutes early</li>
                        <li>✓ Mobile phones prohibited</li>
                        <li>✓ Malpractice = cancellation</li>
                        <li>✓ Results on portal & board</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                    <h4 className="font-bold text-gray-900 mb-4">Important Dates</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { event: 'Mid-term Exams', date: 'As per schedule' },
                        { event: 'Final Exams', date: 'As per schedule' },
                        { event: 'Results', date: '30 days post exam' },
                      ].map((item, index) => (
                        <div key={index} className="bg-white rounded p-4 text-center">
                          <p className="font-semibold text-gray-900 text-sm">{item.event}</p>
                          <p className="text-primary font-bold text-lg mt-1">{item.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CODE OF CONDUCT SECTION */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <button
                onClick={() => toggleSection('conduct')}
                className="w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition"
              >
                <div className="flex items-center gap-4 text-left flex-1">
                  <h3 className="text-xl font-bold text-gray-900">Code of Conduct</h3>
                </div>
                <span className={`text-3xl font-bold text-purple-600 transition-transform duration-300 ${expandedSections.conduct ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {expandedSections.conduct && (
                <div className="px-8 py-8 bg-white border-t border-gray-200 space-y-6 animate-in fade-in duration-300">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Every student must abide by the Code of Conduct to maintain a healthy academic environment.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: 'Identity Card',
                        items: [
                          'Must be duly filled and signed',
                          'Wear at all times on campus',
                          'Transfer is criminal offence',
                          'Present on demand by authorities'
                        ]
                      },
                      {
                        title: 'Campus Behavior',
                        items: [
                          'No littering - use dustbins',
                          'No vehicle sluing on campus',
                          'No loitering on A-Road',
                          'Remain in campus during free hours'
                        ]
                      },
                      {
                        title: 'Mobile Phones',
                        items: [
                          'Switch off in classrooms',
                          'Off in library and corridors',
                          'No pagers or walkmans',
                          'Violation results in confiscation'
                        ]
                      },
                      {
                        title: 'Anti-Ragging',
                        items: [
                          'Ragging completely banned',
                          'Expulsion from college',
                          'Legal action as per law',
                          'Imprisonment and fine possible'
                        ]
                      },
                    ].map((section, index) => (
                      <div key={index} className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                        <h5 className="font-bold text-gray-900 mb-4">{section.title}</h5>
                        <ul className="space-y-2">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex gap-2 text-sm text-gray-700">
                              <span className="text-purple-600 font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* DISCIPLINE SECTION */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <button
                onClick={() => toggleSection('discipline')}
                className="w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 transition"
              >
                <div className="flex items-center gap-4 text-left flex-1">
                  <h3 className="text-xl font-bold text-gray-900">Discipline & Rules</h3>
                </div>
                <span className={`text-3xl font-bold text-red-600 transition-transform duration-300 ${expandedSections.discipline ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {expandedSections.discipline && (
                <div className="px-8 py-8 bg-white border-t border-gray-200 space-y-6 animate-in fade-in duration-300">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    College attaches great importance to discipline. Failure to comply with rules will lead to strict disciplinary action.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                      <h4 className="font-bold text-gray-900 mb-4">Attendance</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✓ Minimum 75% attendance per term</li>
                        <li>✓ Defaulters face disciplinary action</li>
                        <li>✓ Below 75% = cannot write exam</li>
                        <li>✓ Possible dismissal from college</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                      <h4 className="font-bold text-gray-900 mb-4">Class Conduct</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✓ Attend regularly on time</li>
                        <li>✓ Latecomers not allowed entry</li>
                        <li>✓ No other class lectures</li>
                        <li>✓ Use library in free periods</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                      <h4 className="font-bold text-gray-900 mb-4">Property Care</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✓ Take care of college property</li>
                        <li>✓ No defacing or damage</li>
                        <li>✓ Report damage immediately</li>
                        <li>✓ Pay compensation if liable</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                      <h4 className="font-bold text-gray-900 mb-4">Penalties</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✓ Loss of term for misconduct</li>
                        <li>✓ Dismissal for insubordination</li>
                        <li>✓ Fines go to student aid fund</li>
                        <li>✓ Principal discretion on other matters</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SCHOLARSHIPS SECTION */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <button
                onClick={() => toggleSection('scholarships')}
                className="w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 transition"
              >
                <div className="flex items-center gap-4 text-left flex-1">
                  <h3 className="text-xl font-bold text-gray-900">Scholarships & Financial Aid</h3>
                </div>
                <span className={`text-3xl font-bold text-yellow-600 transition-transform duration-300 ${expandedSections.scholarships ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {expandedSections.scholarships && (
                <div className="px-8 py-8 bg-white border-t border-gray-200 space-y-6 animate-in fade-in duration-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                      <h4 className="font-bold text-gray-900 mb-4">Government Scholarships</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>→ National Scholarships (Merit-based)</li>
                        <li>→ State Government scholarships</li>
                        <li>→ SC/ST scholarships & concessions</li>
                        <li>→ Wards of teachers & freedom fighters</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                      <h4 className="font-bold text-gray-900 mb-4">College Scholarships</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>→ Merit scholarships for toppers</li>
                        <li>→ Need-based financial aid</li>
                        <li>→ Sports scholarships</li>
                        <li>→ Women student scholarships</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                    <h4 className="font-bold text-gray-900 mb-4">EBC (Economically Backward Class)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Admission with caution money only</li>
                      <li>✓ Guardian must provide EBC declaration</li>
                      <li>✓ Conditional on good conduct & attendance</li>
                      <li>✓ Failure to maintain = forfeiture</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                    <h4 className="font-bold text-gray-900 mb-4">Admission & Refund Policy</h4>
                    <table className="w-full text-xs md:text-sm">
                      <thead className="bg-yellow-200">
                        <tr>
                          <th className="px-3 py-2 text-left">Timing</th>
                          <th className="px-3 py-2 text-left">Refund</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-yellow-200">
                        <tr>
                          <td className="px-3 py-2">7 days before admission</td>
                          <td className="font-bold text-green-600">100%</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2">Less than 7 days before</td>
                          <td className="font-bold text-orange-600">75%</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2">15 days after admission</td>
                          <td className="font-bold text-orange-600">50%</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2">More than 30 days after</td>
                          <td className="font-bold text-red-600">0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ⭐ CTA SECTION */}
        <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 md:py-20 px-4">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need More Information?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact our admissions office for detailed information about academics and policies
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
                Apply Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
