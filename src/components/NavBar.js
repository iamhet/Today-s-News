import React from "react";
import { Link } from "react-router-dom";

export default function textform() {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Daily News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Country
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="india">India</Link></li>
            <li><Link className="dropdown-item" to="unitedKingdom">United Kingdom</Link></li>
            <li><Link className="dropdown-item" to="australia">Australia</Link></li>
            <li><Link className="dropdown-item" to="southAfrica">South Africa</Link></li>
            <li><Link className="dropdown-item" to="canada">Canada</Link></li>
            <li><Link className="dropdown-item" to="japan">Japan</Link></li>
            <li><Link className="dropdown-item" to="russia">Russia</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Category"  aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    );
}
