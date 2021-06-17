import React, { FunctionComponent, useEffect, useState } from "react";
import ProjectService from "../services/ProjectService";
import {Project} from "../types/types";

export interface ProjectListProps {

}

const ProjectList: FunctionComponent<ProjectListProps> = () => {

    const emptyProjectsList: Project[] = [];
    const [allProjects, setAllProjects] = useState(emptyProjectsList);

    function getAllProjects(): void {
        ProjectService.getProjects().then((response: any) => {
            setAllProjects(response.data);
            console.log(response.data)
        });
    }

    useEffect(() => {
        getAllProjects();
    }, [allProjects]);

    return <div>
        <h1 className="text-center">List of Projects</h1>
        <table className="table table-striped table-dark table-bordered table-hover">
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
                    <td>Most Recent Request Amount</td>
                    <td>Net Amount Remaining</td>
                </tr>
            </thead>
            <tbody>
                {
                    allProjects.map(
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
    </div>;
};

export default ProjectList;
