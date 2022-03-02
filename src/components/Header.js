import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "../App.css"

import resume from '../images/Resume-Robby-Hill.pdf'

export default function Header() {
    return ( 
   <nav className="navbar navbar-light justify-content-end">

<ul className="nav nav-pills flex-sm-row">
    <li className="nav-item mt-3">
        <a href="#about" className="nav-link">About Me</a>
    </li>
    <li className="nav-item mt-3">
        <a href="https://github.com/robbyhill20" className="nav-link">Github</a>
    </li>
    <li className="nav-item mt-3">
        <a href="https://www.linkedin.com/in/robby-hill-b32452133" className="nav-link">LinkedIn</a>
    </li>
    <li className="nav-item">
        <a href={resume} className="nav-link mt-3">Resume</a>
    </li>

</ul>
</nav>

)}