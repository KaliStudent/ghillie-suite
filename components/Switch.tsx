import React from 'react'
import clsx from 'clsx'

type Props = {
  checked?: boolean
  onChange?: (v: boolean) => void
  disabled?: boolean
}

export function Switch({checked=false, onChange, disabled}: Props) {
  return (
    <button
      type="button"
      onClick={() => !disabled && onChange?.(!checked)}
      className={clsx(
        'w-11 h-6 rounded-full px-1 transition flex items-center',
        checked ? 'bg-accent' : 'bg-fog',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      <span className={clsx('w-4 h-4 rounded-full transition', checked ? 'translate-x-5 bg-black' : 'translate-x-0 bg-gunmetal')}/>
    </button>
  )
}
