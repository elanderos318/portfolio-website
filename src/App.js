import React from 'react';
import logo from './logo.svg';
import './App.css';
import header from './header.json';
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

          <p class="page-description">This is my résumé webpage where you can find all the details about my skills, experience, and background</p>
        </div>


      </div>

    </div>
  )
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
