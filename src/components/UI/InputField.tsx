import { FC, ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) => (
  <div>
    <label className="small" style={{ display: "block", marginBottom: 6 }}>
      {label}
    </label>
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField;
