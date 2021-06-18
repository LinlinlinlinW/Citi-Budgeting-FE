import React, { FunctionComponent, useState } from "react";
import ProjectService from "../services/ProjectService";
import {Project} from "../types/types";

export interface ProjectUpdateItem {

}

const ProjectUpdateEntry: FunctionComponent<ProjectUpdateItem> = () => {

    let project_got = {} as Project;
    const [oneProject, setOneProject] = useState(project_got);
    const [project_id, setProjectID] = useState("");
    const [request_id, setRequestID] = useState("");
    const [request_reason, setRequestReason] = useState("");
    const [request_amount, setRequestAmount] = useState("");

    function updateOneProject(): void {
        ProjectService.updateOneProject(project_id, request_id, request_reason, request_amount).then((response: any) => {
            setOneProject(response.data);
            console.log(response.data)
        });
    }

    

    return <div>
        <h1 className="text-center">Update entry</h1>
        <div>
            <input type="text"
                value={project_id}
                placeholder="Enter a project id"
                onChange={e => setProjectID(e.target.value)}
                style={{marginLeft: "20px", marginRight: "20px", borderRadius: "5px"}}
            />
            
            <input type="text"
                value={request_id}
                placeholder="Enter a request id"
                onChange={e => setRequestID(e.target.value)}
                style={{marginRight: "20px",  borderRadius: "5px"}}
            />
            <input type="text"
                value={request_reason}
                placeholder="Enter a request reason"
                onChange={e => setRequestReason(e.target.value)}
                style={{marginRight: "20px",  borderRadius: "5px"}}
            />
            <input type="text"
                value={request_amount}
                placeholder="Enter a request amount"
                onChange={e => setRequestAmount(e.target.value)}
                style={{marginRight: "20px",  borderRadius: "5px"}}
            />
            
            <button className="btn btn-primary" onClick={updateOneProject}>
                Update Project
            </button>
        </div>
        <br></br>
        <table style={{borderRadius: "5px"}} className="table table-striped table-dark table-bordered table-hover">
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
    </div>;
};

export default ProjectUpdateEntry;