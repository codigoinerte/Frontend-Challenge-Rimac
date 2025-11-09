import { Header } from '../../components'
import { Footer, Form, Headings } from './components'

export const Home = () => {
    return (
        <div className="flex flex-col flex-1 w-full justify-center items-center md:bg-[url('/images/blur-asset-left.svg'),url('/images/blur-asset-right.svg')] bg-no-repeat md:bg-position-[bottom_left,top_right] bg-[url('/images/blur-asset-left-mobile.svg'),url('/images/blur-asset-right-mobile.svg')] bg-position-[bottom_100px_left_0px,top_right]">
            {/* Header */}
            <Header />

            {/* Body */}
            <main className="max-w-[1120px] w-full px-6 md:flex md:flex-row flex-1 mt-8 mb-24 md:mb-24 z-1">
                <div className='flex flex-row border-b border-[#CCD1EE] pb-6 mb-6 md:mb-0 md:border-0 md:pb-0'>
                    <Headings className='md:hidden flex-1 w-full me-3'/>
                    <img 
                        src="/images/hero-home.png" 
                        alt="hero" 
                        title="hero"
                        className="max-[407px]:max-w-[125px] max-w-40 md:max-w-[480px] md:flex w-full sm:w-[350px] lg:w-auto rounded-3xl h-auto self-start flex-1"
                    />
                </div>

                <div className="ms-0 md:ms-8 lg:ms-32 md:max-w-[351px] h-auto">

                    <Headings className='hidden md:block' />

                    <p className="text-[#03050F] text-[14px] leading-5 tracking-[0.2px] font-semibold mb-6">
                        T&uacute; eliges cu&aacute;nto pagar. Ingresa tus datos, cotiza y recibe nuestra asesor&iacute;a. 100% online.
                    </p>

                    <Form />

                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}
