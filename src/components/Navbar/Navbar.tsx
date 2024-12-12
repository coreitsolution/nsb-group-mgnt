import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  show: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ show }) => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>(() => {
    const savedState = localStorage.getItem("openMenus");
    // ตั้งค่าเริ่มต้นเปิด "menu1"
    return savedState ? JSON.parse(savedState) : { menu1: true }; // เปิด menu1 โดย default
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
          <div className={`submenu ${openMenus["menu1"] ? "open" : ""}`}>
            <NavLink
              to="/group-management"
              className={({ isActive }) =>
                `submenu-item ${isActive ? "active" : ""}`
              }
            >
              <p className="submenu-text">จัดการกลุ่ม</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
