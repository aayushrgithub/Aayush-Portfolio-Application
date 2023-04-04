import Main from '@/components/Main'
import About from '@/components/About'
import Head from 'next/head'
import Image from 'next/image'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'


export default function Home() {
  return (
    <>
      <Head className>
        <title>Aayush Portfolio Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <div className='pt-96 md:p-2'> <Skills /></div>
      <Projects />
      <Contact />
    </>
  )
}
