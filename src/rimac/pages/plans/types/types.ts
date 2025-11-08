export interface PlansResponse {
    list: Plan[];
}
export type selectPlanType = "para-mi" | "para-alguien";
export interface Plan {
    name:        string;
    price:       number;
    description: string[];
    age:         number;
}
