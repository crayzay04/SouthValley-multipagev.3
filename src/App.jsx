import { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tryouts from './pages/Tryouts';
import Coaches from './pages/Coaches';
import Contact from './pages/Contact';
import News from './pages/News';
import NewsPost from './pages/NewsPost';
import NotFound from './pages/NotFound';
import CollegeCommitments from './pages/CollegeCommitments';

function PageWrapper({ children }) {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const prevKey = useRef(null);

  useEffect(() => {
    if (prevKey.current !== location.key) {
      setVisible(false);
      const t = setTimeout(() => setVisible(true), 30);
      prevKey.current = location.key;
      return () => clearTimeout(t);
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-body">
      <Navbar />
      <main className="flex-1 pt-16">
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tryouts" element={<Tryouts />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsPost />} />
            <Route path="/college-commitments" element={<CollegeCommitments />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
