import { useCallback } from 'react'

const BASE_URL = 'http://localhost:5183/api/'

export function useDataFetch() {
  return useCallback(async function dataFetch(url: string, params?: RequestInit) {
    const response = await fetch(`${BASE_URL}${url}`, params)

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    return response
  }, [])
}
