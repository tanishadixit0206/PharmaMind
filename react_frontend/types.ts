export interface ThemeContextType {
    darkMode: boolean;
    setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  }
  