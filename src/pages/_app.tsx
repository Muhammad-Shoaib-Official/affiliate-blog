import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Container, Footer } from '../components/export'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Container>
        <Footer />
      </Container>
    </>
  )
}
