import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="text-gray-300">
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Navbar */}

      {/* Results grid */}
    </div>
  )
}
