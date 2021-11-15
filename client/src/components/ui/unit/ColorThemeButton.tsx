import clsx from 'clsx'
import { useTheme } from 'next-themes'

import type { ColorTheme } from '@/utils/theme'

const ALL_THEME: ColorTheme[] = ['light', 'dark', 'dracula', 'halloween', 'garden', 'pastel']

const ColorThemeButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <div className="btn">
        <span role="img" aria-label="color theme change button" className="text-xl">
          🎨
        </span>
      </div>
      <ul className="p-2 w-52 shadow menu compact dropdown-content bg-base-100 rounded-box">
        {ALL_THEME.map((color) => {
          return (
            <li
              key={color}
              className={clsx('p-2 hover:bg-blue-100 rounded-lg cursor-pointer', theme === color && 'bg-blue-100')}
              onClick={() => {
                setTheme(color)
              }}
            >
              {color}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { ColorThemeButton }
