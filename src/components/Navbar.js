import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{backgroundColor: "#2F3C7E"}}>
        <h2 style={{marginLeft: "15px", color: "#FBEAEB"}}>Minute News</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" style={{color: "#FBEAEB", marginLeft: "30px"}} to="/">Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color: "#FBEAEB", marginLeft: "30px"}} to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color: "#FBEAEB", marginLeft: "30px"}} to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color: "#FBEAEB", marginLeft: "30px"}} to="/general">General</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color: "#FBEAEB", marginLeft: "30px"}} to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color: "#FBEAEB", marginLeft: "30px"}} to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color: "#FBEAEB", marginLeft: "30px"}} to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color: "#FBEAEB", marginLeft: "30px"}} to="/technology">Technology</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar