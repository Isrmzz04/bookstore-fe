import Button from "../Elements/Button"

const BooksTable = ({showEdit}) => {

    const editData = () => {
        showEdit()
    }

    return (
        <div className="overflow-x-auto my-5" >
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-left">
                <thead className="">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            No.
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Judul
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Pengarang
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                            Aksi
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    <tr className="odd:bg-gray-50">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            1
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">How to Mastering React JS</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Oda Nobunaga</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center gap-2">
                            <Button btnClass="bg-white border text-slate-500 hover:bg-green-100 hover:text-slate-700" onClick={() => editData()}>Edit</Button>
                            <Button btnClass="bg-white border text-slate-500 hover:bg-red-100 hover:text-slate-700">Delete</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BooksTable