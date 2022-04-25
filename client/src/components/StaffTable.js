import React from "react";
import "./StaffTable.css";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const StaffTable = (props) => {
  const navigate = useNavigate();

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr className="table-header">
            <th>Staff ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {props.staffs.map((staff) => (
            <tr key={staff.staff_id}>
              <td>{staff.staff_id}</td>
              <td>{staff.first_name}</td>
              <td>{staff.last_name}</td>
              <td>{staff.email}</td>
              <td>{staff.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <p>
        <Button variant="primary" onClick={() => navigate("/add")}>
          New Staff Member...
        </Button>
      </p>
    </div>
  );
};
