import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const StaffForm = (props) => {
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The first name you entered was: ${formData}`);

    fetch("http://localhost:9000/staffs/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    })
      .then((res) => res.text()) // TODO change to res.json
      .then((res) => console.log(res))
      .catch((err) => console.log("error"));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          First name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ [e.target.name]: e.target.value })}
          />
        </label>
        {/* TODO delete br tag */}
        <br />
        {/* <label>
          Last name:
          <input
            type="text"
            name="name"
            value={formData.lastName}
            onChange={(e) => setFormData({ [e.target]: e.target.value })}
          />
        </label> */}
        <input type="submit" />
      </form>

      <p>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          Go back
        </Button>
      </p>
    </>
  );
};
