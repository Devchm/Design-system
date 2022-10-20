import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?:boolean;
}
                   //propos:
export function Text({size = 'md', children, asChild}: TextProps) {
  const Comp = asChild ? Slot: 'span';
  return (
   // <span className="text-gray-light font-sans">Text Hello</span>
   <Comp className={clsx('text-gray-light font-sans',
   {
    'text-xs': size == 'sm',
    'text-sm': size == 'md',
    'text-md': size == 'lg',
   }
   
   )}>{children}</Comp> //Text Here <span>
  )
}