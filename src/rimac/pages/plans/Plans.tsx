import { CardPeople, SwiperPlan } from "./components";
import { cards } from './mock/target.audience';
import { usePlan } from './hooks/usePlan';

export const Plans = () => {
  
  const { user, plans, selectedCard, setSelectedCard, handleAddPlan} = usePlan();
 
  return (
    <>
      <div className="max-w-[650px] mb-8 text-center mx-auto">
        <h1 className="mb-2 font-lato text-[48px] font-bold leading-12 tracking-[-0.6px] text-[#141938] w-full max-md:text-[28px] max-md:text-left">{user.name} ¿Para quién deseas cotizar?</h1>
        <p className="font-lato text-[16px] leading-7 tracking-[0.1px] font-normal max-md:text-left">Selecciona la opción que se ajuste más a tus necesidades.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-5 justify-center">
        { cards.map(card => (<CardPeople key={card.id} {...card} onClick={() => setSelectedCard(card.id)} selectedCard={selectedCard} />)) }
      </div>

      <div style={{ display : selectedCard != "" ? 'block' : 'none'}} className='mb-20 max-w-[985px] md:w-full w-auto mx-auto max-md:-ms-6 max-md:-me-6'>
        <SwiperPlan plans={plans} selectedCard={selectedCard} handleAddPlan={handleAddPlan}/>
      </div>
    </>
  )
}
