import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?:boolean;
}
                   //propos:
export function Heading({size = 'md', children, asChild}: HeadingProps) {
  const Comp = asChild ? Slot: 'h2';
  return (
   // <span className="text-gray-light font-sans">Text Hello</span>
   <Comp className={clsx('text-gray-light font-bold font-sans',
   {
    'text-lg': size == 'sm',
    'text-xl': size == 'md',
    'text-2xl': size == 'lg',
   }
   
   )}>{children}</Comp> //Text Here <span>
  )
}