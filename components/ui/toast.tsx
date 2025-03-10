"use client"

import { useToast } from './use-toast'

export function Toast() {
  const { toast } = useToast()

  if (!toast) return null

  return (
    <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground p-4 rounded shadow-lg">
      <h3 className="font-bold">{toast.title}</h3>
      {toast.description && <p>{toast.description}</p>}
    </div>
  )
}