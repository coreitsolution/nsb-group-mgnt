import React, { useState } from "react";
import HeaderPage from "../../components/FormElements/HeaderPage/HeaderPage";
import CustomInput from "../../components/FormElements/TextField/TextField";
import CustomSelect from "../../components/FormElements/CustomSelect/CustomSelect";
import CustomButton from "../../components/Button/CustomButton/CustomButton";
import PermissionsTable from "../../components/PermissionsTable/PermissionsTable";
import {
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
} from "@mui/material";

const GroupManagement: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const [data, setData] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleSave = () => {
    setIsDialogOpen(false);
    setIsSnackbarOpen(true);
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  const options = [
    { value: "option1", label: "User" },
    { value: "option2", label: "Super User" },
    { value: "option3", label: "Admin" },
    { value: "option4", label: "Super Admin" },
    { value: "option5", label: "Developer" },
    { value: "option6", label: "ผู้ใช้ชั่วคราว" },
  ];

  return (
    <div className="content-container">
      <HeaderPage name="จัดการกลุ่มผู้ใช้งาน" />
      <div className="paper">
        <div className="p-5">
          <div className="w-1/4">
            <CustomInput
              type="number"
              min={0}
              max={3650}
              align="right"
              title="user หมดอายุหากผู้ใช้งานไม่เข้าใช้ระบบภายใน (วัน)"
            />
          </div>
          <div
            className="mt-5"
            style={{
              height: "1px",
              backgroundColor: "rgba(12, 93, 159, 1)",
            }}
          ></div>
          <div className="flex mt-5 w-full gap-5">
            <div className="w-1/4">
              <CustomSelect
                id="test"
                options={options}
                title="กลุ่มผู้ใช้งาน"
              />
            </div>
            <div className="w-1/4">
              <CustomInput
                title="อายุการใช้งาน (วัน)"
                type="number"
                min={0}
                align="right"
              />
            </div>
          </div>
          <div className="mt-4" style={{ overflowY: "auto" }}>
            <PermissionsTable />
          </div>
          <div className="flex justify-end mt-2 gap-2">
            <CustomButton label="ยกเลิก" background="white" />
            <CustomButton
              label="บันทึก"
              onClick={handleOpenDialog}
              background="primary"
            />
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle style={{ display: "flex", justifyContent: "center" }}>
          ยืนยันการบันทึก
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{ display: "flex", justifyContent: "center" }}
          >
            คุณต้องการบันทึกการเปลี่ยนแปลงหรือไม่?
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >
          <div>
            <CustomButton
              onClick={handleCloseDialog}
              label="ยกเลิก"
              background="white"
            />
          </div>
          <div>
            <CustomButton
              label="บันทึก"
              onClick={handleSave}
              background="primary"
            />
          </div>
        </DialogActions>
      </Dialog>

      {/* Success Snackbar */}

      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          style={{ backgroundColor: "rgba(47, 165, 52, 1)" }}
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          บันทึกข้อมูลสำเร็จ
        </Alert>
      </Snackbar>
    </div>
  );
};

export default GroupManagement;
