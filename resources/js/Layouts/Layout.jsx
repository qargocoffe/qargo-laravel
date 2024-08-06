
import { Footer } from "@/Components/Footer/Footer"
import { Menu } from "@/Components/Menu/Menu"

const Layout = ({children}) => {
  return (
    <div className="overflow-x-hidden text-base leading-6 bg-whiteBackground !overscroll-x-hidden min-h-screen flex flex-col justify-between">
        <Menu/>
        <main>
           {children}
        </main>

        <Footer/>
    </div>
  )
}

export default Layout
