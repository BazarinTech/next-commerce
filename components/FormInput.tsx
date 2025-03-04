'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Props = {
    label?: string
    name: string
    type: string
    value?: string,
    placeholder? : string

}

const FormInput = ({label, name, type, value, placeholder}: Props) => {
  return (
    <div className="grid w-80 items-center gap-1.5 py-2">
        {label && <Label htmlFor={name}>{label}</Label>}
        <Input type={type} name={name} id={name} placeholder={placeholder ? placeholder : ''}/>
  </div>
  )
}

export default FormInput