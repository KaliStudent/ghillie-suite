import React from 'react'
import clsx from 'clsx'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input({ className, invalid, disabled, ...props }, ref) {
  return (
    <input
      ref={ref}
      disabled={disabled}
      className={clsx(
        'h-10 w-full rounded-lg bg-gunmetal border px-3 text-sm transition',
        'border-white/20 placeholder:text-fog/70',
        'focus:border-accent focus:ring-2 focus:ring-accent/40 focus:outline-none',
        invalid && 'border-danger focus:border-danger focus:ring-danger/40',
        disabled && 'opacity-50 cursor-not-allowed'
      , className)}
      {...props}
    />
  )
})
