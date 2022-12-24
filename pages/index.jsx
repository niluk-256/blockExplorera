
import Head from 'next/head'
import Image from 'next/image'
import NavBar from "../components/NavBar"
import Explorer from "../components/Explorer"

const  Home = () => {
  return (
    <div>
        <Head>
        <title>BlockExplorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar/>
   
  
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Explorer/>
    
      <main className="flex w-full flex-1 flex-col items-center justify-center  text-center">
    

       
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/alchemy-logo-client.svg" alt="Vercel Logo" width={42} height={10} />
        </a>
      </footer>
    </div>
    </div>
  )
}

export default Home
