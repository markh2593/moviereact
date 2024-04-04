import React from 'react'

function Navbar() {
  return (
    <nav
        className="navbar navbar-expand-sm navbar-light bg-secondary"
    >
        <div className="container">
            <a className="navbar-brand" href="#">Dev</a>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                 
                    <li className="nav-item">
                        <a className="nav-link" href='/Login'>Login</a>
                    </li>

                </ul>
               
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar