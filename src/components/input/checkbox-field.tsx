import React from 'react'
import { Checkbox } from '../ui/checkbox';
import { CheckboxProps } from '@radix-ui/react-checkbox';

export interface CheckboxFieldProps extends CheckboxProps {
    label?: string
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, ...rest }) => {
  return (
    <div className='flex items-center gap-2'>
        <Checkbox {...rest}/>
        {label ? <label className='text-sm font-medium'>{label}</label> : null}
    </div>
  )
}

export default CheckboxField;