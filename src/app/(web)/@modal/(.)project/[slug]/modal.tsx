/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createPortal } from 'react-dom'

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const dialogRef = useRef(null)

  useEffect(() => {
    // @ts-ignore
    if (!dialogRef.current?.open) {
      // @ts-ignore
      dialogRef.current?.showModal()
    }
  }, [])

  function onDismiss() {
    router.back()
  }

  return createPortal(
    // <div className="absolute left-0 top-0 z-auto flex h-full w-full items-center justify-center backdrop-blur-sm">
    <div className="absolute left-0 top-0 z-auto flex h-screen w-screen flex-col items-center justify-center overflow-hidden backdrop-blur-sm">
      <dialog
        ref={dialogRef}
        onClose={onDismiss}
        className="h-full w-[80%] rounded-2xl bg-blue-500 text-zinc-100"
      >
        <button onClick={onDismiss} className="h-10 w-10 bg-red-500">
          Close
        </button>
        {children}
      </dialog>
    </div>,

    document.getElementById('modal-root')!,
  )
}
