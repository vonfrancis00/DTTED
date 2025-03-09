import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Announcements from './pages/announcement';
import Activities from './pages/activities';
import UniversityInformation from "./pages/universityinfo";
import ContactInfo from "./pages/contactinfo";
import DTTED from "./pages/dtted";
import Team from "./pages/team";
import DTVTED from "./pages/btvted";
import DTLED from "./pages/btled";
import News from "./pages/news";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/University/universityinfo" element={<UniversityInformation />} />
          <Route path="/aboutus/contactinfo" element={<ContactInfo />} />
          <Route path="/Department/dtted" element={<DTTED />} />
          <Route path="/News/facultynews" element={<News />} />
          <Route path="/Team/ourteam" element={<Team />} />
          <Route path="/dtvted" element={<DTVTED />} />
          <Route path="/dtled" element={<DTLED />} />

        </Routes>
      </main>
      <Footer />
      </div>
      
    </Router>
  );
}

export default App;
