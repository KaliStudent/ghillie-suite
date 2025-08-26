import React from 'react'
import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  selected?: boolean
  disabled?: boolean
  onClick?: () => void
}

export function Chip({children, selected, disabled, onClick}: Props) {
  return (
    <button
      type="button"
      onClick={()=>!disabled && onClick?.()}
      className={clsx(
        'h-7 px-3 rounded-full border text-sm transition',
        selected ? 'border-accent text-white bg-slate' : 'border-white/20 text-fog bg-transparent hover:border-white/40',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      {children}
    </button>
  )
}
