import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";

export const StaffForm = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    alert(`Proceed register?`);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name:</label>
        {/* TODO change input to component */}
        <input
          type="text"
          {...register("firstName", {
            required: {
              value: true,
              message: "First name is required",
            },
            minLength: {
              value: 2,
              message: "The minimum length for first name is 2",
            },
            maxLength: {
              value: 50,
              message: "The maximum length for first name is 50",
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "First name must contain only alphabets",
            },
          })}
          placeholder="First name"
        />
        {errors.firstName && (
          <div className="error">{errors.firstName.message}</div>
        )}

        {/* TODO delete br tag */}
        <br />
        <label>Last name:</label>
        <input
          type="text"
          {...register("lastName", {
            required: {
              value: true,
              message: "Last name is required",
            },
            minLength: {
              value: 2,
              message: "The minimum length for last name is 2",
            },
            maxLength: {
              value: 50,
              message: "The maximum length for last name is 50",
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "First name must contain only alphabets",
            },
          })}
          placeholder="Last name"
        />
        {errors.lastName && (
          <div className="error">{errors.lastName.message}</div>
        )}

        {/* TODO delete br tag */}
        <br />
        <label>Email:</label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            maxLength: {
              value: 255,
              message: "The maximum length for email is 255",
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email address",
            },
          })}
          placeholder="Email"
        />
        {errors.email && <div className="error">{errors.email.message}</div>}

        {/* TODO delete br tag */}
        <br />
        <label>Username:</label>
        <input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
            minLength: {
              value: 2,
              message: "The minimum length for username is 2",
            },
            maxLength: {
              value: 50,
              message: "The maximum length for username is 50",
            },
          })}
          placeholder="Username"
        />
        {errors.username && (
          <div className="error">{errors.username.message}</div>
        )}

        {/* TODO delete br tag */}
        <br />
        <label>Password:</label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 8,
              message: "The minimum length for password is 8",
            },
            maxLength: {
              value: 255,
              message: "The maximum length for password is 255",
            },
          })}
          placeholder="Password"
        />
        {errors.password && (
          <div className="error">{errors.password.message}</div>
        )}

        {/* TODO delete br tag */}
        <br />
        <label>Repeat password:</label>
        <input
          type="password"
          {...register("passwordRepeat", {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 8,
              message: "The minimum length for password is 8",
            },
            maxLength: {
              value: 255,
              message: "The maximum length for password is 255",
            },
            validate: (val) => {
              if (watch("password") !== val) {
                return "Password does not match";
              }
            },
          })}
          placeholder="Repeat Password"
        />
        {errors.passwordRepeat && (
          <div className="error">{errors.passwordRepeat.message}</div>
        )}

        {/* TODO delete br tag */}
        <br />
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
