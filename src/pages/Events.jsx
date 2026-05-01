import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventsData = [
    {
      id: 1,
      title: 'Annual Sports Meet',
      category: 'Sports',
      date: 'March 2025',
      image: '/assets/sports-meet.png',
      description: 'Inter-class sports competition featuring cricket, volleyball, badminton, athletics and other sports activities.',
      details: 'Annual sporting extravaganza with prizes, trophies, and recognition for outstanding performers.'
    },
    {
      id: 2,
      title: 'Cultural Fest',
      category: 'Cultural',
      date: 'February 2025',
      image: '/assets/cultural-fest.png',
      description: 'Celebration of diverse cultures with music, dance, drama, and traditional performances.',
      details: 'Students showcase talents through dance, singing, theatre, and cultural presentations.'
    },
    {
      id: 3,
      title: 'Tech Summit',
      category: 'Academic',
      date: 'January 2025',
      image: '/assets/tech-summit.jpg',
      description: 'Technology and innovation conference with industry experts and practitioners.',
      details: 'Workshops, talks, and demos on latest technology trends and business solutions.'
    },
    {
      id: 4,
      title: 'Business Quiz Competition',
      category: 'Competition',
      date: 'December 2024',
      image: '/assets/quiz.jpg',
      description: 'Inter-college business quiz competition testing management and general knowledge.',
      details: 'Teams compete on business concepts, economics, and current affairs.'
    },
    {
      id: 5,
      title: 'Debate Championship',
      category: 'Competition',
      date: 'November 2024',
      image: '/assets/debate.jpg',
      description: 'Inter-class and inter-college debate on contemporary business and social issues.',
      details: 'Platform for developing public speaking and argumentative skills.'
    },
    {
      id: 6,
      title: 'Industry Connect Program',
      category: 'Placement',
      date: 'October 2024',
      image: '/assets/industry-connect.jpg',
      description: 'Meet corporate leaders and explore career opportunities with leading companies.',
      details: 'Networking sessions, job drives, and recruitment talks from top organizations.'
    },
    {
      id: 7,
      title: 'Entrepreneurship Summit',
      category: 'Business',
      date: 'September 2024',
      image: '/assets/entrepreneurship.jpg',
      description: 'Forum for budding entrepreneurs to pitch ideas and learn from successful founders.',
      details: 'Mentoring, funding opportunities, and startup ecosystem insights.'
    },
    {
      id: 8,
      title: 'Alumni Meet',
      category: 'Community',
      date: 'August 2024',
      image: '/assets/alumni.jpg',
      description: 'Reunion and networking with alumni sharing their career journeys and experiences.',
      details: 'Mentoring, job opportunities, and alumni-student interaction sessions.'
    },
    {
      id: 9,
      title: 'Case Study Competition',
      category: 'Academic',
      date: 'July 2024',
      image: '/assets/case-study.jpg',
      description: 'Teams solve real business problems using case study analysis and presentation skills.',
      details: 'Develop analytical, presentation, and teamwork capabilities.'
    },
    {
      id: 10,
      title: 'Leadership Workshop',
      category: 'Development',
      date: 'June 2024',
      image: '/assets/leadership.jpg',
      description: 'Interactive sessions on leadership, decision-making, and team management.',
      details: 'Expert-led workshops for developing leadership qualities and soft skills.'
    },
    {
      id: 11,
      title: 'Farewell Ceremony',
      category: 'Cultural',
      date: 'May 2024',
      image: '/assets/farewell.jpg',
      description: 'Celebration and send-off for graduating students with performances and awards.',
      details: 'Recognition of achievements and memorable moments from college journey.'
    },
    {
      id: 12,
      title: 'Foundation Day',
      category: 'Community',
      date: 'April 2024',
      image: '/assets/foundation-day.jpg',
      description: 'Celebration of college establishment with special ceremonies and performances.',
      details: 'Commemoration of milestones and community gathering with cultural programs.'
    }
  ];

  const categories = ['All', ...new Set(eventsData.map(e => e.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredEvents = activeCategory === 'All'
    ? eventsData
    : eventsData.filter(e => e.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Events & Activities | AIMS MBA/MCA | College Programs</title>
        <meta name="description" content="AIMS college events and activities - Sports, cultural fest, tech summit, business competitions, placement drives, and more." />
        <meta name="keywords" content="college events, sports meet, cultural fest, seminars, workshops, placement drives, competitions, activities" />
        <meta name="author" content="AIMS Pune" />
        <meta property="og:title" content="Events & Activities | AIMS MBA/MCA" />
        <meta property="og:description" content="Explore exciting events and activities at AIMS college" />
        <link rel="canonical" href="https://adityainstitutemanagement.com" />
      </Helmet>

      <div className="bg-white">
        {/* ⭐ HERO */}
        <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 md:py-20 px-4">
          <div className="container-wide">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Activities</h1>
            <p className="text-lg text-blue-100 max-w-3xl">
              Vibrant campus life with sports, cultural programs, academic competitions, and professional development events
            </p>
          </div>
        </section>

        {/* ⭐ CATEGORY FILTER */}
        <section className="bg-gray-50 py-8 px-4 sticky top-0 z-40">
          <div className="container-wide">
            <div className="flex overflow-x-auto gap-3 pb-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-primary'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ⭐ EVENTS GRID */}
        <section className="container-wide py-16 px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-primary transition-all cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                    {event.category}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-xs text-primary font-bold uppercase">{event.date}</p>
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{event.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
                  <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No events in this category.</p>
            </div>
          )}
        </section>

        {/* ⭐ MODAL */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedEvent.title}</h2>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-3xl text-gray-400 hover:text-gray-900 font-bold w-8 h-8 flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex gap-3">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                    {selectedEvent.category}
                  </span>
                  <span className="bg-gray-100 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                    {selectedEvent.date}
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed">{selectedEvent.description}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{selectedEvent.details}</p>

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="w-full bg-gray-100 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ⭐ CTA */}
        <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 px-4">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't miss any upcoming events and activities at AIMS
            </p>
            <Link
              to="/contact"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition"
            >
              Apply Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
