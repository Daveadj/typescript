import type { ComponentProps, CSSProperties } from "react";


type ButtonBaseProps = ComponentProps<'button'>

type ButtonProps = {
    variant?: "primary" | "secondary" | "tertiary";
} & ButtonBaseProps

export function Button({variant="primary",style,...rest}: ButtonProps){
    const base: CSSProperties = {
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
    }
    return(
        <button style={{...base, ...style}} {...rest}/>
    )
}