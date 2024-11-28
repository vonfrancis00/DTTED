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
        </Routes>
      </main>
      <Footer />
      </div>
      
    </Router>
  );
}

export default App;
