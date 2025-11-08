import { Link } from 'react-router'
import { Phone } from '../icons'

export const Header = () => {
    return (
        <header className="max-w-[1120px] w-full px-6 flex flex-row justify-between py-3.5 z-1">
          <Link to={"/"}>
            <img 
              src="/images/logo.svg" 
              alt="Rimac" 
              title="Rimac" 
              className="max-w-[65.05px] md:max-w-[79px]"/>
          </Link>
          <div className="flex flex-row justify-center items-center gap-4">
            <span className="hidden md:inline-block font-semibold text-[12px]">¡Compra por este medio!</span>
            <a href="tel:014116001" className="cursor-pointer font-bold inline-block text-[16px] md:text-[18px] text-[#03050F] leading-[18px]">
                <Phone width={20} height={20} className="inline-block"/> (01) 411 6001
            </a>
          </div>
        </header>
    )
}
