import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export const Form = () => {
    return (
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
    )
}
