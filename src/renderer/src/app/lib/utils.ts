import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs))
}

export function formatDateTime(date: Date): string {
  const formatter = new Intl.DateTimeFormat(window.context.locale, {
    dateStyle: 'short',
    timeStyle: 'short'
  })

  return formatter.format(date)
}

export function orderByLastModified<T extends { lastModified: Date }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime())
}

export function orderByKeyAsc<T extends Record<K, string>, K extends keyof T>(
  items: T[],
  key: K
): T[] {
  return [...items].sort((a, b) => a[key].localeCompare(b[key]))
}
