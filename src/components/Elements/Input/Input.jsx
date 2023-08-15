const Input = ({ type, name, placeholder, value }) => {
  return (
    <input type={type} name={name} className="block mt-2 text-sm w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder={placeholder} value={value} />
  )
}

export default Input