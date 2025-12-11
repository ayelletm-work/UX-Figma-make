import { PropsWithChildren, useMemo, useState } from 'react';
import { ThemeContext, type ColorMode } from './ThemeContext';

export function ThemeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<ColorMode>('light');

  const value = useMemo(
    () => ({
      mode,
      toggleMode: () => setMode((current) => (current === 'light' ? 'dark' : 'light'))
    }),
    [mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
