/* eslint-disable react/prop-types */
const Button = ({ children = "default", type, btnClass = "bg-black hover:bg-[#111]", onClick }) => {
    return (
        <button type={type} className={`px-4 py-2.5 font-medium text-sm tracking-wide text-white capitalize transition-colors transform rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 ${btnClass}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button