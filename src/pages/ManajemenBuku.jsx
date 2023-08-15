import { useState } from "react"
import Button from "../components/Elements/Button"
import InputForm from "../components/Elements/Input"
import BooksTable from "../components/Layouts/BooksTable"


const ManajemenBuku = () => {
  const [showForm, setShowForm] = useState("")

  const showInputForm = () => {
    setShowForm("show")
  }

  const showEditForm = () => {
    setShowForm("show")
  }

  return (
    <div className="w-full mt-16">
      <h1 className="text-center"></h1>
      <Button onClick={showInputForm}>Tambah Buku</Button>

      {showForm === "show" && (
        <div className="max-w-2xl my-10">
          <form action="">
            <InputForm text="Judul" name="judul" placeholder="Ketikan judul buku" />
            <InputForm text="Pengarang" name="pengarang" placeholder="Ketikan nama pengarang" />
            <Button btnClass="bg-green-500 hover:bg-green-600" type="submit" >Simpan data</Button>
          </form>
        </div>
      )}

      <BooksTable showEdit={showEditForm} />
    </div>
  )
}

export default ManajemenBuku