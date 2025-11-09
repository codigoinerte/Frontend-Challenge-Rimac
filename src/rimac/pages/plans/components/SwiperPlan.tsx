import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowBack } from "@/rimac/icons"
import { Plan } from "./Plan";
import type { paramsPlanSelector, Plan as PlanType, selectPlanType } from '../types/types';

import '@/rimac/styles/swiper.min.css';
import '@/rimac/styles/pagination.min.css';
import '@/rimac/styles/customPlans.css';

interface Props{
    plans: PlanType[];
    selectedCard: selectPlanType | '';
    handleAddPlan: (params:paramsPlanSelector) => void;
}

export const SwiperPlan:React.FC<Props> = ({ plans, selectedCard, handleAddPlan}) => {
  return (
    <>
        <Swiper
          slidesPerView={3}
          spaceBetween={32}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          pagination={{
            type: "fraction",
            el: '.custom-pagination',
          }}
          modules={[Pagination, Navigation]}
          className="py-10!"
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
          
          onResize={()=> {
            // console.log(e.params.pagination?.formatFractionCurrent());
            // console.log(e)
          }}
        >
          {
            plans.length > 0 &&
            plans.map((plan) => <SwiperSlide key={plan.name} className='flex-1 h-auto!'>
                <Plan {...plan} selectedCard={selectedCard as selectPlanType} onPlanSelected={handleAddPlan}/>
            </SwiperSlide>)
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
    </>
  )
}
