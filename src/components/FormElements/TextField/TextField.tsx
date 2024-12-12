import { TextField } from "@mui/material";
import styles from "./TextField.module.css";

interface CustomInputProps {
  type?: string;
  title: string;
  [key: string]: any;
}

const CustomInput = ({ type = "text", title, ...props }: CustomInputProps) => {
  return (
    <div className="w-full mb-3">
      <p className={`mb-3 title`}>{title}</p>
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        size="small"
        sx={{ width: "100%", backgroundColor: "#FFFFFF" }}
      />
    </div>
  );
};

export default CustomInput;
