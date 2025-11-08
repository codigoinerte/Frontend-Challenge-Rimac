import React from 'react'

interface Props{
    className?:string;
    message: string;
    error: boolean | null;
}

export const Invalid:React.FC<Props> = ({className, error, message}) => {
    if(error == null || error == true) return null;
    return (<span className={`text-xs text-red-500 block -mt-3 mb-4 ${className}`}>{message}</span>)
}
