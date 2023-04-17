import "./Button.css"
import {ComponentPropsWithoutRef} from "react"
type ButtonProps = ComponentPropsWithoutRef<"button">

export const Button = ({children, ...props}: ButtonProps) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  )
}
