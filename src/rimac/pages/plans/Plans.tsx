import { Swiper, SwiperSlide } from 'swiper/react';

import { RegisterContext } from "@/rimac/context/registerContext"
import { Clinic, Home, Person, PersonPlus } from "@/rimac/icons"
import { use, useCallback, useEffect, useState } from "react"
import { Cards } from "./components";
import type { Plan, PlansResponse } from './types/types';
import { currencyConvert } from '@/rimac/helpers/currencyConvert';

 const cards = [
    {
      id: 'para-mi',
      title: 'Para mi',
      description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
      icon: <Person />,
      isSelected: false
    },
    {
      id: 'para-alguien',
      title: 'Para alguien más',
      description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
      icon: <PersonPlus />,
      isSelected: false
    }
];

const VITE_API = import.meta.env.VITE_API;

export const Plans = () => {

  const [plans, setPlans] = useState<Plan[]>([])
  const [selectedCard, setSelectedCard] = useState('');
  const { user } = use(RegisterContext)

  const getPlans = useCallback(async ():Promise<PlansResponse> => {
    const response = await fetch(`${VITE_API}/plans.json`);
    const data = await response.json();
    return data;    
  }, []);


  useEffect(() => {
    
    (async ()=> {
      try {
        const plans = await getPlans();
        setPlans(plans.list);
      } catch {
        console.log("Fallo en la petición de planes");
      }
      
    })();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <>
      <div className="max-w-[700px] mb-8 text-center">
        <h1 className="mb-2 font-lat text-[48px] font-bold leading-12 tracking-[-0.6px] text-[#141938] w-full">{user.name} ¿Para quién deseas cotizar?</h1>
        <p className="font-lato text-[16px] leading-7 tracking-[0.1px] font-normal">Selecciona la opción que se ajuste más a tus necesidades.</p>
      </div>

      <div className="flex flex-row gap-8 mb-5">
        {
          cards.map(card => (<Cards key={card.id} {...card} onClick={() => setSelectedCard(card.id)} selectedCard={selectedCard} />))
        }
      </div>

      <div style={{ display : selectedCard != "" ? 'block' : 'none'}} className='mb-20'>
          {
            plans.length > 0 &&
            plans.map((plan) => {
              return (
                <div key={plan.name} className='shadow-[0px_1px_32px_0px_#AEACF359] px-8 pt-[68px] pb-6 rounded-3xl md:max-w-[288px]'>
                  <div className='flex flex-row justify-between'>
                    <div>
                      <h3 className='font-lato text-[24px] leading-8 font-black text-[#141938]'>{plan.name}</h3>
                      <h4 className='font-lato text-[12px] leading-2 font-black text-[#7981B2] mt-6 mb-1'>COSTO DEL PLAN</h4>
                      <p className='font-lato text-[20px] leading-7 font-black text-[#141938] tracking-[-0.2px]'>{currencyConvert(plan.price)}</p>
                    </div>
                    <div className='self-start'>
                      {
                        plan.name.includes("Clínica") ? <Clinic /> : <Home />
                      }
                    </div>
                  </div>
                  <div className='border-b border-[#D7DBF5] h-px w-full my-6'></div>
                  
                  <ul className='list-disc ps-7'>
                      {
                        plan.description.map(item => (
                          <li key={item} className='font-lato font-normal text-[16px] leading-7 tracking-[0.1px] mb-6 '>
                            {item}
                          </li>
                        ))
                      }
                  </ul>

                  <button className='w-full bg-[#FF1C44] text-white font-lato font-bold text-[18px] leading-5 tracking-[0.4px] py-3.5 rounded-4xl'>Seleccionar Plan</button>
                </div>
              )
            })
          }
      </div>
    </>
  )
}
