import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Public Pages
import Gallery from './pages/Gallery';
// import Announcement from './pages/Announcement';
import Notice from './pages/Notice';
import Blog from './pages/Blog';
import Career from './pages/Career';
import AllAnnouncements from './pages/AllAnnouncements';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import GalleryAdmin from './pages/admin/GalleryAdmin';
import AnnouncementAdmin from './pages/admin/AnnouncementAdmin';
import NoticeAdmin from './pages/admin/NoticeAdmin';
import CareerAdmin from './pages/admin/CareerAdmin';
import BlogAdmin from './pages/admin/BlogAdmin';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/admin/login" />;
};

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutDetail from "./pages/AboutDetail";
import Courses from "./pages/Courses";
import Academics from "./pages/Academics";
import Udan from "./pages/Udan";
import Programs from "./pages/Programs";
import Events from "./pages/Events";
import Placement from "./pages/Placement";
import Student from "./pages/Student";
import Research from "./pages/Research";
import Videos from "./pages/Videos";
import Naac from "./pages/Naac";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AnnouncementTicker from "./components/AnnouncementTicker";
import Grievance from "./pages/Grievance";
import ScrollAnimator from "./components/ScrollAnimator";

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Adds smooth scrolling effect
    });
  }, [pathname]);

  return null;
};

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Announcement Scroller */}
      <AnnouncementTicker />

      {/* ScrollToTop component inside Router context */}
      <ScrollToTop />
      <ScrollAnimator />

      {/* Main Page */}
      <main className="site-animated flex-1 pt-28 md:pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Navigate to="/about/the-jadhavar" replace />} />
              <Route path="/about/:slug" element={<AboutDetail />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/udan" element={<Udan />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/events" element={<Events />} />
              <Route path="/placement" element={<Placement />} />
              <Route path="/student" element={<Student />} />
              <Route path="/research" element={<Research />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/naac" element={<Naac />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/grievance" element={<Grievance />} />
              
              {/* Gallery Routes */}
              <Route path="/gallery" element={<Gallery />} />
              
              {/* Other Public Routes */}
              <Route path="/notices" element={<Notice />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Blog />} />

              <Route path="/career" element={<Career />} />
              <Route path="/announcements" element={<AllAnnouncements />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              } />
              <Route path="/admin/gallery" element={
                <PrivateRoute>
                  <GalleryAdmin />
                </PrivateRoute>
              } />
              <Route path="/admin/announcements" element={
                <PrivateRoute>
                  <AnnouncementAdmin />
                </PrivateRoute>
              } />
              <Route path="/admin/notices" element={
                <PrivateRoute>
                  <NoticeAdmin />
                </PrivateRoute>
              } />
              <Route path="/admin/careers" element={
                <PrivateRoute>
                  <CareerAdmin />
                </PrivateRoute>
              } />
              <Route path="/admin/blogs" element={
                <PrivateRoute>
                  <BlogAdmin />
                </PrivateRoute>
              } />
              
              {/* Dashboard Protected */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              {/* Page Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
