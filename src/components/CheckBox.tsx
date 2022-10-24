
import * as CheckBoxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckBoxProps extends CheckBoxPrimitive.CheckboxProps {
  
 
}
                   //propos:
export function CheckBox(props: CheckBoxProps) {
 
  return (
   // <span className="text-gray-light font-sans">Text Hello</span>
   <CheckBoxPrimitive.Root className=  "w-6 h-6 p-[2px] bg-gray-400 rounded" {...props}>
     <CheckBoxPrimitive.Indicator  asChild>
         <Check weight='bold' className="h-5 w-5 tex-red-300" />
     </CheckBoxPrimitive.Indicator>
   </CheckBoxPrimitive.Root> 
  )
}