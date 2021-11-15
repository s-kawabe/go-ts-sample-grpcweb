import 'tailwindcss/tailwind.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { Layout } from '@/components/ui/container/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
