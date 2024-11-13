import Banner from "./ClientSide/Header/Banner"
import Navbar from "./ClientSide/Header/Navbar"
import About from "./ClientSide/Main/About/About"

export default function App(){
  return(
    <>
    <header>
      <Navbar/>
      <Banner/>
    </header>

    <main>
      <About/>
    </main>

    <footer>

    </footer>
    </>
  )
}