import { useTheme } from 'next-themes'
import type { VFC } from 'react'

import { Header } from '@/components/ui/container/Header'

type Props = {
  children: React.ReactNode
}

export const Layout: VFC<Props> = ({ children }: Props) => {
  const { theme } = useTheme()
  return (
    <div data-theme={theme}>
      <Header />
      {children}
    </div>
  )
}
