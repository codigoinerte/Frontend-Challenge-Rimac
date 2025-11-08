import type { JSX } from "react";

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

export interface targetAudience {
    id: selectPlanType;
    title: string;
    description: string;
    icon: JSX.Element;
    isSelected: boolean;
}
export interface paramsPlanSelector {
    name: string;
    price: string;
    discount: string;
}