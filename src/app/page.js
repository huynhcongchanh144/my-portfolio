import Image from 'next/image'
import styles from './page.module.css'
import Banner from './components/Banner'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Clients from './components/Clients'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main>
        <Banner />
        <Features />
        <Portfolio />
        <Resume />
        <Clients />
        <Pricing />
        <Blog />
        <Contact />
    </main>
  )
}
