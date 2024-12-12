import { TextField } from "@mui/material";
import styles from "./TextField.module.css";

interface CustomInputProps {
  type?: string;
  title: string;
  min?: number;
  max?: number;
  align?: "left" | "center" | "right";
  [key: string]: any;
}

const CustomInput = ({
  type = "text",
  title,
  min,
  max,
  align = "left",
  ...props
}: CustomInputProps) => {
  const isNumberType = type === "number";

  // ฟังก์ชันสำหรับกรองค่าที่ใส่ในฟิลด์
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const value = input.value;

    if (isNumberType) {
      // ตรวจสอบว่า input มีเฉพาะตัวเลข
      const numericValue = value.replace(/[^0-9]/g, ""); // เอาสัญลักษณ์และตัวอักษรออก
      if (numericValue !== value) {
        input.value = numericValue; // อัปเดตค่าที่กรองแล้ว
      }

      // ตรวจสอบ min และ max
      const parsedValue = parseFloat(numericValue);
      if (
        (min !== undefined && parsedValue < min) ||
        (max !== undefined && parsedValue > max)
      ) {
        input.value = ""; // รีเซ็ตค่าหากนอกช่วง
      }
    }
  };

  // ป้องกันการเปลี่ยนค่าด้วยการ scroll เมาส์
  const handleWheel = (event: React.WheelEvent<HTMLInputElement>) => {
    if (isNumberType) {
      event.currentTarget.blur(); // เอา focus ออก
      event.preventDefault(); // ปิดการ scroll
    }
  };

  return (
    <div className="w-full mb-3">
      <p className={`mb-3 title`}>{title}</p>
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        size="small"
        type={type}
        slotProps={{
          htmlInput: {
            ...(isNumberType && {
              inputMode: "numeric", // รับเฉพาะตัวเลข
              pattern: "[0-9]*", // กำหนด regex สำหรับตัวเลข
              min,
              max,
              style: {
                MozAppearance: "textfield", // ซ่อนลูกศรใน Firefox
              },
              onInput: handleInput, // เพิ่มการกรองค่า
              onWheel: handleWheel, // ปิดการเปลี่ยนค่าด้วย scroll เมาส์
            }),
          },
        }}
        sx={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          textAlign: align, // ตั้งค่าตำแหน่งข้อความ
          "& input": {
            textAlign: align, // ใช้ textAlign ใน input
          },
          "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
            {
              WebkitAppearance: "none", // ซ่อนลูกศรใน Chrome และ Safari
              margin: 0,
            },
        }}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
