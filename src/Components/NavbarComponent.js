import React,{Component} from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component{

   render(){
    return(
        // #2e2d40  504e6e
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:'#1f1940'}}>
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand ps-5"  style={{fontSize:"200%",color:"white"}}>Bhandavya B V</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end me-4" id="navbarNav">
            <ul className="navbar-nav">
              <li className="">
                <Link to="/about" className="nav-link font-120 white pointer px-4" aria-current="page">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link font-120 white pointer px-4" >Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link font-120 white pointer px-4" >Contact</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link font-120 white pointer" href='https://drive.google.com/file/d/1B79GlUVvjcCB30dDslvToyknq57w0DRt/view?usp=drive_link' target='_blank'>Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
   }
   
}

export default Navbar