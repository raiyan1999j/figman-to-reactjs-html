import Banner from "./ClientSide/Header/Banner"
import Navbar from "./ClientSide/Header/Navbar"
import About from "./ClientSide/Main/About/About"
import BookForm from "./ClientSide/Main/BookForm/BookForm"
import Products from "./ClientSide/Main/Products/Products"
import Review from "./ClientSide/Main/Review/Review"

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
      <Review/>
    </main>

    <footer>

    </footer>
    </>
  )
}