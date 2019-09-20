import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './header.json';

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

function Header() {
  return(
    <div>
      <ul>
        <li>
          {data.name}
        </li>
        <li>
          {data.age}
        </li>
        <li>
          {data.occupation}
        </li>
      </ul>
    </div>
  )
}


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header />
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
