import React from 'react';
import './App.css';
// import AddProject from './components/AddProject';
// import ProjectList from './components/ProjectList';
import ProjectGetEntry from './components/ProjectGetEntry';
import ProjectUpdateEntry from './components/ProjectUpdateEntry';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectGetEntry/>
        {/* <ProjectUpdateEntry/>*/}
        <br/>
        {/* <AddProject/> */}
      </header>
    </div>
  );
}

export default App;
