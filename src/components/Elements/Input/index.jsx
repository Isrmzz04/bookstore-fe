import Input from "./Input"
import Label from "./Label"
const InputForm = ({text, type, name, placeholder}) => {
  return (
    <div className="mb-6">
        <Label>{text}</Label>
        <Input type={type} name={name} placeholder={placeholder} />
    </div>
  )
}

export default InputForm