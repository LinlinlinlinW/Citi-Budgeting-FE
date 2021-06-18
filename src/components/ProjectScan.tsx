import React, { FunctionComponent, useState } from "react";
import ProjectService from "../services/ProjectService";
import {Project} from "../types/types";

export interface ProjectUpdateItem {

}

const ProjectScan: FunctionComponent<ProjectUpdateItem> = () => {

    let emptyProjectsList: Project[] = [];
    const [qualifiedProjs, scanProjects] = useState(emptyProjectsList);
    const [team_name, setTeamName] = useState("");
    const [net_amount_remaining, setNAR] = useState("");

    function scanProjectsOnClick(): void {
        ProjectService.scanProjects(team_name, net_amount_remaining).then((response: any) => {
            scanProjects(response.data);
        });
    }

    return <div className="container" style={{marginLeft: "40px", marginRight: "40px",  borderRadius: "5px", color: "#000"}} >
            <h1 className="text-center" style={{color: "#000", marginBottom: "20px"}}>Scan Projects</h1>
        <div>
            <input type="text"
                value={team_name}
                placeholder="Enter a team name"
                onChange={e => setTeamName(e.target.value)}
                style={{marginLeft: "20px", marginRight: "20px",  borderRadius: "5px"}}
            />
            <input 
                type="text"
                value={net_amount_remaining}
                placeholder="Enter a expected net amount remaining"
                onChange={e => setNAR(e.target.value)}
                style={{marginLeft: "20px", marginRight: "20px",  borderRadius: "5px"}}
            />

            <button className="btn btn-primary" onClick={scanProjectsOnClick} style={{backgroundColor: "#5e35b1"}}>
                Scan Projects
            </button>
        </div>
        <br></br>
        <table style={{borderRadius: "5px"}} className="table table-striped table-light table-bordered table-hover"></table>
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
                {
                    qualifiedProjs.map(
                        project => 
                        <tr key={project.project_id}>
                            <td>{project.project_id}</td>
                            <td>{project.request_id}</td>
                            <td>{project.team}</td>
                            <td>{project.team_manager}</td>
                            <td>{project.request_reason}</td>
                            <td>{project.start_date}</td>
                            <td>{project.end_date}</td>
                            <td>{project.initial_budget}</td>
                            <td>{project.most_recent_request_amt}</td>
                            <td>{project.net_amount_remaining}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        </div>

};

export default ProjectScan;