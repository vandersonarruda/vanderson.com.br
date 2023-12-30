import { env } from '@/env'

// Using Fetch API to combine data with base URL
export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const url = new URL(path, baseUrl)

  return fetch(url, init)
}
