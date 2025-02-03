import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import ResourcesPage from './pages/ResourcesPage';
import QuizPage from './pages/QuizPage';
import UpcomingPage from './pages/UpcomingPage';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <Router>
      <Navbar />
      <main className="container">
        <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/companies" element={<CompanyPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;