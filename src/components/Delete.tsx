import React, { useState } from 'react';
//import './App.css';
// import AddProject from './components/AddProject';
//import StudentList from './components/ProjectList';
const [project_id, setProjectID] = useState("");
const [request_id, setRequestID] = useState("");

function Delete() {
  return (
    <div className="Delete">
      <label >
        input project id:
        <input type="text" placeholder="project id" value={project_id}
        onChange ={e =>setProjectID(e.target.value)}></input>
      </label>
      <label >
        input request id:
        <input type="text" placeholder="request id" value={request_id}
        onChange ={e =>setRequestID(e.target.value)}></input>
      </label>

      
    </div>
  );
}

export default Delete;