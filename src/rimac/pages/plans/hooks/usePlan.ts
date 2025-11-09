import { use, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { paramsPlanSelector, PlansResponse, Plan as PlanType, selectPlanType } from "../types/types";
import { RegisterContext } from "@/rimac/context/registerContext";

const VITE_API = import.meta.env.VITE_API;

export const usePlan = () => {

    const navigate = useNavigate();

    const { user, setPlanToUser } = use(RegisterContext)

    const [plans, setPlans] = useState<PlanType[]>([])
    const [selectedCard, setSelectedCard] = useState<selectPlanType | ''>(user.targetPeopleId || '');

    const getPlans = useCallback(async ():Promise<PlansResponse> => {
        const response = await fetch(`${VITE_API}/plans.json`);
        const data = await response.json();
        return data;    
    }, []);


    useEffect(() => {
        (async ()=> {
        try {
            const plans = await getPlans();
            setPlans(plans.list.filter((plan) => plan.age >= user.age));
        } catch {
            console.log("Fallo en la petición de planes");
        }
        
        })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  const handleAddPlan = ({ name, price }:paramsPlanSelector) => {
    setPlanToUser({
      isForMe: selectedCard=="para-mi", 
      planName: name,
      planPrice: price,
      targetPeopleId: selectedCard,
    });
    navigate("/planes/resumen");
  }


  return {
    user,
    plans,
    selectedCard,
    setSelectedCard,
    handleAddPlan,
  }
}
