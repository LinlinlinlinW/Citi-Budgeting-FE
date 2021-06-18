import React, { FunctionComponent, useState } from 'react';
import ProjectService from '../services/ProjectService';
import { Project } from '../types/types';
//import './App.css';
// import AddProject from './components/AddProject';
//import StudentList from './components/ProjectList';
export interface ProjectDeleteItem {}

const ProjectDeleteEntry: FunctionComponent<ProjectDeleteItem> = () => {
  let project_got = {} as Project;
  const [oneProject, deleteOneProject] = useState(project_got);
  const [project_id, setProjectID] = useState("");
  const [request_id, setRequestID] = useState("");
function DeleteOneProject(): void {
  ProjectService.deleteOneProject(project_id,request_id).then((response: any) => {
    deleteOneProject(response.data);
    console.log(response.data)
});
}

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
      <button className="btn btn-primary" onClick={DeleteOneProject}>
                Delete Project
       </button>
      
    </div>
  );

  }
export default ProjectDeleteEntry;