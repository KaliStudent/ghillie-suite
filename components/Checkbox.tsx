import React from 'react'
import clsx from 'clsx'

type Props = {
  checked?: boolean
  onChange?: (v: boolean) => void
  disabled?: boolean
  label?: string
}

export function Checkbox({checked=false, onChange, disabled, label}: Props) {
  return (
    <label className={clsx('inline-flex items-center gap-2 cursor-pointer select-none', disabled && 'opacity-50 cursor-not-allowed')}>
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        disabled={disabled}
        onChange={(e)=>!disabled && onChange?.(e.target.checked)}
      />
      <span className={clsx(
        'w-4 h-4 rounded border flex items-center justify-center',
        checked ? 'bg-accent border-accent' : 'border-white/40 bg-transparent',
        'peer-focus-visible:ring-2 ring-accent/40'
      )}/>
      {label && <span className="text-sm text-white">{label}</span>}
    </label>
  )
}
