import React, { useState } from 'react';
import { Button } from './Button';
import './MakeRequest.css';

const dinnerRequests = [
  'Hotdogs and chips',
  'Sausage Ragu Pasta',
  'Tacos and Queso',
  'Cajun Cheesy Pasta',
  'Chicken Marinade',
  'Chicken Tenders and Tots',
];

function NavIcon({ children, label }) {
  return <button className="nav-icon" aria-label={label}>{children}</button>;
}

export function MakeRequest() {
  const [activeTab, setActiveTab] = useState('Dinners');
  const [selected, setSelected] = useState([]);

  const toggleRequest = (request) => {
    setSelected((current) => current.includes(request)
      ? current.filter((item) => item !== request)
      : [...current, request]);
  };

  return (
    <main className="make-request">
      <header className="make-request__header">
        <div className="make-request__brand">FamBoard</div>
        <nav className="make-request__nav" aria-label="Main navigation">
          <NavIcon label="Back"><span className="icon icon--back" /></NavIcon>
          <NavIcon label="Open menu"><span className="icon icon--menu" /></NavIcon>
          <NavIcon label="Profile"><span className="icon icon--user" /></NavIcon>
        </nav>
      </header>

      <section className="make-request__content" aria-labelledby="request-heading">
        <h1 id="request-heading" className="sr-only">Make a request</h1>
        <div className="request-tabs" role="tablist" aria-label="Request type">
          <Button
            className={activeTab === 'Dinners' ? 'request-tab--active' : 'request-tab'}
            onClick={() => setActiveTab('Dinners')}
            role="tab"
            aria-selected={activeTab === 'Dinners'}
          >Dinners</Button>
          <Button
            className={activeTab === 'Snacks' ? 'request-tab--active' : 'request-tab'}
            onClick={() => setActiveTab('Snacks')}
            role="tab"
            aria-selected={activeTab === 'Snacks'}
          >Snacks</Button>
        </div>

        {activeTab === 'Dinners' ? (
          <div className="request-list">
            {dinnerRequests.map((request) => (
              <label className="request-option" key={request}>
                <input
                  type="checkbox"
                  checked={selected.includes(request)}
                  onChange={() => toggleRequest(request)}
                />
                <span className="request-option__label">{request}</span>
              </label>
            ))}
          </div>
        ) : (
          <p className="empty-state">No snacks available.</p>
        )}

        <Button type="button" size="large" className="submit-request">
          Submit Requests
        </Button>
      </section>
    </main>
  );
}

export default MakeRequest;
