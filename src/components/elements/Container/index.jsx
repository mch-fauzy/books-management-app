import React from 'react';

import { twMerge } from 'tailwind-merge';

const Container = ({ children, className }) => {
  return (
    <div className={twMerge('container mx-auto px-4', className)}>
      {children}
    </div>
  )
}

export default Container;
