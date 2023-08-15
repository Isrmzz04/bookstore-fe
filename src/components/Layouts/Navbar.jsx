import { Link } from "react-router-dom"
import logo from "../../assets/logo.jpg"
const Navbar = () => {
  return (
    <div className="w-full bg-white border-b mx-auto flex items-center px-10 py-2 gap-5">
        <div className="flex gap-3 items-center">
            <img src={logo} alt="" className="w-12 h-12 rounded-full shadow-lg" />
            <span className="font-bold uppercase text-lg">R-Book</span>
        </div>
        <nav className="mx-auto">
            <ul className="flex gap-2">
                <li>
                    <Link to="/" className="font-semibold rounded-lg hover:bg-slate-100 py-3 px-4">Beranda</Link>
                </li>
                <li>
                    <Link to="/manajemen-buku" className="font-semibold rounded-lg hover:bg-slate-100 py-3 px-4">Manajemen Buku</Link>
                </li>
            </ul>
        </nav>
        <div>
            <span className="font-semibold">Hi, User!</span>
        </div>
    </div>
  )
}

export default Navbar