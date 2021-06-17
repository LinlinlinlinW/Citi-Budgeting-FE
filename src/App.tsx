import React from 'react';
import './App.css';
// import AddProject from './components/AddProject';
import StudentList from './components/ProjectList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StudentList/>
        <br/>
        {/* <AddProject/> */}
      </header>
    </div>
  );
}

export default App;
