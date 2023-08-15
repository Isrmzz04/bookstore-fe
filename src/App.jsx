import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Layouts/Navbar"
import Beranda from "./pages/Beranda"
import ManajemenBuku from "./pages/ManajemenBuku";

const App = () => {
  return (
    <div className="w-full  max-w-7xl mx-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/manajemen-buku" element={<ManajemenBuku />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
