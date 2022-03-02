import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "../App.css"
import avatar from '../images/avatar.png'
import fomo from '../images/FOMO.jpg'
import pwgen from '../images/Password.jpg'
import DayPlanner from '../images/DayPlanner.jpg'


export default function body() {
    return(
   <div> <div className="mt-5 d-flex top justify-content-start"> 
        
    <div className="card card-top">
        <img className="card-img-top mt-5  avatar" src={avatar} alt="Avatar"/>
        <div className="card-body">
            <h5 className="card-name">Robby Hill</h5>
            <p className="card-about"> Aspiring software developer.</p>
        </div>
    </div>
    <div className="col quote">
    <p>“Experience is the name everyone gives to their mistakes.” </p>
    <p>– Oscar Wilde</p>
    </div>
</div>
<div className="card-deck row d-flex justify-content-center mt-5 ">
        <div className="card card-content">
            <div className="card-body">
                <h5 className="card-title text-center">Skills</h5>
                <div className="mx-3">
                    <h4>Front End</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Third-Party APIs</li>
                        <li>Server-Side APIs</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="card card-content">
            <div className="card-body">
                <h5 className="card-title text-center">About Me</h5>
                <div className="mt-5 mb-5">
                    <p className="mt-3" id="about">My Name is Robby Hill and I am an aspiring developer. here! I have a passion for
                        improveming my skillsets in the various coding languages. I have showcased some of my projects
                        below. Feel free to check back often as this page will be continously updated.</p>
                </div>
            </div>
        </div>
    </div>
    <h1 className="text-center projects row mt-5">PROJECTS</h1>
    <div className="card-deck mt-5 project-section">
        <div className="row justify-content-center">
            <div className="card card-content">
                <img className="card-img-top mt-5 rounded"
                    src="https://github.com/JASMINETUFF/FOMO-Calculator/blob/main/Assets/final.png?raw=true"
                    alt="FOMO-Calculator"/>
                <div className="card-body">
                    <h5 className="card-title">FOMO Calculator</h5>
                    <p className="card-text">This application uses historical bitcoin and stock
                        exchange data to show a user just how much they could have made if they invested
                        in any given stock or cryptocurrency.</p>
                </div>
                <div className="btn btn-success center mt-3 mb-3 fomo-btn"><a className="text-white" href="https://jasminetuff.github.io/FOMO-Calculator/ "/>FOMO Calculator</div>

            </div>

            <div className="card card-content">
                <img className="card-img-top mt-5 rounded" src={DayPlanner} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Day Planner</h5>
                    <p className="card-text">This application is a day planner that can be utilized to track your scheduled
                        events for the day.</p>
                </div>
                <div className="btn btn-success center mt-3 mb-3"><a href="https://robbyhill20.github.io/week-5-homework/"/>Day Planner</div>
            </div>

            <div className="card card-content">
                <img className="card-img-top mt-5 rounded" src={pwgen} alt="Password Generator"/>
                <div className="card-body">
                    <h5 className="card-title">Password Generator</h5>
                    <p className="card-text">This application is a password generator that creates a
                        random string of characters ranging from 8-128 characters.</p>
                </div>
                <div className="btn btn-success center mt-3 mb-3"><a href="https://robbyhill20.github.io/Week-3-Homework/"/>Password Generator</div>
            </div>
        </div>
    </div>
</div>
    )
}