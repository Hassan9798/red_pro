import React from 'react'
import { Input, InputProps } from '../ui/input'

export interface InputFieldProps extends InputProps {
    label?: string
    error?: boolean;
    helperText?: string;
}

const InputField: React.FC<InputFieldProps> = ({ error, helperText, label, ...props }) => {
  return (
    <div className='flex flex-col gap-3 w-full'>
        {/* label */}
        {label ? 
          <div className='text-base'>
            {label}
          </div> : null
        }
        <Input {...props}/>
        {helperText && error ? <div className='text-red-500 text-sm'>{helperText}</div> : null}
    </div>
  )
}

export default InputField