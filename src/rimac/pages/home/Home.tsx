import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Header } from '../../components'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Headings } from './components'

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
                        className="max-w-40 md:max-w-[480px] md:flex w-full sm:w-[350px] lg:w-auto rounded-3xl h-auto self-start flex-1"
                    />
                </div>

                <div className="ms-0 md:ms-8 lg:ms-32 md:max-w-[351px] h-auto">

                    <Headings className='hidden md:block' />

                    <p className="text-[#03050F] text-[14px] leading-5 tracking-[0.2px] font-semibold mb-6">
                        T&uacute; eliges cu&aacute;nto pagar. Ingresa tus datos, cotiza y recibe nuestra asesor&iacute;a. 100% online.
                    </p>

                    <form>

                        {/* seccion dni */}
                        <div className="flex items-stretch gap-0 rounded-lg border border-[#5E6488] overflow-hidden bg-white mb-4">
                        <div className="flex-none">
                            <Select defaultValue="dni">
                            <SelectTrigger className="h-full! w-40 border-0 border-r rounded-none focus:ring-0">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="dni">DNI</SelectItem>
                                <SelectItem value="passport">Pasaporte</SelectItem>
                                <SelectItem value="ce">CE</SelectItem>
                            </SelectContent>
                            </Select>
                        </div>
                        <div className="flex-1 px-4 py-2">
                            <Label htmlFor="document-number" className="text-[#5E6488] font-normal text-[12px] leading-4">
                                Nro. de documento
                            </Label>
                            <Input
                                id="document-number"
                                type="text"
                                defaultValue="30216147"
                                className="border-0 p-0 h-auto text-base focus-visible:ring-0 shadow-none text-[#03050F] text-[16px] leading-6"
                            />
                        </div>
                        </div>

                        {/* seccion celular */}
                        <div className="rounded-lg border border-[#5E6488] overflow-hidden bg-white px-4 py-2 mb-6">
                            <Label htmlFor="phone" className="text-[#5E6488] font-normal text-[12px] leading-4">
                                Celular
                            </Label>
                            <Input
                                id="phone"
                                type="tel"
                                defaultValue="5130216147"
                                className="border-0 p-0 h-auto text-base focus-visible:ring-0 shadow-none text-[#03050F] text-[16px] leading-6"
                            />
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                            <Checkbox id="terms" className="bg-[#0A051E] "/>
                            <Label htmlFor="terms" className="font-normal text-[12px] leading-5 tracking-[0.1px] text-[#0A051E]">Acepto lo Política de Privacidad</Label>
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                            <Checkbox id="politics" className="bg-[#0A051E] "/>
                            <Label htmlFor="politics" className="font-normal text-[12px] leading-5 tracking-[0.1px] text-[#0A051E]">Acepto la Política Comunicaciones Comerciales</Label>
                        </div>

                        <a href="#" className="underline text-[12px] font-semibold leading-5 mb-6 inline-block">Aplican Términos y Condiciones.</a>

                        <button className="font-bold text-[20px] leading-6 tracking-[0.4px] bg-[#03050F] rounded-[40px] px-10 py-5 text-white cursor-pointer w-full md:w-auto">Cotiza aqu&iacute;</button>

                    </form>

                </div>
            </main>

            {/* Footer */}
            <footer className="w-full bg-[#03050F] z-1">
            <div className="max-w-[1120px] m-auto flex flex-row justify-between items-center py-8 px-6">
                <img src="/images/logo-dark.svg" alt="Rimac" title="Rimac" />

                <p className="text-[#F8F9FF] text-[14px] leading-4 font-normal">&copy; {new Date().getFullYear()} RIMAC Seguros y Reaseguros.</p>
            </div>
            </footer>
        </div>
    )
}
