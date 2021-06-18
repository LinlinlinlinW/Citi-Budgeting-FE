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

  return <div className="container" style={{marginLeft: "40px", marginRight: "40px",  borderRadius: "5px"}} >
    <h1 className="text-center" style={{color: "#000", marginBottom: "20px"}}>Delete a Project</h1>
    <form>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">
          Project ID:
        </label>
        <div className="col-sm-10">
            <input 
                type="text"
                value={project_id}
                className="form-control"
                placeholder="Enter a project ID"
                onChange={e => setProjectID(e.target.value)}
                style={{marginLeft: "20px", marginRight: "20px", borderRadius: "5px"}}
            />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">
          Request ID:
        </label>
        <div className="col-sm-10">
            <input 
                type="text"
                value={request_id}
                className="form-control"
                placeholder="Enter a request ID"
                onChange={e => setRequestID(e.target.value)}
                style={{marginLeft: "20px", marginRight: "20px", borderRadius: "5px"}}
            />
        </div>
      </div>
      <div className="form-group">
        <button className="btn btn-primary" onClick={DeleteOneProject} style={{backgroundColor: "#5e35b1"}}>
          Delete a Project
        </button>
      </div>
    </form>
  </div>


  }
export default ProjectDeleteEntry;
