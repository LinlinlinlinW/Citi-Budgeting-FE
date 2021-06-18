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

    getOneProject(project_id: string, request_id: string) {
        const PROJECT_API_URL_GET = 'https://a6dxgre3d8.execute-api.us-east-1.amazonaws.com/prd/project_id/' + project_id + '/request_id/' + request_id;
        return axios.get(PROJECT_API_URL_GET);
    }

    updateOneProject(project_id: string, request_id: string, request_reason: string, request_amount: string) {
        const PROJECT_API_URL_PUT = 'https://a6dxgre3d8.execute-api.us-east-1.amazonaws.com/prd/project_id/' + project_id + '/request_id/' + request_id;
        
        const content = {
            "request_reason": request_reason,
            "request_amount": request_amount
        }
        return axios.put(PROJECT_API_URL_PUT, content);
    }

    deleteOneProject(project_id: string, request_id: string) {
        // delete function
        const PROJECT_API_URL_GET = 'https://a6dxgre3d8.execute-api.us-east-1.amazonaws.com/prd/project_id/' + project_id + '/request_id/' + request_id;
        return axios.delete(PROJECT_API_URL_GET);
    }
  
    scanProjects(team_name: string, net_amount_remaining: string) {
        const PROJECT_API_URL_SCAN = 'https://a6dxgre3d8.execute-api.us-east-1.amazonaws.com/prd/team/' + team_name + '/net_amount_remaining/' + net_amount_remaining;
        return axios.get(PROJECT_API_URL_SCAN);
    }
}

export default new ProjectService();