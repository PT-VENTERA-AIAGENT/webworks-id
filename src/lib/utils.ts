import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatRupiah(amount: number): string {
  if (amount >= 1_000_000_000) return `Rp ${(amount / 1_000_000_000).toFixed(0)}M+`
  if (amount >= 1_000_000) return `Rp ${(amount / 1_000_000).toFixed(0)}JT`
  if (amount >= 1_000) return `Rp ${(amount / 1_000).toFixed(0)}RB`
  return `Rp ${amount}`
}
