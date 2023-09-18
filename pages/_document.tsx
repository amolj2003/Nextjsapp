import { Html, Head, Main, NextScript } from 'next/document'
import  Header  from '../components/Header'
import  Banner  from '../components/Banner'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
       <Header />
      <body>
        <Banner />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
