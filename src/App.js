import React from 'react';
import logo from './logo.svg';
import './App.css';
import header from './header.json';
import work from './work.json';
import projects from './projects.json';

import profile from './profile.jpg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
            <a href="https://github.com/elanderos318?tab=overview&from=2019-09-01&to=2019-09-20" target = "_blank">Github</a> 
          </li>
          <li>
            <a href="https://www.linkedin.com/in/eduardo-landeros-100a8612b/" target="_blank">LinkedIn</a> 
          </li>
          <li>
            <span style={contactStyle}> email: </span>{header.contact.email} 
          </li>
          <li>
            <span style={contactStyle}> location: </span>Chicago, IL 
          </li>
        </ul>        

        {/* <img src={profile} alt="Eduardo's Profile Pic" className="profile-picture"></img> */}
        
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

    let containerClass;

    if ((i % 2) === 0) {
      containerClass = "project-container project-even"; 
    } else {
      containerClass = "project-container project-odd";
    }

    let projectLine;

    if (project["start-date"] === project["end-date"]) {
      projectLine = <span className="project-date">{project["start-date"]}</span>
    } else {
      projectLine = <span className="project-date">{project["start-date"]} - {project["end-date"]}</span>
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
          {projectLine}
          </div>
          {urlLine}
          <div className="project-description">
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    );
  })

  return (
    <div className="project-body">{projectElements}</div>
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

        <div className="work-container">
          <div className="work-header">
            <h1 className="work-title">Work Experience</h1>
          </div>
        </div>

        <Work />

        <div className = "project-break-container">
          <div className="project-break">
            <h1 className="project-break-title">Projects</h1>
          </div>
        </div>

        <Projects />

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
