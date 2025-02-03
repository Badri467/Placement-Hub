import React from 'react';
import CompanyDetails from '../components/CompanyDetails';
import UpcomingCompanies from '../components/UpcomingCompanies';
import './CompanyPage.css';

const CompanyPage = () => {
  return (
    <div className="company-page">
      <CompanyDetails />
      <UpcomingCompanies />
    </div>
  );
};

export default CompanyPage;