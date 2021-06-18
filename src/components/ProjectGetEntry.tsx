import React, { FunctionComponent, useState } from "react";
import ProjectService from "../services/ProjectService";
import {Project} from "../types/types";

export interface ProjectGetItem {

}

const ProjectGetEntry: FunctionComponent<ProjectGetItem> = () => {

    let project_got = {} as Project;
    const [oneProject, setOneProject] = useState(project_got);
    const [project_id, setProjectID] = useState("");
    const [request_id, setRequestID] = useState("");

    function getOneProject(): void {
        ProjectService.getOneProject(project_id, request_id).then((response: any) => {
            setOneProject(response.data);
            console.log(response.data)
        });
    }


    return (
    <div className="container" style={{marginLeft: "40px", marginRight: "40px", marginTop: "40px", marginBottom: "40px",  borderRadius: "5px", color: "#000"}} >
    <h1 className="text-center" style={{color: "#000", marginBottom: "20px"}}>Find a project by IDs</h1>
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
                value={project_id}
                className="form-control"
                placeholder="Enter a request ID"
                onChange={e => setRequestID(e.target.value)}
                style={{marginLeft: "20px", marginRight: "20px", borderRadius: "5px"}}
            />
        </div>
      </div>
      <div className="form-group">
        <button className="btn btn-primary" onClick={getOneProject} style={{backgroundColor: "#5e35b1"}}>
          Delete a Project
        </button>
      </div>
    </form>
    <br></br>
        <table style={{marginLeft: "40px", marginRight: "40px", marginTop: "40px", marginBottom: "40px", color: "#000"}} className="table table-striped table-light table-bordered table-hover">
            <thead>
                <tr>
                    <td>Project ID</td>
                    <td>Request ID</td>
                    <td>Team</td>
                    <td>Team Manager</td>
                    <td>Request Reason</td>
                    <td>Start Date</td>
                    <td>End Date</td>
                    <td>Initial Budget</td>
                    <td>Request Amount</td>
                    <td>Net Amount Remaining</td>
                </tr>
            </thead>
            <tbody>

                <tr key={oneProject.project_id}>
                    <td>{oneProject.project_id}</td>
                    <td>{oneProject.request_id}</td>
                    <td>{oneProject.team}</td>
                    <td>{oneProject.team_manager}</td>
                    <td>{oneProject.request_reason}</td>
                    <td>{oneProject.start_date}</td>
                    <td>{oneProject.end_date}</td>
                    <td>{oneProject.initial_budget}</td>
                    <td>{oneProject.most_recent_request_amt}</td>
                    <td>{oneProject.net_amount_remaining}</td>
                </tr>
                    
            </tbody>
        </table>
  </div>
)
};

export default ProjectGetEntry;