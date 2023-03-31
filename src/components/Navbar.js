import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {


  render() {
      return (
        
        <nav className="navbar  fixed-top navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">BuzzBits</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item text-light dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        category
                    </Link>
                        <ul className="dropdown-menu navbar-dark bg-dark">
                        <li><Link className="dropdown-item text-light" to="/business">business</Link></li>        
                        <li><Link className="dropdown-item text-light" to="/entertainment">entertainment</Link></li>        
                        <li><Link className="dropdown-item text-light" to="/">general</Link></li>        
                        <li><Link className="dropdown-item text-light" to="/health">health</Link></li>        
                        <li><Link className="dropdown-item text-light" to="/science">science</Link></li>       
                        <li><Link className="dropdown-item text-light" to="/sports">sports</Link></li>       
                        <li><Link className="dropdown-item text-light" to="/technology">technology</Link></li>        
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
  }
}

export default Navbar
