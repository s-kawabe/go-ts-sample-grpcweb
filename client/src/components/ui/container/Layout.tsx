import type { VFC } from 'react'

import { Header } from '@/components/ui/unit/Header'

type Props = {
  children: React.ReactNode
}

export const Layout: VFC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
