import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { signUp } from "../services/apiService";
import { setAlert } from "../redux/actions/alert";

const SignUp = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const [isRegistered, setIsRegistered] = useState(false);

  const onSubmit = async (data) => {
    const res = await signUp(data);
    if (res.status === "ok") {
      localStorage.setItem("token", res.data.token);
      setIsRegistered(true);
      setAlert(dispatch, "Register success!", "success");
    }
    if (res.status === "error") {
      res.data.errors.map((data) => {
        return setAlert(dispatch, data.msg, "danger");
      });
    }
  };

  if (isRegistered) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center bg-primary p-2 my-3 rounded text-light">
          <h4>User Sign Up</h4>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className={errors.name ? "form-control is-invalid" : "form-control"}
            id="name"
            placeholder="Username"
            ref={register({
              required: true,
            })}
          />
          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail2">Email address</label>
          <input
            type="email"
            name="email"
            className={
              errors.email ? "form-control is-invalid" : "form-control"
            }
            id="exampleDropdownFormEmail2"
            placeholder="email@example.com"
            ref={register({
              required: true,
            })}
          />
          {errors.email && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormPassword2">Password</label>
          <input
            type="password"
            name="password"
            className={
              errors.password ? "form-control is-invalid" : "form-control"
            }
            id="exampleDropdownFormPassword2"
            placeholder="Password"
            ref={register({
              required: true,
            })}
          />
          {errors.password && (
            <span className="text-danger">This field is required</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Sign up
        </button>
      </form>
      <p className="mt-5 text-center">
        Have an account?
        <Link to="/"> Please Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
