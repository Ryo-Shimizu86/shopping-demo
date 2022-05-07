import { useContext } from "react";
import { UserInputData } from "./StaffForm";
import Button from "react-bootstrap/Button";

export const StaffFormConfirm = (props) => {
  const { currentState } = useContext(UserInputData);
  const { firstName, lastName, email, username, passsword } = currentState.data;
  const data = currentState.data;
  const onSubmit = () => {
    alert(JSON.stringify(data));

    fetch("http://localhost:9000/staffs/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res)) // TODO show error message in screen
      .catch((err) => console.log("error"));
  };

  return (
    <>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{email}</div>
      <div>{username}</div>
      <div>{passsword}</div>
      <Button variant="primary" onClick={props.handleBack}>
        Back
      </Button>
      <Button variant="primary" onClick={onSubmit}>
        Regist
      </Button>
    </>
  );
};
