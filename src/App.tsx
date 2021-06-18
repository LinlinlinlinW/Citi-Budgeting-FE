import React from 'react';
import './App.css';

import ProjectGetEntry from './components/ProjectGetEntry';
import ProjectUpdateEntry from './components/ProjectUpdateEntry';
import ProjectDelete from './components/ProjectDelete';
import ProjectList from './components/ProjectList';
import ProjectScan from './components/ProjectScan';
import ProjectAdd from './components/ProjectAdd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectGetEntry/>
        {/* <ProjectUpdateEntry/>*/}
        <ProjectAdd/>
        <br/>
        <ProjectScan/>
        <br/>
        <ProjectDelete/>
        <br/>
        <ProjectList/>
        <br/>
      </header>
      <div>
      </div>
    </div>
  );
}

export default App;
