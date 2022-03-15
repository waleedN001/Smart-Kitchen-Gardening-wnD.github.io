import React from 'react';
import { Link } from 'react-router-dom';

export default function JalybiBhi() {
  return (
    <div>
      
      <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">Welcome To Our Portal!</div>
                <div className="masthead-heading text-uppercase">learn about Smart Kitchen Gardeing</div>
                <Link className="btn btn-dark btn-xl text-uppercase" to="/Tool">Tell Me More</Link>
            </div>
        </header>
        
    </div>
  );
}
