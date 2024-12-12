import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

interface CustomDatePickerProps {
  title: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ title }) => {
  const [value, setValue] = useState<Dayjs | null>(null);

  return (
    <div className="w-full mb-3">
      <p className={`mb-3 title`}>{title}</p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label=""
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slotProps={{
            textField: {
              size: "small",
              sx: {
                width: "100%",
                backgroundColor: "#FFFFFF",
              },
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default CustomDatePicker;
