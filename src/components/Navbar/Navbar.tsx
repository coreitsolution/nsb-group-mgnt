import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import PrefixImage from "../../../src/assets/icons/prefix-icon-menu.png";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

interface NavbarProps {
  show: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ show }) => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>(() => {
    const savedState = localStorage.getItem("openMenus");
    return savedState ? JSON.parse(savedState) : {};
  });

  const toggleMenu = (menu: string) => {
    const updatedMenus = { ...openMenus, [menu]: !openMenus[menu] };
    setOpenMenus(updatedMenus);
    localStorage.setItem("openMenus", JSON.stringify(updatedMenus));
  };

  useEffect(() => {
    const savedState = localStorage.getItem("openMenus");
    if (savedState) {
      setOpenMenus(JSON.parse(savedState));
    }
  }, []);

  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <div className="sidebar mt-2">
        <div className="menu-item">
          <div className="menu-header" onClick={() => toggleMenu("menu1")}>
            <img src={PrefixImage} alt="prefix" className="prefix-icon" />
            <p className="ms-3 w-60">ตรวจหาทะเบียนรถ</p>
            {openMenus["menu1"] ? <FaChevronDown /> : <FaChevronUp />}
          </div>
          <div className={`submenu ${openMenus["menu1"] ? "open" : ""}`}>
            <NavLink
              to="/search-registration"
              className={({ isActive }) =>
                `submenu-item ${isActive ? "active" : ""}`
              }
            >
              <p className="submenu-text">เเบบมีเงื่อนไข</p>
            </NavLink>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `submenu-item ${isActive ? "active" : ""}`
              }
            >
              <p className="submenu-text">ก่อน/หลังผ่านด่าน</p>
            </NavLink>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-header" onClick={() => toggleMenu("menu2")}>
            <img src={PrefixImage} alt="prefix" className="prefix-icon" />
            <p className="ms-3 w-60">ระบบวิเคราะห์ยานพาหนะ</p>
            {openMenus["menu2"] ? <FaChevronDown /> : <FaChevronUp />}
          </div>
          <div className={`submenu ${openMenus["menu2"] ? "open" : ""}`}>
            <NavLink
              to="/vehicle-analysis"
              className={({ isActive }) =>
                `submenu-item ${isActive ? "active" : ""}`
              }
            >
              <p className="submenu-text">ทะเบียนปลอม</p>
            </NavLink>
            <NavLink
              to="/test"
              className={({ isActive }) =>
                `submenu-item ${isActive ? "active" : ""}`
              }
            >
              <p className="submenu-text">ทะเบียนปลอม 2</p>
            </NavLink>
            <NavLink
              to="/test2"
              className={({ isActive }) =>
                `submenu-item ${isActive ? "active" : ""}`
              }
            >
              <p className="submenu-text">สวมทะบียน</p>
            </NavLink>
            <NavLink
              to="/test3"
              className={({ isActive }) =>
                `submenu-item ${isActive ? "active" : ""}`
              }
            >
              <p className="submenu-text">วิเคราะห์ยานพาหนะจากด่านตรวจ</p>
            </NavLink>
            <NavLink
              to="/test4"
              className={({ isActive }) =>
                `submenu-item ${isActive ? "active" : ""}`
              }
            >
              <p className="submenu-text">
                วิเคราะห์ยานพาหนะจากทะเบียน (Convoy)
              </p>
            </NavLink>
            <NavLink
              to="/test5"
              className={({ isActive }) =>
                `submenu-item ${isActive ? "active" : ""}`
              }
            >
              <p className="submenu-text">ระบบวิเคราะห์ยานพาหนะแบบ Real-Time</p>
            </NavLink>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-header" onClick={() => toggleMenu("menu3")}>
            <img src={PrefixImage} alt="prefix" className="prefix-icon" />
            <p className="ms-3 w-60">ระบบประมวลผลภาพ</p>
            {openMenus["menu3"] ? <FaChevronDown /> : <FaChevronUp />}
          </div>
          <div className={`submenu ${openMenus["menu3"] ? "open" : ""}`}>
            <NavLink
              to="/image-processing"
              className={({ isActive }) =>
                `submenu-item ${isActive ? "active" : ""}`
              }
            >
              <p className="submenu-text">ประมวลผล</p>
            </NavLink>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-header" onClick={() => toggleMenu("admin")}>
            <img src={PrefixImage} alt="prefix" className="prefix-icon" />
            <p className="ms-3 w-60">Admin</p>
            {openMenus["admin"] ? <FaChevronDown /> : <FaChevronUp />}
          </div>
          <div className={`submenu ${openMenus["admin"] ? "open" : ""}`}>
            <NavLink
              to="/register-user"
              className={({ isActive }) =>
                `submenu-item ${isActive ? "active" : ""}`
              }
            >
              <p className="submenu-text">ลงทะเบียนผู้ใช้งาน</p>
            </NavLink>
            <NavLink
              to="/approve-user"
              className={({ isActive }) =>
                `submenu-item ${isActive ? "active" : ""}`
              }
            >
              <p className="submenu-text">อนุมัติผู้ใช้งาน</p>
            </NavLink>
            <NavLink
              to="/user-management"
              className={({ isActive }) =>
                `submenu-item ${isActive ? "active" : ""}`
              }
            >
              <p className="submenu-text">จัดการผู้ใช้งาน</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
