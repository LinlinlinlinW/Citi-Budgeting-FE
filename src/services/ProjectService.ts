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

    updateOneProject(project_id: string, request_id: string) {
        const PROJECT_API_URL_PUT = 'https://a6dxgre3d8.execute-api.us-east-1.amazonaws.com/prd/project_id/' + project_id + '/request_id/' + request_id;
        return axios.put(PROJECT_API_URL_PUT);
    }
}

export default new ProjectService();