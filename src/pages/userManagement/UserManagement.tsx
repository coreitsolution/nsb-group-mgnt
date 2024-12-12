import React, { useState } from "react";
import HeaderPage from "../../components/FormElements/HeaderPage/HeaderPage";
import CustomInput from "../../components/FormElements/TextField/TextField";
import CustomDatePicker from "../../components/FormElements/DatePicker/DatePicker";
import CustomSelect from "../../components/FormElements/CustomSelect/CustomSelect";
import CustomButton from "../../components/Button/CustomButton/CustomButton";
import searchIcon from "../../assets/icons/search.png";
import Plus from "../../assets/icons/plus.png";
import Pdf from "../../assets/icons/pdf.png";
import Excel from "../../assets/icons/excel.png";
import Grid from "@mui/material/Grid2";
import UserManagementTable from "../../components/UserManagementTable/UserManagementTable";

const GroupManagement: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const options = [
    { value: "all", label: "ทั้งหมด" },
    { value: "option1", label: "ตัวเลือก 1" },
    { value: "option2", label: "ตัวเลือก 2" },
  ];

  return (
    <div className="content-container">
      <HeaderPage name="จัดการผู้ใช้งาน" />

      <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <CustomSelect id="unit" options={options} title="หน่วยงาน" />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <CustomDatePicker title="วันที่เริ่ม" />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <CustomDatePicker title="วันสิ้นสุด" />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <CustomSelect id="command" options={options} title="กองบัญชาการ" />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <CustomSelect id="division" options={options} title="กองบังคับการ" />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <CustomInput title="กองกำกับการ" />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <CustomSelect id="region" options={options} title="พื้นที่/ภาค" />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <CustomSelect id="province" options={options} title="จังหวัด" />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <CustomInput title="สถานี" />
        </Grid>
      </Grid>

      <div className="flex justify-center mt-3 mb-3">
        <CustomButton
          label="ค้นหา"
          icon={searchIcon}
          onClick={() => console.log("Search")}
        />
      </div>

      <div className="flex justify-between w-full mt-3 mb-3 items-end">
        <div className="flex">250 รายการ</div>
        <div className="flex">
          <div className="flex gap-2">
            <CustomButton
              background="white"
              label="Export"
              icon={Pdf}
              size={25}
              onClick={() => console.log("Search")}
            />
            <CustomButton
              background="white"
              label="Export"
              icon={Excel}
              size={25}
              onClick={() => console.log("Search")}
            />
          </div>

          <div className="flex gap-2 ml-4">
            <CustomButton
              label="Import"
              icon={Plus}
              onClick={() => console.log("Search")}
            />
            <CustomButton
              label="เพิ่มผู้ใช้"
              icon={Plus}
              onClick={() => console.log("Search")}
            />
          </div>
        </div>
      </div>

      <UserManagementTable />
    </div>
  );
};

export default GroupManagement;
