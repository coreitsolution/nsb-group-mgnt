import React, { useState } from "react";
import { TextField, MenuItem } from "@mui/material";

interface CustomSelectProps {
  id: string;
  title: string;
  helperText?: string;
  options: { value: string; label: string }[];
  onChange?: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  title,
  helperText,
  options,
  onChange,
}) => {
  const defaultOption = options[0]?.value || "";
  const [currentValue, setCurrentValue] = useState(defaultOption);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setCurrentValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="w-full mb-3">
      <p className={`mb-3 title`}>{title}</p>
      <TextField
        size="small"
        id={id}
        select
        label={""}
        value={currentValue}
        //helperText={helperText}
        onChange={handleChange}
        sx={{ width: "100%", backgroundColor: "#FFFFFF" }}
        fullWidth
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <p>{option.label}</p>
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default CustomSelect;
