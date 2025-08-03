import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/common';
import { Home, Design, Video, Dev, Thoughts, About } from '@/pages';
import { CaseStudy } from '@/pages/CaseStudy';
import { ThoughtDetail } from '@/pages/ThoughtDetail';

export function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/video" element={<Video />} />
          <Route path="/dev" element={<Dev />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/thoughts/:slug" element={<ThoughtDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/:service/:slug" element={<CaseStudy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
