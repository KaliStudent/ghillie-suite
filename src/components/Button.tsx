import React from 'react'
import clsx from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

const base = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0'
const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-base'
}
const variants = {
  primary: 'bg-accent text-black shadow-sm hover:opacity-90 active:scale-[.98] disabled:opacity-50 disabled:pointer-events-none',
  secondary: 'bg-gunmetal text-white border border-white/20 hover:bg-slate active:bg-slate/80 disabled:opacity-50 disabled:pointer-events-none',
  ghost: 'text-fog border border-fog/40 hover:border-fog/60 active:border-fog/80 disabled:opacity-50 disabled:pointer-events-none',
  danger: 'bg-danger text-black hover:opacity-90 active:scale-[.98] disabled:opacity-50 disabled:pointer-events-none'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button({variant='primary', size='md', className, ...props}, ref) {
  return (
    <button ref={ref} className={clsx(base, sizes[size], variants[variant], className)} {...props} />
  )
})
