import React from 'react';
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
      </header>
    </div>
  );
}

export default App;
