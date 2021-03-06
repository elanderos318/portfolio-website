import React from 'react';
import './App.css';
import header from './header.json';
import work from './work.json';
import projects from './projects.json';
import education from './education.json';

import profile from './profile.jpg';
import images from './images.js';

// Declare CSS inline styling variables
var contactStyle = {
  color: "hsl(240deg, 100%, 96%)"
}

function Header() {

  const skillSet = header.skills;
  const skillElements = skillSet.map((skill, i) => {
    return (
      <li className = "skill-set-li" key={i}>
        {skill}
      </li>
    )
  })


  return(
    <div className="header">

      <div className = "header-content">

        <h1 className = "my-name">{header.name}</h1>
        <p className = "occupation">Data Science Developer</p>

        <hr></hr>

        <ul className="header-contact">

          <li>
            <a href="https://github.com/elanderos318?tab=overview&from=2019-09-01&to=2019-09-20" target = "_blank" rel="noopener noreferrer">Github</a> 
          </li>
          <li>
            <a href="https://www.linkedin.com/in/eduardo-landeros-100a8612b/" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
          </li>
          <li>
            <span style={contactStyle}> email: </span>{header.contact.email} 
          </li>
          <li>
            <span style={contactStyle}> location: </span>Chicago, IL 
          </li>
        </ul>        

        
        <div className="bottom-container">
          <img src={profile} alt="Eduardo's Profile Pic" className="profile-picture"></img>
          
          <div className="skills-container">
            <h2 className = "skills-header">Skills At A Glance:</h2>
            <ul className = "skill-set">
              {skillElements}
            </ul>
          </div>

          <p className="page-description">This is my résumé webpage where you can find all the details about my skills, experience, and background</p>

        </div>


      </div>

    </div>
  )
}

function Break(props) {
  return (
      <div className = "break-container">
        <div className="break-content">
          <h1 className="break-title">{props.title}</h1>
        </div>
      </div>
  );
}

function Work() {
  const workList = work;

  const workElements = workList.map((job, i) => {

    let containerClass;

    if ((i % 2) === 0) {
      containerClass = "job-container job-even"; 
    } else {
      containerClass = "job-container job-odd";
    }

    return (
      <div className={containerClass}>
        <div className = "job-content">
          <div className="job-header">
            <h2 className="job-title">{job.title}</h2>
            <h2 className="job-company">{job.company}</h2>
          </div>
          <div className="job-sub-header">
            <span className="job-date">{job["start-date"]} - {job["end-date"]}</span><span className="job-location">{job.location}</span>
          </div>
          <div className="job-description">
            <p>{job.description}</p>
          </div>
        </div>
      </div>
    );
  })

  return (
    <div className="job-body">{workElements}</div>
  );
}

function Projects() {

  const projectList = projects;

  const projectElements = projectList.map((project, i) => {

    let projectImages = images.filter((d) => {
      return (
        d["projectIndex"] === i
      );
    });

    let imageElements = projectImages.map((img, index) => {
      return (
        <img key={img.index} className = "project-image" alt = {img.alt} src={img.src}></img>
      )
    })

    let imageDiv;
    let imageExists = false;

    if (imageElements.length > 0) {
      imageDiv = <div className = "project-images-container">
        {imageElements}
      </div>
      imageExists = true;
    } else {
      imageDiv = null;
      imageExists = false;
    }

    let containerClass;

    if ((i % 2) === 0) {
      if (imageExists) {
        containerClass = "project-container project-even"; 
      } else {
        containerClass = "project-container-no-image project-even"; 
      }
    } else {
      if (imageExists) {
        containerClass = "project-container project-odd";
      } else {
        containerClass = "project-container-no-image project-odd";
      }
    }

    let dateLine;

    if (project["start-date"] === project["end-date"]) {
      dateLine = <span className="project-date">{project["start-date"]}</span>
    } else {
      dateLine = <span className="project-date">{project["start-date"]} - {project["end-date"]}</span>
    }

    let urlLine;
    if (project.website) {
      urlLine = <div className="url-section">
        <p className = "url-line">Github: <a className="url-link" href={project.github}>{project.github}</a></p>
        <p className = "url-line">Website: <a className="url-link" href={project.website}>{project.website}</a></p>
      </div>
    } else {
      urlLine = <div className="url-section">
        <p className = "url-line">Github: <a className="url-link" href={project.github}>{project.github}</a></p>
      </div>
    }


    return (
      <div className={containerClass}>
        <div className = "project-content">
          <div className="project-header">
            <h2 className="project-title">{project.title}</h2>
          </div>
          <div className="project-sub-header">
          {dateLine}
          </div>
          {urlLine}
          <div className="project-description">
            <p>{project.description}</p>

          </div>
          {imageDiv}
        </div>
      </div>
    );
  })

  return (
    <div className="project-body">{projectElements}</div>
  );
}

function Education() {
  const educationList = education;

  const educationElements = educationList.map((item, i) => {

    let containerClass;

    if ((i % 2) === 0) {
      containerClass = "education-container education-even"; 
    } else {
      containerClass = "education-container education-odd";
    }

    return (
      <div className={containerClass}>
        <div className = "education-content">
          <div className="education-header">
            <h2 className="education-institution">{item.institution}</h2>
            <h2 className="education-product">{item.product}</h2>
          </div>
          <div className="education-sub-header">
            <span className="education-date">{item["start-date"]} - {item["end-date"]}</span><span className="education-location">{item.location}</span>
          </div>
          {/* <div className="education-description">
            <p>{item.description}</p>
          </div> */}
        </div>
      </div>
    );
  })

  return (
    <div className="education-body">{educationElements}</div>
  );
}

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h1 className="footer-title">Contact</h1>

        <ul className="footer-contact">

          <li>
            <a href="https://github.com/elanderos318?tab=overview&from=2019-09-01&to=2019-09-20" target = "_blank" rel="noopener noreferrer">Github</a> 
          </li>
          <li>
            <a href="https://www.linkedin.com/in/eduardo-landeros-100a8612b/" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
          </li>
          <li>
            <span style={contactStyle}> email: </span>{header.contact.email} 
          </li>
        </ul>     
      </div>
    </div>
  );
}


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      

      <div className="portfolio-body">

        <Header />

        <Break
          title= "Work Experience"
        />

        <Work />

        <Break 
          title="Projects"
        />

        <Projects />

        <Break
          title="Education"
        />

        <Education />

        <Footer />

      </div>


      // {/* <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div> */}
    );
  }
}

export default App;
