import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Programs() {
  const [expandedProgram, setExpandedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: 'Performance Improvement Programme',
      shortDesc: 'Special coaching for board examination success',
      fullDesc: 'Comprehensive program designed to improve student performance in board examinations',
      category: 'Academic',
      image: '/assets/pip-program.jpg',
      features: [
        'Brushing up important topics with expert guidance',
        'Revision of difficult concepts explained clearly',
        'Three mock examinations for practice and mastery',
        'Answer writing techniques and strategies',
        'Personalized feedback and improvement plans',
        'Regular progress monitoring and tracking'
      ],
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-300',
      textColor: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Soft Skills Development',
      shortDesc: 'Communication and personality enhancement',
      fullDesc: '16-hour comprehensive course for improving communication and interpersonal skills',
      category: 'Development',
      image: '/assets/soft-skills.jpg',
      features: [
        'Communication skill enhancement at multiple levels',
        'Remedial coaching for weak communicators',
        '16-hour structured course throughout the year',
        'Professional instructors with industry experience',
        'Interactive group sessions and activities',
        'Individual feedback and progress assessment'
      ],
      color: 'from-green-50 to-green-100',
      borderColor: 'border-green-300',
      textColor: 'text-green-600'
    },
    {
      id: 3,
      title: 'Career Guidance Cell',
      shortDesc: 'Professional career counseling and planning',
      fullDesc: 'Well-established cell coordinating with placement for career development',
      category: 'Guidance',
      image: '/assets/career-guidance.jpg',
      features: [
        'Annual "Master Mind" career fair organized by SVKM',
        'Large-scale events attended by students and parents',
        'Speakers from diverse professional vocations',
        'Industry-specific guidance and insights',
        'Career path planning and exploration',
        'Coordination with placement cell for opportunities'
      ],
      color: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-300',
      textColor: 'text-purple-600'
    },
    {
      id: 4,
      title: 'Counseling Centre',
      shortDesc: 'Mental health and psychological support',
      fullDesc: 'Professional counseling services for student welfare and mental health',
      category: 'Support',
      image: '/assets/counseling.jpg',
      features: [
        'Male and female counselors available',
        'All working days: 10:00 AM to 4:00 PM',
        'Stress management and psychological support',
        'Aptitude testing and assessment',
        'Intelligence evaluation services',
        'Personality development guidance'
      ],
      color: 'from-pink-50 to-pink-100',
      borderColor: 'border-pink-300',
      textColor: 'text-pink-600'
    },
    {
      id: 5,
      title: 'Students Council',
      shortDesc: 'Student representation and governance',
      fullDesc: 'Elected body for student welfare, grievance redressal, and activity coordination',
      category: 'Governance',
      image: '/assets/student-council.jpg',
      features: [
        'Principal as Chairman for oversight',
        'Faculty in-charge nominated by Principal',
        'Representatives from each class and activities',
        'NSS, Sports, Cultural activities representation',
        'Two girl students nominated by Principal',
        'One-year tenure with annual reconstitution'
      ],
      color: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-300',
      textColor: 'text-orange-600'
    },
    {
      id: 6,
      title: 'Development Programs',
      shortDesc: 'Skill-building aligned with industry',
      fullDesc: 'Comprehensive skill modules designed for career readiness',
      category: 'Skills',
      image: '/assets/dev-program.jpg',
      features: [
        'Industry-aligned skill modules',
        'Hands-on practical training sessions',
        'Expert practitioner guidance throughout',
        'Alumni mentoring and guidance',
        'Real-world case studies and projects',
        'Certification upon successful completion'
      ],
      color: 'from-indigo-50 to-indigo-100',
      borderColor: 'border-indigo-300',
      textColor: 'text-indigo-600'
    },
    {
      id: 7,
      title: 'Workshops',
      shortDesc: 'Hands-on learning with industry professionals',
      fullDesc: 'Interactive sessions with practitioners and industry alumni',
      category: 'Training',
      image: '/assets/workshops.jpg',
      features: [
        'Hands-on training with practitioners',
        'Sessions conducted by industry experts',
        'Alumni mentors sharing real experiences',
        'Practical skill application exercises',
        'Networking opportunities with professionals',
        'Certificate of participation provided'
      ],
      color: 'from-cyan-50 to-cyan-100',
      borderColor: 'border-cyan-300',
      textColor: 'text-cyan-600'
    },
    {
      id: 8,
      title: 'Seminars',
      shortDesc: 'Industry insights from corporate leaders',
      fullDesc: 'Seminars covering trending topics by senior corporate leaders',
      category: 'Knowledge',
      image: '/assets/seminars.jpg',
      features: [
        'Trending business and management topics',
        'Speakers from leading corporations',
        'Current industry practices and insights',
        'Q&A sessions with professionals',
        'Knowledge sharing and networking',
        'Recording available for reference'
      ],
      color: 'from-teal-50 to-teal-100',
      borderColor: 'border-teal-300',
      textColor: 'text-teal-600'
    }
  ];

  const toggleProgram = (id) => {
    setExpandedProgram(expandedProgram === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <title>Development Programs | AIMS MBA/MCA | Skills & Training</title>
        <meta name="description" content="AIMS development programs including Performance Improvement, soft skills, career guidance, counseling, workshops, and seminars for MBA/MCA students." />
        <meta name="keywords" content="development programs, soft skills, career guidance, workshops, seminars, student counseling, performance improvement, MBA training" />
        <meta name="author" content="AIMS Pune" />
        <meta property="og:title" content="Development Programs | AIMS MBA/MCA" />
        <meta property="og:description" content="Explore comprehensive development and training programs at AIMS" />
        <link rel="canonical" href="https://adityainstitutemanagement.com" />
      </Helmet>

      <div className="bg-white">
        {/* ⭐ HERO SECTION */}
        <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 md:py-20 px-4">
          <div className="container-wide">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Development Programs</h1>
            <p className="text-lg text-blue-100 max-w-3xl">
              Comprehensive skill development, guidance, and support programs designed to enhance student success and career readiness
            </p>
          </div>
        </section>

        {/* ⭐ QUICK STATS */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Programs', value: '8', desc: 'Active Programs' },
                { label: 'Annual Events', value: '50+', desc: 'Workshops & Seminars' },
                { label: 'Beneficiaries', value: '90%', desc: 'Students' },
                { label: 'Success Rate', value: '95%', desc: 'Program Impact' },
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

        {/* ⭐ PROGRAMS OVERVIEW */}
        <section className="container-wide py-16 md:py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Development Initiatives</h2>

          <div className="space-y-4">
            {programs.map((program) => (
              <div
                key={program.id}
                className={`bg-white border-2 rounded-xl overflow-hidden hover:shadow-lg transition ${program.borderColor}`}
              >
                {/* ACCORDION HEADER */}
                <button
                  onClick={() => toggleProgram(program.id)}
                  className={`w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r ${program.color} hover:shadow-md transition`}
                >
                  <div className="flex items-center gap-4 text-left flex-1">
                    <div className={`text-3xl font-bold ${program.textColor}`}>
                      {program.id}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">{program.title}</h3>
                      <p className="text-sm text-gray-600">{program.shortDesc}</p>
                    </div>
                  </div>
                  <span
                    className={`text-3xl font-bold ${program.textColor} transition-transform duration-300 ${expandedProgram === program.id ? 'rotate-45' : ''
                      }`}
                  >
                    +
                  </span>
                </button>

                {/* ACCORDION CONTENT */}
                {expandedProgram === program.id && (
                  <div className="px-8 py-8 border-t-2 border-gray-200 space-y-6 animate-in fade-in duration-300">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <div>
                        <img
                          src={program.image}
                          alt={program.title}
                          className="rounded-lg shadow-md w-full h-72 object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-3 flex-wrap">
                          <span className={`inline-block ${program.textColor} bg-opacity-10 px-4 py-2 rounded-full text-sm font-semibold`}>
                            {program.category}
                          </span>
                        </div>

                        <h4 className="text-xl font-bold text-gray-900">{program.fullDesc}</h4>

                        <div className="space-y-3">
                          <h5 className="font-bold text-gray-900">Program Features:</h5>
                          <ul className="space-y-2">
                            {program.features.map((feature, idx) => (
                              <li key={idx} className="flex gap-3 text-gray-700 text-sm">
                                <span className={`${program.textColor} font-bold flex-shrink-0`}>✓</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4">
                          <Link
                            to="/contact"
                            className={`inline-block ${program.textColor} border-2 px-6 py-2 rounded-lg font-semibold hover:bg-opacity-10 transition text-sm`}
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ⭐ STUDENTS COUNCIL DETAILS */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Students Council Structure</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border-l-4 border-primary hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Council Composition</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Principal as Chairman for overall governance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Faculty in-charge nominated by Principal</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>One meritorious student from each class</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Outstanding students from NSS & Sports</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Representatives from Cultural Activities</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Two girl students nominated by Principal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border-l-4 border-primary hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Council Responsibilities</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Organize and supervise student activities</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Coordinate different student associations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Make recommendations for student welfare</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Handle genuine student grievances</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Annual tenure - reconstituted each year</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Represent student interests to authorities</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Council Objectives</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Students Council serves as the bridge between student body and college administration. It ensures that student voices are heard, their welfare is prioritized, and a vibrant campus community is maintained through coordination of various activities and associations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The council promotes overall development of students beyond academics, fostering leadership qualities, collaborative spirit, and social responsibility among members.
              </p>
            </div>
          </div>
        </section>

        {/* ⭐ BENEFITS SECTION */}
        <section className="container-wide py-16 md:py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Holistic Development',
                desc: 'Beyond academics - develop soft skills, leadership, and interpersonal abilities'
              },
              {
                title: 'Career Readiness',
                desc: 'Industry-aligned training and professional guidance for successful careers'
              },
              {
                title: 'Mental Wellness',
                desc: 'Professional counseling and psychological support for student wellbeing'
              },
              {
                title: 'Skill Enhancement',
                desc: 'Practical workshops and hands-on training with industry professionals'
              },
              {
                title: 'Placement Support',
                desc: 'Dedicated guidance cell coordinating with placement for job opportunities'
              },
              {
                title: 'Peer Learning',
                desc: 'Mentoring from alumni and networking with industry experts'
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ⭐ CTA SECTION */}
        <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 md:py-20 px-4">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience comprehensive development programs and support systems designed for your success
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
