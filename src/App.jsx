import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTopButton from './components/layout/ScrollToTopButton';

const HomePage = lazy(() => import('./pages/HomePage'));
const TransportPage = lazy(() => import('./pages/TransportPage'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Handle GitHub Pages SPA redirection
function RedirectHandler() {
  const location = useLocation();
  useEffect(() => {
    const search = location.search;
    if (search && search.startsWith('?/')) {
      const path = search.slice(2).replace(/~and~/g, '&');
      window.history.replaceState(null, null, path);
    }
  }, [location]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <RedirectHandler />
      <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/transport" element={<TransportPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
