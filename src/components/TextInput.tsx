import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { IFormData } from "../interfaces";

interface IProps {
  name: string;
  label: string;
  type: string;
  id: string;
  autoComplete: string;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  formData: IFormData;
}

const TextInput = ({
  name,
  label,
  type,
  id,
  autoComplete,
  setFormData,
  formData,
}: IProps) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name={name}
      label={label}
      type={type}
      id={id}
      autoComplete={autoComplete}
      onChange={(e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })
      }
    />
  );
};

export default TextInput;
