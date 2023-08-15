const Label = ({htmlFor, children = "default"}) => {
  return (
    <label htmlFor={htmlFor} className="w-full block text-sm text-slate-900 font-semibold">{children}</label>
  )
}

export default Label