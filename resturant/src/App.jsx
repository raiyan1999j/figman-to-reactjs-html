import Banner from "./ClientSide/Header/Banner"
import Navbar from "./ClientSide/Header/Navbar"
import About from "./ClientSide/Main/About/About"
import BookForm from "./ClientSide/Main/BookForm/BookForm"
import Products from "./ClientSide/Main/Products/Products"

export default function App(){
  return(
    <>
    <header>
      <Navbar/>
      <Banner/>
    </header>

    <main>
      <About/>
      <Products/>
      <BookForm/>
    </main>

    <footer>

    </footer>
    </>
  )
}