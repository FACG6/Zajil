import React from 'react';
import './style.css';

export default function index() {
    return (
      <section className="pageNotFoundMain">
        <div>
          <div className="notFoundNumber">404</div>
          <span className="notFoundTitle">Oops! Page Not Found</span>
        </div>
      </section>
    );
}