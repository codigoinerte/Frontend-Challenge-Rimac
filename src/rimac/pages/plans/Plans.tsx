import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { RegisterContext } from "@/rimac/context/registerContext"
import { ArrowBack } from "@/rimac/icons"
import { use, useCallback, useEffect, useState } from "react"
import { CardPeople, Plan } from "./components";
import type { Plan as PlanType, PlansResponse, paramsPlanSelector, selectPlanType } from './types/types';

import '@/rimac/styles/swiper.min.css';
import '@/rimac/styles/pagination.min.css';
import '@/rimac/styles/customPlans.css';
import { cards } from './mock/target.audience';
import { useNavigate } from 'react-router';

const VITE_API = import.meta.env.VITE_API;

export const Plans = () => {
  

  const navigate = useNavigate();

  const { user, setPlanToUser } = use(RegisterContext)

  const [plans, setPlans] = useState<PlanType[]>([])
  const [selectedCard, setSelectedCard] = useState<selectPlanType | ''>(user.targetPeopleId || '');
  const [showPagination, setShowPagination] = useState(false);

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

  return (
    <>
      <div className="max-w-[650px] mb-8 text-center mx-auto">
        <h1 className="mb-2 font-lato text-[48px] font-bold leading-12 tracking-[-0.6px] text-[#141938] w-full max-md:text-[28px] max-md:text-left">{user.name} ¿Para quién deseas cotizar?</h1>
        <p className="font-lato text-[16px] leading-7 tracking-[0.1px] font-normal max-md:text-left">Selecciona la opción que se ajuste más a tus necesidades.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-5 justify-center">
        {
          cards.map(card => (<CardPeople key={card.id} {...card} onClick={() => setSelectedCard(card.id)} selectedCard={selectedCard} />))
        }
      </div>

      <div style={{ display : selectedCard != "" ? 'block' : 'none'}} className='mb-20 max-w-[985px] w-full mx-auto'>
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
          breakpoints={{
             
              // when window width is >= 320px
              0: {
                slidesPerView: 1
              },             
              // when window width is >= 640px
              768: {
                slidesPerView: 2
              },
              // when window width is >= 991px
              991: {
                slidesPerView: 3
              }
  
          }}    
          onSwiper={(swiper) => {
            console.log(swiper.pagination);
            setShowPagination(swiper.pagination.bullets.length >0)
          }}
          onSlideChange={() => console.log('Slide cambiado')}          
        >
          {
            plans.length > 0 &&
            plans.map((plan) => <SwiperSlide key={plan.name} className='flex-1 h-auto!'>
                <Plan {...plan} selectedCard={selectedCard as selectPlanType} onPlanSelected={handleAddPlan}/>
            </SwiperSlide>)
          }
        </Swiper>
         {/* Controles personalizados debajo */}
        {
          showPagination && (
            <div className="custom-controls">
              <button className="custom-prev">
                <ArrowBack width={32} height={32}/>
              </button>
              <div className="custom-pagination font-lato"></div>
              <button className="custom-next rotate-180">
                <ArrowBack width={32} height={32}/>
              </button>
            </div>
          )
        }
        
      </div>
    </>
  )
}
