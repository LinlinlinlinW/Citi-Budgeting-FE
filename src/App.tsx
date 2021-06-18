import React from 'react';
//import './App.css';
// import AddProject from './components/AddProject';
import StudentList from './components/ProjectList';
import Delete from './components/Delete';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StudentList/>
        <br/>
        <Delete />
        {/* <AddProject/> */}
      </header>
      <div>
      </div>
    </div>
  );
}

export default App;
