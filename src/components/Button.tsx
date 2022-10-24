import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  
  children: ReactNode;
  asChild?:boolean;
}
                   //propos:
export function Button({children, asChild,className, ...props}: ButtonProps) {
  const Comp = asChild ? Slot: 'button';
  return (
   // <span className="text-gray-light font-sans">Text Hello</span>
   <Comp className={clsx(
    'py-3 px-4 bg-red-300 rounded font-semibold text-white text-sm w-full transition-colors focus:ring-2 ring-white hover:bg-red-100 ',className,
  
   
   )}
   {...props}
   >{children}</Comp> //Text Here <span>
  )
}