import React from 'react';
import './App.css';

import ProjectDelete from './components/ProjectDelete';
import ProjectList from './components/ProjectList';
import ProjectScan from './components/ProjectScan';
import ProjectAdd from './components/ProjectAdd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
