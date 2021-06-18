import React, { FunctionComponent, useState } from "react";
import ProjectService from "../services/ProjectService";
import './../App.css';
export interface AddProjectProps {}

const ProjectAdd: FunctionComponent<AddProjectProps> = () => {
    const [project_id, setProjectID] = useState<string>("");
    const [request_id, setRequestID] = useState<string>("");
    const [team_manager, setTeamManager] = useState<string>("");
    const [team, setTeam] = useState<string>("");
    const [request_reason, setRequestReason] = useState<string>("");
    const [start_date, setStartDate] = useState<string>("");
    const [end_date, setEndDate] = useState<string>("");
    const [initial_budget, setInitialBudget] = useState<number>();
    
    function addProject(e: any): void {
        e.preventDefault();
        const project = {
            project_id: project_id,
            request_id: request_id,
            team_manager: team_manager,
            team: team,
            request_reason: request_reason,
            start_date: start_date,
            end_date: end_date,
            initial_budget: initial_budget,
            net_amount_remaining: initial_budget,
            most_recent_request_amt: 0
        };
        ProjectService.createProject(project).then(() => {
            setProjectID("");
            setRequestID("");
            setTeamManager("");
            setTeam("");
            setRequestReason("");
            setStartDate("");
            setEndDate("");
            setInitialBudget(0);
        });
    }

    return (
        
        <div className="container" style={{color: "#000"}}>
            <h1 className="text-center" style={{marginTop: "20px"}}>Add a Project</h1>
            <form>
                <div className="form-group row">
                    <label htmlFor="project_id" className="col-sm-2 col-form-label">
                        Project ID:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="project_id"
                            value={project_id}
                            onChange={(e) => setProjectID(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="request_id" className="col-sm-2 col-form-label">
                        Request ID:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="request_id"
                            value={request_id}
                            onChange={(e) => setRequestID(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="team_manager" className="col-sm-2 col-form-label">
                        Team Manager:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="team_manager"
                            value={team_manager}
                            onChange={(e) => setTeamManager(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="team" className="col-sm-2 col-form-label">
                        Team:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="team"
                            value={team}
                            onChange={(e) => setTeam(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="request_reason" className="col-sm-2 col-form-label">
                        Reason:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="request_reason"
                            value={request_reason}
                            onChange={(e) => setRequestReason(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="start_date" className="col-sm-2 col-form-label">
                        Start Date:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="start_date"
                            value={start_date}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="end_date" className="col-sm-2 col-form-label">
                        End Date:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="end_date"
                            value={end_date}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="initial_budget" className="col-sm-2 col-form-label">
                        Initial Budget:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            id="initial_budget"
                            value={initial_budget}
                            onChange={(e) => setInitialBudget(+e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={addProject} style={{backgroundColor: "#5e35b1"}}>
                        Add Project
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProjectAdd;