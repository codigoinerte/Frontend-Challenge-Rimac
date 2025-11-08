
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Phone } from "./rimac/icons"
import { Label } from "./components/ui/label"
import { Input } from "./components/ui/input"
import { Checkbox } from "./components/ui/checkbox"

export const Rimac = () => {


  return (
    <div className="flex flex-col flex-1 w-full justify-center items-center">
        {/* Header */}
        <header className="max-w-[1120px] w-full px-6 flex flex-row justify-between py-3.5 z-1">
          <img 
            src="/images/logo.svg" 
            alt="Rimac" 
            title="Rimac" 
            className="max-w-[79px]"            
          />
          <div className="flex flex-row justify-center items-center gap-4">
            <span className=" font-semibold text-[12px]">¡Compra por este medio!</span>
            <a href="tel:014116001" className="cursor-pointer font-bold inline-block text-[18px] text-[#03050F] leading-[18px]"><Phone width={20} height={20} className="inline-block"/> (01) 411 6001</a>
          </div>
        </header>

        {/* Body */}
        <main className="max-w-[1120px] w-full px-6 flex flex-row flex-1 mt-8 mb-24 z-1">
            <img 
              src="/images/hero-home.png" 
              alt="hero" 
              title="hero" 
              className="w-full max-w-[480px] rounded-3xl h-auto self-start"
            />

            <div className="ms-32 max-w-[351px]">
              <span className="py-1 px-2 rounded-sm font-bold text-[14px] leading-4 tracking-[0.4px] text-[#03050F] bg-[linear-gradient(86.01deg,#00F4E2_0%,#00FF7F_100%)] h-6 inline-flex items-center mb-4">
                  Seguro Salud Flexible
              </span>
              <h1 className="font-bold text-[32px] max-w-[352px] leading-10 text-[#03050F] mb-2">
                  Creado para ti y tu familia
              </h1>

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

                <button className="font-bold text-[20px] leading-6 tracking-[0.4px] bg-[#03050F] rounded-[40px] px-10 py-5 text-white cursor-pointer">Cotiza aqu&iacute;</button>

              </form>

            </div>
        </main>

        {/* Footer */}
        <footer className="w-full bg-[#03050F] z-1">
          <div className="max-w-[1120px] m-auto flex flex-row justify-between items-center my-8">
            <img src="/images/logo-dark.svg" alt="Rimac" title="Rimac" />

            <p className="text-[#F8F9FF] text-[14px] leading-4 font-normal">&copy; {new Date().getFullYear()} RIMAC Seguros y Reaseguros.</p>
          </div>
        </footer>

        <div className="absolute left-0 right-0 top-0 bottom-0 w-full z-[-1] flex justify-between flex-row">
          <img src="/images/blur-asset-left.svg" alt="blur-asset-left" />
          <img src="/images/blur-asset-right.svg" alt="blur-asset-right" />
        </div>
    </div>
  )
}
