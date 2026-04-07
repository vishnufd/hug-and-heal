import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Campaign } from './components/Campaign';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-neutral-800">
        <Navbar />
        <main className="grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campaign" element={<Campaign />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
