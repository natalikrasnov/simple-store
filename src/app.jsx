import { About } from './components/About.component'
import { Footer } from './components/Footer.component'
import { ShopMainDisplay } from './components/ShopMainDisplay.component'
import './styles/_main.style.scss'

export function App() {

  return (
    <>
      <ShopMainDisplay />
      <About />
      <Footer />
    </>
  )
}
