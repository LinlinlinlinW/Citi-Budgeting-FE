import axios from 'axios';
import { Project } from '../types/types';


const PROJECTS_API_URL = 'https://a6dxgre3d8.execute-api.us-east-1.amazonaws.com/prd/projects';

class ProjectService {
    
    getProjects() {
        return axios.get(PROJECTS_API_URL);
    }

    createProject(project: Project) {
        return axios.post(PROJECTS_API_URL, project)
    }

    scanProjects(team_name: string, net_amount_remaining: string) {
        const PROJECT_API_URL_SCAN = 'https://a6dxgre3d8.execute-api.us-east-1.amazonaws.com/prd/team/' + team_name + '/net_amount_remaining/' + net_amount_remaining;
        return axios.get(PROJECT_API_URL_SCAN);
    }
}

export default new ProjectService();