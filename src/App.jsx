import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Agentation } from 'agentation';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import VillasPage from './pages/VillasPage';
import VillaDetailPage from './pages/VillaDetailPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ExperienceDetailPage from './pages/ExperienceDetailPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PhuketPage from './pages/PhuketPage';
import PhuketArticlePage from './pages/PhuketArticlePage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import DealsPage from './pages/DealsPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import SustainabilityPage from './pages/SustainabilityPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="villas" element={<VillasPage />} />
          <Route path="villas/:slug" element={<VillaDetailPage />} />
          <Route path="experiences" element={<ExperiencesPage />} />
          <Route path="experiences/:slug" element={<ExperienceDetailPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="phuket" element={<PhuketPage />} />
          <Route path="phuket/:slug" element={<PhuketArticlePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="deals" element={<DealsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="sustainability" element={<SustainabilityPage />} />
        </Route>
      </Routes>
      {import.meta.env.DEV && <Agentation />}
    </BrowserRouter>
  );
}
