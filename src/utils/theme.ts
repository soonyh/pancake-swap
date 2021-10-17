import get from 'lodash/get'
import { DefaultTheme } from 'styled-components'

const CACHE_KEY = 'IS_DARK'

const getThemeValue = (path: string, fallback?: string | number) => (theme: DefaultTheme): string =>
  get(theme, path, fallback)

export default getThemeValue

export function getThemeCache(): boolean | null {
  let cache = null
  try {
    const rawCache = localStorage.getItem(CACHE_KEY)
    if (rawCache) {
      cache = JSON.parse(rawCache)
    }
  } catch (error) {
    console.error(error)
  }

  return cache
}

export function setThemeCache(isDark: boolean) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(isDark))
  } catch (error) {
    console.error(error)
  }
}
