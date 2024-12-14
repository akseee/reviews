import { FC, ReactNode } from "react"

type RadioBoxProps = {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  children: ReactNode
}

export const RadioBox: FC<RadioBoxProps> = ({
  name,
  value,
  onChange,
  checked,
  children,
}) => {
  return (
    <div key={value}>
      <input
        name={name}
        onChange={onChange}
        type="radio"
        id={value}
        value={value}
        checked={checked}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  )
}
