import React from "react";
import { Button } from "@mui/material";

interface CustomButtonProps {
  icon?: string;
  label: string;
  background?: "danger" | "success" | "primary" | "white";
  size?: number;
  [key: string]: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  label,
  background = "primary",
  size = 15,
  ...props
}) => {
  const getButtonColor = () => {
    switch (background) {
      case "danger":
        return "white";
      case "success":
        return "rgba(47, 165, 52, 1)";
      case "primary":
        return "rgba(12, 93, 159, 1)";
      case "white":
        return "white";
      default:
        return "#FFFFF";
    }
  };

  const getBorderColor = () => {
    switch (background) {
      case "danger":
        return "1px solid rgba(159, 12, 12, 1)";
      case "white":
        return "1px solid rgba(12, 93, 159, 1)";
      default:
    }
  };

  const getLabelColor = () => {
    switch (background) {
      case "danger":
        return "rgba(159, 12, 12, 1)";
      case "white":
        return "rgba(12, 93, 159, 1)";
      default:
    }
  };

  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: getButtonColor(),
        width: "120px",
        border: getBorderColor(),
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
      startIcon={
        icon && (
          <img src={icon} alt="icon" style={{ width: size, height: size }} />
        )
      }
      {...props}
    >
      <p style={{ color: getLabelColor() }}>{label}</p>
    </Button>
  );
};

export default CustomButton;
