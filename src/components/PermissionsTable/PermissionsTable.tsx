import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
} from "@mui/material";
import styles from "./PermissionsTable.module.scss";

const fetchMockData = () => {
  return Promise.resolve([
    {
      category: "ตรวจหาทะเบียนรถ",
      rows: [
        {
          name: "แบบมีเงื่อนไข",
          permissions: {
            all: false,
            add: false,
            edit: false,
            delete: false,
            detail: true,
            print: true,
          },
        },
        {
          name: "ก่อน/หลัง ผ่านด่าน",
          permissions: {
            all: false,
            add: false,
            edit: false,
            delete: false,
            detail: true,
            print: true,
          },
        },
      ],
    },
    {
      category: "ระบบวิเคราะห์ยานพาหนะ",
      rows: [
        {
          name: "ทะเบียนปลอม",
          permissions: {
            all: false,
            add: false,
            edit: false,
            delete: false,
            detail: true,
            print: true,
          },
        },
        {
          name: "ทะเบียนปลอม 2",
          permissions: {
            all: false,
            add: false,
            edit: false,
            delete: false,
            detail: true,
            print: true,
          },
        },
        {
          name: "สวมทะเบียน",
          permissions: {
            all: false,
            add: false,
            edit: false,
            delete: false,
            detail: true,
            print: true,
          },
        },
        {
          name: "วิเคราะห์ยานพาหนะจากด่านตรวจ",
          permissions: {
            all: false,
            add: false,
            edit: false,
            delete: false,
            detail: true,
            print: true,
          },
        },
        {
          name: "วิเคราะห์ยานพาหนะจากทะเบียน (Convoy)",
          permissions: {
            all: false,
            add: false,
            edit: false,
            delete: false,
            detail: true,
            print: true,
          },
        },
        {
          name: "ระบบวิเคราะห์ยานพาหนะแบบ Real-Time",
          permissions: {
            all: false,
            add: false,
            edit: false,
            delete: false,
            detail: true,
            print: true,
          },
        },
      ],
    },
    {
      category: "ระบบประมวลผลภาพ",
      rows: [
        {
          name: "ระบบประมวลผลจากภาพถ่าย",
          permissions: {
            all: false,
            add: false,
            edit: false,
            delete: false,
            detail: true,
            print: true,
          },
        },
        {
          name: "ระบบประมวลผลภาพจากวิดีโอ",
          permissions: {
            all: false,
            add: false,
            edit: false,
            delete: false,
            detail: true,
            print: true,
          },
        },
        {
          name: "ระบบประมวลผลภาพแบบ Real-Time",
          permissions: {
            all: false,
            add: false,
            edit: false,
            delete: false,
            detail: true,
            print: true,
          },
        },
      ],
    },
    {
      category: "ระบบบริหารจัดการผู้ใช้งาน",
      rows: [
        {
          name: "ลงทะเบียนผู้ใช้งาน",
          permissions: {
            all: false,
            add: false,
            edit: false,
            delete: false,
            detail: true,
            print: true,
          },
        },
        {
          name: "อนุมัติผู้ใช้งาน",
          permissions: {
            all: false,
            add: false,
            edit: false,
            delete: false,
            detail: true,
            print: true,
          },
        },
        {
          name: "จัดการผู้ใช้งาน",
          permissions: {
            all: false,
            add: false,
            edit: false,
            delete: false,
            detail: true,
            print: true,
          },
        },
        {
          name: "วิเคราะห์ผู้ใช้งาน",
          permissions: {
            all: false,
            add: false,
            edit: false,
            delete: false,
            detail: true,
            print: true,
          },
        },
      ],
    },
    {
      category: "Admin",
      rows: [
        {
          name: "ลงทะเบียนผู้ใช้งานของหน่วย",
          permissions: {
            all: false,
            add: false,
            edit: false,
            delete: false,
            detail: true,
            print: true,
          },
        },
      ],
    },
  ]);
};

const PermissionsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMockData().then((mockData) => {
      setData(mockData);
    });
  }, []);

  const handleCheckboxChange = (categoryIndex, rowIndex, permission) => {
    setData((prevData) => {
      const newData = [...prevData];
      const row = newData[categoryIndex].rows[rowIndex];

      if (permission === "all") {
        const newValue = !row.permissions.all;
        Object.keys(row.permissions).forEach((key) => {
          row.permissions[key] = newValue;
        });
      } else {
        row.permissions[permission] = !row.permissions[permission];
        row.permissions.all = Object.values(row.permissions).every(
          (value) => value
        );
      }

      return newData;
    });
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        height: "calc(100vh - 500px)",
        minHeight: "400px",
        overflow: "auto",
      }}
    >
      <Table size="medium" stickyHeader>
        <TableHead
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            backgroundColor: "rgba(12, 93, 159, 1) !important",
          }}
        >
          <TableRow>
            <TableCell
              className={`${styles.tableHeadCell} ${styles.tableHeadCellLarge}`}
            >
              เมนูการใช้งาน
            </TableCell>
            <TableCell
              className={`${styles.tableHeadCell} ${styles.tableHeadCellSmall}`}
              align="center"
            >
              ทั้งหมด
            </TableCell>
            <TableCell
              className={`${styles.tableHeadCell} ${styles.tableHeadCellSmall}`}
              align="center"
            >
              เพิ่ม
            </TableCell>
            <TableCell
              className={`${styles.tableHeadCell} ${styles.tableHeadCellSmall}`}
              align="center"
            >
              แก้ไข
            </TableCell>
            <TableCell
              className={`${styles.tableHeadCell} ${styles.tableHeadCellSmall}`}
              align="center"
            >
              ลบ
            </TableCell>
            <TableCell
              className={`${styles.tableHeadCell} ${styles.tableHeadCellMedium}`}
              align="center"
            >
              ดูรายละเอียด
            </TableCell>
            <TableCell
              className={`${styles.tableHeadCell} ${styles.tableHeadCellMedium}`}
              align="center"
            >
              พิมพ์
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((category, categoryIndex) => (
            <React.Fragment key={category.category}>
              <TableRow>
                <TableCell
                  colSpan={7}
                  className={styles.tableHeaderTitleCell}
                  sx={{ fontSize: "16px" }}
                >
                  {category.category}
                </TableCell>
              </TableRow>
              {category.rows.map((row, rowIndex) => (
                <TableRow key={row.name}>
                  <TableCell className={styles.tableTitleCell}>
                    <div className="flex items-center">
                      <div
                        style={{
                          height: "10px",
                          width: "10px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(12, 93, 159, 1)",
                        }}
                      ></div>
                      <div className="ml-3"> {row.name}</div>
                    </div>
                  </TableCell>
                  {Object.keys(row.permissions).map((permission) => (
                    <TableCell
                      key={permission}
                      align="center"
                      sx={{ fontSize: "16px" }}
                    >
                      <Checkbox
                        checked={row.permissions[permission]}
                        onChange={() =>
                          handleCheckboxChange(
                            categoryIndex,
                            rowIndex,
                            permission
                          )
                        }
                        sx={{
                          color: "#b0b0b0",
                          "&.Mui-checked": {
                            color: "#808080",
                          },
                          "& .MuiSvgIcon-root": { fontSize: 30 },
                        }}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PermissionsTable;
