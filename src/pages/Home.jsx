import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import Announcement from '../components/Announcement';
import AdmissionPopup from '../components/AdmissionPopup';
import { useEffect, useState, useRef } from 'react';
import { dbApi } from '../lib/firebase';
import { mbaSpecializations, mbaSyllabus } from '../data/websiteContent';

// Enhanced Section component with scroll animation
function Section({ title, children, cta, id }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`container-wide py-16 md:py-20 px-4 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex items-center justify-between mb-10 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
        {cta && (
          <Link
            to={cta.href}
            className="text-primary text-sm font-semibold hover:underline transition-colors"
          >
            {cta.label} →
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

// Animated stat card component
function AnimatedStat({ stat, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targetValue = parseInt(stat.value);
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = targetValue / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isVisible, stat.value]);

  return (
    <div
      ref={ref}
      className={`text-center transform transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-4xl md:text-5xl mb-3 transition-transform duration-300 hover:scale-110">
        {stat.icon}
      </div>
      <div className="text-2xl md:text-3xl font-bold mb-1">
        {stat.value.includes('+') ? `${count}+` : `${count}%`}
      </div>
      <p className="text-sm md:text-base text-blue-100">{stat.label}</p>
    </div>
  );
}

// Animated program card
function AnimatedProgramCard({ program }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-500 text-center transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <h4 className="text-2xl font-bold text-primary mb-2">{program.title}</h4>
      <p className="text-sm text-gray-500 mb-4 font-medium">{program.subtitle}</p>
      <div className="space-y-2 mb-6 text-sm text-gray-600">
        <p>
          <span className="font-semibold">Duration:</span> {program.duration}
        </p>
        <p>
          <span className="font-semibold">Students:</span> {program.students}
        </p>
      </div>
      <Link
        to="/courses"
        className="inline-block bg-primary text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition transform hover:scale-105"
      >
        Learn More →
      </Link>
    </div>
  );
}

// Animated event card
function AnimatedEventCard({ event, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <p className="text-xs uppercase text-primary font-bold mb-2">📅 {event.date}</p>
      <h3 className="text-lg font-bold text-gray-900 mb-3">{event.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-3 mb-4">{event.description}</p>
      <Link
        to="/events"
        className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1 group"
      >
        View Details →
        <span className="transform transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}

// Animated gallery slide with fade transitions
function AnimatedGallery({ gallery }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="relative bg-gray-300 rounded-xl overflow-hidden h-64 md:h-96 shadow-lg">
      <div className="relative w-full h-full">
        {gallery.map((item, index) => (
          <div
            key={item.id}
            className={`absolute w-full h-full transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end">
              <p className="text-white font-semibold text-lg md:text-xl p-4 transform transition-transform duration-500 translate-y-0">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-md"
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-md"
        aria-label="Next slide"
      >
        ❯
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {gallery.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? 'bg-white w-6'
                : 'bg-white/50 w-2 hover:bg-white/80 hover:w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Animated testimonial card
function AnimatedTestimonial({ testimonial, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-white p-6 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover bg-gray-300 transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-primary font-medium">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 text-sm mb-3">"{testimonial.text}"</p>
      <div className="text-yellow-400 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="transition-transform hover:scale-110">
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

// Animated facility card
function AnimatedFacility({ facility, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-white p-6 text-center rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="text-4xl mb-3 transition-transform duration-300 hover:scale-110 hover:rotate-3 inline-block">
        {facility.icon}
      </div>
      <h4 className="font-semibold text-gray-900 mb-2">{facility.title}</h4>
      <p className="text-sm text-gray-600">{facility.desc}</p>
    </div>
  );
}

// Animated reason card
function AnimatedReason({ reason, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-white p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="text-4xl mb-3 transition-transform duration-300 hover:scale-110 hover:rotate-6 inline-block">
        {reason.icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
      <p className="text-gray-600 text-sm">{reason.description}</p>
    </div>
  );
}

// Animated admissions banner
function AnimatedAdmissionsBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div
            className={`relative transform transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <img
              src="/assets/admission2.png"
              alt="Admissions 2026-27"
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg"></div>
          </div>

          <div
            className={`space-y-6 transform transition-all duration-700 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Admissions Open for <span className="text-primary">2026-27</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Join AIMS and kickstart your management career with industry-ready education and world-class faculty mentorship.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: '✅', text: 'AICTE Approved & NAAC Accredited' },
                { icon: '📈', text: '95% Placement Rate' },
                { icon: '🤝', text: '200+ Industry Partners' },
                { icon: '🎓', text: 'Expert Faculty & Mentoring' },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transform transition-all duration-500 hover:translate-x-2 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <span className="text-2xl transition-transform duration-300 hover:scale-125">
                    {benefit.icon}
                  </span>
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-3 pt-2 transition-all duration-500 delay-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 text-center cursor-pointer"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Animated CTA section
function AnimatedCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 md:py-20 px-4"
    >
      <div className="container-wide text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          Ready to Transform Your Career?
        </h2>
        <p
          className={`text-lg text-blue-100 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          Join AIMS and become part of a community dedicated to excellence, innovation, and success in management education.
        </p>
        <Link
          to="/contact"
          className={`inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          Start Your Application Today
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const [events, setEvents] = useState([]);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      try {
        const snap = await dbApi.getDocs(dbApi.collection(dbApi.db, 'events'));
        const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setEvents(data.slice(0, 3));
      } catch (err) {
        console.error('Events load failed', err);
      }
    };
    load();

    // Observe hero section for entrance animation
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true);
          heroObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        heroObserver.unobserve(heroRef.current);
      }
    };
  }, []);

  const gallery = [
    { id: 1, image: '/assets/slider1.jpg', title: 'Campus View' },
    { id: 2, image: '/assets/slider 2.jpg', title: 'Library' },
    { id: 3, image: '/assets/slider3.jpg', title: 'Auditorium' },
    { id: 4, image: '/assets/slider4.jpg', title: 'Lab Facilities' },
  ];

  return (
    <>
      <Helmet>
        <title>AIMS Pune | MBA/MCA | AICTE & NAAC Accredited</title>
        <meta name="description" content="Aditya Institute of Management Studies (AIMS) - AICTE approved, NAAC accredited MBA, MCA programs with 95% placement rate and industry mentoring." />
        <meta name="keywords" content="MBA, MCA, management education, Pune, AICTE, NAAC accredited" />
        <meta name="author" content="AIMS Pune" />
        <meta property="og:title" content="AIMS Pune | MBA & MCA Programs" />
        <meta property="og:description" content="Join AIMS for quality management education with 95% placement and industry partnerships" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://adityainstitutemanagement.com" />
      </Helmet>

      {/* Admission Popup Component */}
      <AdmissionPopup />

      {/* Hero Slider with fade-in animation */}
      <div
        ref={heroRef}
        className={`transition-all duration-1000 ease-out ${
          isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <HeroSlider />
      </div>

      {/* Announcement Section with animation */}
      <div
        className={`transition-all duration-700 delay-300 ${
          isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Announcement />
      </div>

      <AnimatedAdmissionsBanner />

      <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 md:py-20 px-4">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: 'Students Enrolled', value: '2000+', icon: '👨‍🎓' },
              { label: 'Placement Rate', value: '95%', icon: '💼' },
              { label: 'Faculty Members', value: '150+', icon: '👨‍🏫' },
              { label: 'Companies Visiting', value: '200+', icon: '🏢' },
            ].map((stat, index) => (
              <AnimatedStat key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Section
        title="Our Programs"
        cta={{ label: 'Explore All Courses', href: '/courses' }}
        id="programs"
      >
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <AnimatedProgramCard
              program={{
                title: 'MBA/MCA',
                subtitle: 'Management and Computer Applications',
                duration: '2 Years',
                students: '600+',
              }}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Upcoming Events"
        cta={{ label: 'View all Events', href: '/events' }}
        id="events"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {events.length ? (
            events.map((event, index) => (
              <AnimatedEventCard key={event.id} event={event} index={index} />
            ))
          ) : (
            <p className="text-sm text-gray-600 col-span-3 text-center py-8">
              No upcoming events. Check back soon!
            </p>
          )}
        </div>
      </Section>

      <Section title="Campus Gallery" id="gallery">
        <AnimatedGallery gallery={gallery} />
      </Section>

      <Section title="Student Testimonials" id="testimonials">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: 'Rahul Kumar',
              role: 'MBA Graduate, TCS',
              text: 'AIMS provided excellent industry exposure and mentoring. Got placed in my dream company!',
              image: '/testomonial/1.jpg',
            },
            {
              name: 'Priya Singh',
              role: 'MCA Graduate, Amazon',
              text: 'The curriculum and faculty guidance helped me crack interviews at top companies.',
              image: '/testomonial/3.jpg',
            },
            {
              name: 'Amit Patel',
              role: 'MCA Graduate, Google',
              text: 'Outstanding technical training and placement support throughout the course.',
              image: '/testomonial/2.jpg',
            },
          ].map((testimonial, index) => (
            <AnimatedTestimonial key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </Section>

      <Section title="Academic Information" id="academic-information">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition hover:border-primary hover:shadow-lg">
            <p className="text-sm font-bold uppercase tracking-wide text-primary">MBA Programme</p>
            <h3 className="mt-3 text-2xl font-bold text-gray-900">Two Years Full-Time MBA</h3>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              A four-semester MBA programme approved by AICTE, recognized by Government of Maharashtra and affiliated to Savitribai Phule Pune University.
            </p>
            <Link to="/courses" className="mt-6 inline-block rounded-md bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-blue-800">
              View Programme
            </Link>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition hover:border-primary hover:shadow-lg">
            <p className="text-sm font-bold uppercase tracking-wide text-primary">Specializations</p>
            <h3 className="mt-3 text-2xl font-bold text-gray-900">Career-Focused Tracks</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {mbaSpecializations.slice(0, 5).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="font-bold text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/courses" className="mt-6 inline-block rounded-md bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-blue-800">
              See All Tracks
            </Link>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition hover:border-primary hover:shadow-lg">
            <p className="text-sm font-bold uppercase tracking-wide text-primary">Syllabus</p>
            <h3 className="mt-3 text-2xl font-bold text-gray-900">Semester-Wise Structure</h3>
            <div className="mt-4 space-y-3">
              {mbaSyllabus.map((semester) => (
                <div key={semester.semester} className="rounded-md bg-blue-50 px-4 py-3">
                  <p className="font-bold text-gray-900">{semester.semester}</p>
                  <p className="text-xs text-gray-600">{semester.note}</p>
                </div>
              ))}
            </div>
            <Link to="/academics" className="mt-6 inline-block rounded-md bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-blue-800">
              View Syllabus
            </Link>
          </div>
        </div>
      </Section>

      <AnimatedCTA />
    </>
  );
}
