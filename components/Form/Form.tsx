import Button from "../Button/Button"
import Input from "../Input/Input"
import { useForm } from "react-hook-form"

export default function Form() {
  return (
    <form className="flex flex-col items-center gap-6 w-[500px] p-6">
        <Input variants="text" label="Username" />
        <Input variants="password" label="Password" />
        <Input variants="password" label="Confirm Password" />
        <Button>Send</Button>
    </form>
  )
}
