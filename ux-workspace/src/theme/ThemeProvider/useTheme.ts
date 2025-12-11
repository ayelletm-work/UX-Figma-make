import { useThemeContext } from './ThemeContext';

export function useTheme() {
  const { mode, toggleMode } = useThemeContext();

  return { mode, toggleMode, isDark: mode === 'dark' };
}
