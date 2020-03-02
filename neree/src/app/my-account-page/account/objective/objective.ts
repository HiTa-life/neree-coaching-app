export interface Objective  {
    id:number;
    objective_title: string;     
    beginning_date: string;
    understandable_objective: boolean;
    personal_objective:boolean;
    realizable_objective: boolean;
    ambitious_objective:boolean;
    mesurable_action: boolean;
    ecological_action: boolean;  
    isUpdating: boolean;
    token: string;
} 