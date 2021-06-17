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
}

export default new ProjectService();