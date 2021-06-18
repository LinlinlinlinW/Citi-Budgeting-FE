export interface Project {
    project_id: string;
    request_id: string;
    team: string;
    team_manager: string;
    request_reason: string;
    start_date: string;
    end_date: string;
    initial_budget?: number;
    most_recent_request_amt?: number;
    net_amount_remaining?: number;
}