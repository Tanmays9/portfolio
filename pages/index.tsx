import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tanmay Sharma Portfolio</title>
        <meta name="description" content="Tanmay Sharma Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <section className='bg-blue-700 min-h-screen'>
          <h1>Hello</h1>
        </section>
      </main>
    </>
  )
}
