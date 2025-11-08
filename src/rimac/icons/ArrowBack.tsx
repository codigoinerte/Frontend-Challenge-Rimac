import type { IconProps } from './type'

export const ArrowBack:React.FC<IconProps> = (props) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="10" cy="10" r="9" transform="rotate(90 10 10)" stroke="currentColor" strokeWidth="2"/>
            <path d="M7.55317 10L10.8094 6.74689L11.6907 7.62814L9.32192 10L11.6907 12.3719L10.8094 13.2531L7.55317 10Z" fill="currentColor"/>
        </svg>
    )
}
