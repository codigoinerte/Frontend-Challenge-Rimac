export const Footer = () => {
    return (
        <footer className="w-full bg-[#03050F] z-1">
            <div className="max-w-[1120px] m-auto flex flex-row justify-between items-center py-8 px-6">
                <img src="/images/logo-dark.svg" alt="Rimac" title="Rimac" />

                <p className="text-[#F8F9FF] text-[14px] leading-4 font-normal">&copy; {new Date().getFullYear()} RIMAC Seguros y Reaseguros.</p>
            </div>
        </footer>
    )
}
