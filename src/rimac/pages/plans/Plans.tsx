import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { RegisterContext } from "@/rimac/context/registerContext"
import { ArrowBack, Person, PersonPlus } from "@/rimac/icons"
import { use, useCallback, useEffect, useState } from "react"
import { CardPeople, Plan } from "./components";
import type { Plan as PlanType, PlansResponse } from './types/types';

import '@/rimac/styles/swiper.min.css';
import '@/rimac/styles/pagination.min.css';
import '@/rimac/styles/customPlans.css';

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

  const [plans, setPlans] = useState<PlanType[]>([])
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
      <div className="max-w-[700px] mb-8 text-center mx-auto">
        <h1 className="mb-2 font-lat text-[48px] font-bold leading-12 tracking-[-0.6px] text-[#141938] w-full">{user.name} ¿Para quién deseas cotizar?</h1>
        <p className="font-lato text-[16px] leading-7 tracking-[0.1px] font-normal">Selecciona la opción que se ajuste más a tus necesidades.</p>
      </div>

      <div className="flex flex-row gap-8 mb-5 justify-center">
        {
          cards.map(card => (<CardPeople key={card.id} {...card} onClick={() => setSelectedCard(card.id)} selectedCard={selectedCard} />))
        }
      </div>

      <div style={{ display : selectedCard != "" ? 'block' : 'none'}} className='mb-20 max-w-[985px] w-full'>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          pagination={{
            type: "fraction",
            el: '.custom-pagination',
          }}
          modules={[Pagination, Navigation]}
          className="flex px-10! py-10!"
          direction='horizontal'
          onSwiper={(swiper) => console.log('Swiper inicializado', swiper)}
          onSlideChange={() => console.log('Slide cambiado')}          
        >
          {
            plans.length > 0 &&
            plans.map((plan) => <SwiperSlide key={plan.name} className='flex-1 h-auto!'><Plan {...plan} /></SwiperSlide>)
          }
        </Swiper>
         {/* Controles personalizados debajo */}
        <div className="custom-controls">
          <button className="custom-prev">
            <ArrowBack width={32} height={32}/>
          </button>
          <div className="custom-pagination font-lato"></div>
          <button className="custom-next rotate-180">
            <ArrowBack width={32} height={32}/>
          </button>
        </div>
        
      </div>
    </>
  )
}
