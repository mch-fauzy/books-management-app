'use client';

import React from 'react';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const Button = ({
  type = 'button',
  children,
  className,
  href,
  isLoading,
  loadingText,
  ...props
}) => {
  const finalClassName = twMerge('btn btn-primary', className);

  if (href) {
    return (
      <Link href={href}>
        <button type="button" className={finalClassName}>
          {children}
        </button>
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={finalClassName}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="loading loading-spinner"></span>
          {loadingText}
        </>
      ) : (
        <>
          {children}
        </>
      )}
    </button>
  )
}

export default Button;
