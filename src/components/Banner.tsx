import React from 'react'
import clsx from 'clsx'

type Props = {
  tone?: 'warning' | 'error' | 'info'
  children: React.ReactNode
}

export function Banner({tone='info', children}: Props) {
  const styles = {
    info: 'bg-slate text-white',
    warning: 'bg-warning text-black',
    error: 'bg-danger text-black',
  } as const
  return <div className={clsx('rounded-lg px-3 py-2 text-sm', styles[tone])}>{children}</div>
}
