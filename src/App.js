import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Alumni from './pages/alumni';
import AboutUs from './components/AboutUs';
import Announcements from './pages/announcement';
import Activities from './pages/activities';
import ContactUs from './components/ContactUs';
import UniversityInformation from "./pages/universityinfo";
import ContactInfo from "./pages/contactinfo";
import DTTED from "./pages/dtted";
import Team from "./pages/team";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus/universityinfo" element={<UniversityInformation />} />
          <Route path="/aboutus/contactinfo" element={<ContactInfo />} />
          <Route path="/aboutus/dtted" element={<DTTED />} />
          <Route path="/aboutus/team" element={<Team />} />

        </Routes>
      </main>
      <Footer />
      </div>
      
    </Router>
  );
}

export default App;
