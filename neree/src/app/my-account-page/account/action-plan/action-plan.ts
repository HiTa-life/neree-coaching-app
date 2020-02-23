export interface ActionPlan {
    id: number;
    num:number;
    description_objective: string;
    positive_objective:string;
    beginning_date: string;
    end_date: string;
    efficience_action: string;
    expected_result: number;
    result:string;
   specific_action: boolean;
    mesurable_action: boolean;
     motivating_action: boolean;
    ecological_action: boolean;
    positive_action: boolean;
    realizable_action: boolean;
     internal_external_resources: string;
    resources: string;
    obstacles:string;
    deflect_obstacles: string;
    isUpdating: boolean;
    token: string;
}