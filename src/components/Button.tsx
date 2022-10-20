import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface ButtonProps {
  
  children: ReactNode;
  asChild?:boolean;
}
                   //propos:
export function Button({children, asChild}: ButtonProps) {
  const Comp = asChild ? Slot: 'button';
  return (
   // <span className="text-gray-light font-sans">Text Hello</span>
   <Comp className={clsx(
    'py-4 px-3 bg-red-300 rounded font-semibold text-white text-sm w-full transition-colors focus:ring-2 ring-white hover:bg-red-100 ',
  
   


   )}>{children}</Comp> //Text Here <span>
  )
}