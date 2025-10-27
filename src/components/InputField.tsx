import { FC } from "react";

const InputField: FC<{
  label: string;
  type?: string;
  placeholder?: string;
}> = ({ label, type = "text", placeholder }) => (
  <div>
    <label className="small" style={{ display: "block", marginBottom: 6 }}>
      {label}
    </label>
    <input className="input" type={type} placeholder={placeholder} />
  </div>
);

export default InputField;
