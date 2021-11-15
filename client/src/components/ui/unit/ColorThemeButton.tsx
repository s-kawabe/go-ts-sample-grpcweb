import { useTheme } from 'next-themes'

import type { ColorTheme } from '@/utils/theme'

export const ColorThemeButton = () => {
  const { setTheme } = useTheme()

  const ALL_THEME: ColorTheme[] = ['light', 'dark', 'dracula', 'halloween', 'garden', 'pastel']

  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <div className="btn">
        <span role="img" aria-label="color theme change button" className="text-xl">
          🎨
        </span>
      </div>
      <ul className="p-2 w-52 shadow menu dropdown-content bg-base-100 rounded-box">
        {ALL_THEME.map((theme) => {
          return (
            <li key={theme} className="flex items-center p-2">
              <button
                className="btn btn-sm"
                onClick={() => {
                  setTheme(theme)
                }}
              >
                {theme}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
