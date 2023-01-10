import { createContext } from 'react'
import { theme } from '../theme'

export const ThemeContext = createContext<keyof typeof theme>('light')
