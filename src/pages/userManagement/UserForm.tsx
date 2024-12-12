import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderPage from "../../components/FormElements/HeaderPage/HeaderPage";
import CustomInput from "../../components/FormElements/TextField/TextField";
import peopleEx from "../../assets/images/ex-people.png";
import CustomSelect from "../../components/FormElements/CustomSelect/CustomSelect";
interface User {
  id: number;
  fullName: string;
  affiliation: string;
  position: string;
  approvalStatus: string;
  usageStatus: string;
  userGroup: string;
}

const UserForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  const options = [
    { value: "all", label: "ทั้งหมด" },
    { value: "option1", label: "ตัวเลือก 1" },
    { value: "option2", label: "ตัวเลือก 2" },
  ];

  return (
    <div
      className="content-container"
      style={{ height: "100vh", overflowY: "auto" }} // only page have scrollbar
    >
      <HeaderPage name="จัดการผู้ใช้งาน" />
      <div className="paper">
        <div style={{ display: "flex", height: "100vh" }}>
          {/* Sidebar Left */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "25%",
            }}
          >
            <div
              style={{ backgroundColor: "lime", flex: 1 }}
              className="flex justify-center items-center"
            >
              <img src={peopleEx} height={250} width={195} alt="" />
            </div>
            <div style={{ backgroundColor: "orange", flex: 1 }}>
              <CustomSelect id="unit" options={options} title="คำนำหน้าชื่อ" />
              <CustomSelect id="unit" options={options} title="ตำแหน่ง" />
              <CustomSelect id="unit" options={options} title="พื้นที่/ภาค" />
              <CustomInput title="เลขบัตรประชาชน" />
            </div>
          </div>

          {/* Main Content */}
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            {/* Top Header */}
            <div style={{ backgroundColor: "orange", height: "20%" }}></div>

            {/* Bottom Content */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "cyan",
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  backgroundColor: "lime",
                  flex: 1,
                  margin: "0 5px",
                  boxSizing: "border-box",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "lime",
                  flex: 1,
                  margin: "0 5px",
                  boxSizing: "border-box",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
