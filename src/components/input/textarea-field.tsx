import React from 'react'
import { Textarea, TextareaProps } from '../ui/textarea'

export interface TextAreaFieldProps extends TextareaProps {
    label?: string
    error?: boolean;
    helperText?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ error, helperText, label, ...props }) => {
  return (
    <div className='flex flex-col gap-3'>
        {/* label */}
        <Textarea {...props}/>
        {helperText && error ? <div className='text-red-500 text-sm'>{helperText}</div> : null}
    </div>
  )
}

export default TextAreaField