import React from 'react';

import Delete from './components/Delete';
import './App.css';
import ProjectList from './components/ProjectList';
import ProjectScan from './components/ProjectScan';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectScan/>
        <br/>
        <ProjectList/>
        <br/>
        <Delete />
      </header>
      <div>
      </div>
    </div>
  );
}

export default App;
