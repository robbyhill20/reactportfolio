import React from 'react';

export default function footer() {
  return(

     <div className="container">
    <div className="py-3 my-4">
      <div className="nav justify-content-center border-bottom pb-3 mb-3">
        <div className="nav-item nav-link px-2 text-muted">robbyhill20@yahoo.com<a/></div>
        <div className="nav-item"><a href="https://www.linkedin.com/in/robby-hill-b32452133" className="nav-link px-2 text-muted">LinkedIn</a></div>
        <li className="nav-item"><a href="https://github.com/robbyhill20" className="nav-link px-2 text-muted">Github</a></li>
        <li className="nav-item"><a href="/Assets/resume/Resume-Robby-Hill.pdf" className="nav-link px-2 text-muted">Resume</a></li>
    
      </div>
      <p className="text-center text-muted">© 2021 Robby Hill</p>
    </div>
  </div>
  )
}