import type { IconProps } from "./type"

export const Separate:React.FC<IconProps> = (props) => {
    return (
        <svg width="32" height="2" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <line x1="1" y1="1" x2="31" y2="0.999999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 8"/>
        </svg>
    )
}
