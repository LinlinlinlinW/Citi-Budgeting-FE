import React, { FunctionComponent, useState } from 'react';
import ProjectService from '../services/ProjectService';
import { Project } from '../types/types';
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
    <div className="Delete" style = {{marginLeft: "40px", marginRight: "40px", borderRadius: "5px"}}>
      <h1 className="text-center">Delete a Project</h1>
      <label >
        <input type="text" placeholder="enter a project id" value={project_id}
        style={{marginLeft: "20px", marginRight: "20px",  borderRadius: "5px"}}
        onChange ={e =>setProjectID(e.target.value)}></input>
      </label>
      <label >
        <input type="text" placeholder="enter a request id" value={request_id}
        style={{marginLeft:"20px", marginRight: "20px",  borderRadius: "5px"}}
        onChange ={e =>setRequestID(e.target.value)}></input>
      </label>
      <button className="btn btn-primary" onClick={DeleteOneProject}>
                Delete Project
       </button>
      
    </div>
  );

  }
export default ProjectDeleteEntry;