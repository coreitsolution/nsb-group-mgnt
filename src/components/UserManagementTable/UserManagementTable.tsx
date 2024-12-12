import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import editIcon from "../../assets/icons/pen.png";
import deleteIcon from "../../assets/icons/bin.png";
import filterIcon from "../../assets/icons/filter.png";
import { useNavigate } from "react-router-dom";

interface Column {
  id:
    | "fullName"
    | "affiliation"
    | "position"
    | "approvalStatus"
    | "usageStatus"
    | "userGroup"
    | "actions";
  label: string;
  minWidth?: number;
  align?: "center" | "left" | "right";
}

const columns: readonly Column[] = [
  { id: "fullName", label: "ชื่อ-นามสกุล", minWidth: 170, align: "center" },
  { id: "affiliation", label: "สังกัด", minWidth: 170, align: "center" },
  { id: "position", label: "ตำแหน่ง", minWidth: 170, align: "center" },
  {
    id: "approvalStatus",
    label: "สถานะอนุมัติ",
    minWidth: 170,
    align: "center",
  },
  {
    id: "usageStatus",
    label: "สถานะการใช้งาน",
    minWidth: 170,
    align: "center",
  },
  { id: "userGroup", label: "กลุ่มผู้ใช้งาน", minWidth: 170, align: "center" },
  { id: "actions", label: "แก้ไข/ลบ", minWidth: 50, align: "center" },
];

interface Data {
  id: number;
  fullName: string;
  affiliation: string;
  position: string;
  approvalStatus: string;
  usageStatus: string;
  userGroup: string;
}

const rows: Data[] = [
  {
    id: 1,
    fullName: "พ.ต.ต.อดิศร แสงสี",
    affiliation: "ตำรวจปราบปรามยาเสพติด 1",
    position: "สารวัตร",
    approvalStatus: "อนุมัติ",
    usageStatus: "Active",
    userGroup: "Admin",
  },
  {
    id: 2,
    fullName: "พ.ต.ต.กฤษ ธรรมรัตน์",
    affiliation: "ตำรวจปราบปรามยาเสพติด 1",
    position: "สารวัตร",
    approvalStatus: "อนุมัติ",
    usageStatus: "Active",
    userGroup: "User",
  },
  {
    id: 3,
    fullName: "พ.ต.ต.ภัทรนันท์ บลู",
    affiliation: "ตำรวจปราบปรามยาเสพติด 1",
    position: "สารวัตร",
    approvalStatus: "ไม่อนุมัติ",
    usageStatus: "Inactive",
    userGroup: "User",
  },
  {
    id: 4,
    fullName: "พ.ต.ต.อดิศร แสงสี",
    affiliation: "ตำรวจปราบปรามยาเสพติด 1",
    position: "สารวัตร",
    approvalStatus: "อนุมัติ",
    usageStatus: "Active",
    userGroup: "Super Admin",
  },
  {
    id: 5,
    fullName: "พ.ต.ต.อดิศร แสงสี",
    affiliation: "ตำรวจปราบปรามยาเสพติด 1",
    position: "สารวัตร",
    approvalStatus: "อนุมัติ",
    usageStatus: "Active",
    userGroup: "Super Admin",
  },
  {
    id: 6,
    fullName: "พ.ต.ต.อดิศร แสงสี",
    affiliation: "ตำรวจปราบปรามยาเสพติด 1",
    position: "สารวัตร",
    approvalStatus: "อนุมัติ",
    usageStatus: "Active",
    userGroup: "Super Admin",
  },
];

export default function UserManagementTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const navigate = useNavigate();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (id: number) => {
    navigate(`/user-management/user-form/${id}`); // Navigate to UserForm with the user ID
  };
  const handleDelete = (id: number) => {
    alert(`Delete user with ID: ${id}`);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 350 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "rgba(217, 217, 217)",
                  }}
                >
                  {column.id !== "action" && column.id !== "affiliation" ? (
                    <div className="flex items-center justify-center">
                      {column.label}
                      <img
                        className="mr-5"
                        style={{ cursor: "pointer" }}
                        src={filterIcon}
                        width={20}
                        height={10}
                      />
                    </div>
                  ) : (
                    column.label
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      if (column.id === "actions") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <div className="flex">
                              <img
                                className="mr-5"
                                style={{ cursor: "pointer" }}
                                src={editIcon}
                                width={15}
                                height={15}
                                onClick={() => handleEdit(row.id)}
                              />
                              <img
                                style={{ cursor: "pointer" }}
                                src={deleteIcon}
                                width={15}
                                height={15}
                                onClick={() => handleDelete(row.id)}
                              />
                            </div>
                          </TableCell>
                        );
                      }
                      const value = row[column.id as keyof Data];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
