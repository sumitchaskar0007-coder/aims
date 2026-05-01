import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiPhone, FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-100 mt-16">
      {/* ⭐ MAIN FOOTER */}
      <div className="container-wide py-12 grid gap-8 md:grid-cols-4">
        {/* LOGO & ABOUT */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="w-18 h-18 overflow-hidden bg-white flex items-center justify-center">
              <img
                src="/assets/logo1.png"  // <-- replace with your logo path
                alt="AIMS Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">AIMS</h3>
              <p className="text-xs text-gray-400">Pune Campus</p>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            Aditya Institute of Management Studies empowering future leaders through innovation and industry-ready education.
          </p>
        </div>


        {/* QUICK LINKS */}
        <div>
          <h4 className="font-bold mb-4 text-white">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-200">
            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
            <Link to="/programs" className="hover:text-yellow-400 transition">Programs</Link>
            <Link to="/placement" className="hover:text-yellow-400 transition">Placement</Link>
            <Link to="/events" className="hover:text-yellow-400 transition">Events</Link>
            <Link to="/gallery" className="hover:text-yellow-400 transition">Gallery</Link>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="font-bold mb-4 text-white">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-gray-200">
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-start gap-2 hover:text-yellow-400 transition">
              <FiMapPin className="mt-1 flex-shrink-0" />
              <span>AIMS Campus, Pune, Maharashtra, India</span>
            </a>
            <a href="tel:+919356393629" className="flex items-center gap-2 hover:text-yellow-400 transition">
              <FiPhone className="flex-shrink-0" />
              <span>+91-9356393629</span>
            </a>
            <a href="mailto:adityainstitute.admission@gmail.com" className="flex items-center gap-2 hover:text-yellow-400 transition">
              <FiMail className="flex-shrink-0" />
              <span>adityainstitute.admission@gmail.com</span>
            </a>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <h4 className="font-bold mb-4 text-white">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.facebook.com/jadhavargroupofinstitute"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-gray-300 hover:text-yellow-400 transition hover:scale-110 transform"
            >
              <FiFacebook />
            </a>
            <a
              href="https://www.instagram.com/jadhavar_group_of_institute"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-gray-300 hover:text-yellow-400 transition hover:scale-110 transform"
            >
              <FiInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/jadhavar-group-of-institutes-63657958/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-yellow-400 transition hover:scale-110 transform"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://twitter.com/jadhavarSpeaks"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="text-gray-300 hover:text-yellow-400 transition hover:scale-110 transform"
            >
              <FiTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* ⭐ BOTTOM BAR */}
      <div className="border-t border-gray-700 py-6 text-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} Trijja Media Works All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-3 text-xs">
          <Link to="/privacy" className="hover:text-yellow-400 transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-yellow-400 transition">Terms & Conditions</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Apply Now</Link>
        </div>
      </div>
    </footer>
  );
}
