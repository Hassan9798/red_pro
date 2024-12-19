import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectProps } from "@radix-ui/react-select";

export interface SelectFieldProps extends SelectProps {
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  items?: string[];
  handleValueChange?: (value: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
  placeholder,
  error,
  helperText,
  handleValueChange,
  items,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Select onValueChange={handleValueChange} {...rest}>
        <SelectTrigger
          className={rest.value ? "" : "text-black/75"}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items?.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {helperText && error ? (
        <div className="text-red-500 text-sm">{helperText}</div>
      ) : null}
    </div>
  );
};

export default SelectField;
