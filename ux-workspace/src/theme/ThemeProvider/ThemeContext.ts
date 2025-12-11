import { createContext, useContext } from 'react';

export type ColorMode = 'light' | 'dark';

export interface ThemeContextValue {
  mode: ColorMode;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function useThemeContext(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  return context;
}
