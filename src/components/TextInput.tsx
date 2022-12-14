import { clsx } from 'clsx'
import { Children, InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'


export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
   return (
    <div className=
    " flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-400 w-full   focus-within:ring-2 ring-red-300">
      {props.children}
    </div>

   )
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-black" >
     {props.children}
    </Slot>
  )
}








export interface TextInputInputProps extends InputHTMLAttributes <HTMLInputElement>{
  //placeholder?:string}
}

export function TextInputInput (props: TextInputInputProps) {
  return (
    <input className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-black outline-none'
   
    {...props}
   />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon:TextInputIcon
}




                   //propos:
//export function TextInput(props: TextInputProps) {
  
 // return (
     // <span className="text-gray-light font-sans">Text Hello</span>
  //)
//}