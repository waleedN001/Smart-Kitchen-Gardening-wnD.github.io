import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(prop) {
  return (
    <><nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Smart Kitchen Gardening</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse text-Center" id="navbarSupportedContent">
        <ul className="navbar-nav  text-center me-auto mb-2 mb-lg-0 " >
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tool">tool</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/plants">plants</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/soil">soil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/complaintHandling">qurey</Link>
          </li>
        </ul>
        <form className="d-flex justify-content-start">
        <button type="button" onClick={prop.toggleMode} className={`btn btn-${prop.mode==='light'?'dark':'light'} mx-2`}>changeMode</button>
      </form>
      </div>
    </div>
  </nav>
    </>
  );
}
