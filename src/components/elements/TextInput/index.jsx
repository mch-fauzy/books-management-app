import React from 'react';
import { twMerge } from 'tailwind-merge';

const TextInput = ({
  type = 'text',
  placeholder,
  className,
  isBlock,
  ...props
}) => {
  const maxWidthClassName = isBlock ? 'max-w-full' : 'max-w-xs';
  const inputBasicClassName = 'input input-bordered input-sm';
  const fileInputClassName = 'file-input file-input-bordered file-input-sm file-input-primary';
  const finalClassName = twMerge(
    type === 'file' ? fileInputClassName : inputBasicClassName,
    maxWidthClassName,
    className
  );

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={finalClassName}
      {...props}  
    />
  )
}

export default TextInput;
