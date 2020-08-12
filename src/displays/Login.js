import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { login } from "../services/apiService";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const [isLogin, setIsLogin] = useState(false);

  const onSubmit = async (data) => {
    const res = await login(data);
    if (res.status === "ok") {
      localStorage.setItem("token", res.data.token);
      setIsLogin(true);
    }
    if (res.status === "error") {
      res.data.errors.map((data) => {
        return alert(data.msg);
      });
    }
  };

  if (isLogin) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center bg-primary p-2 my-3 rounded text-light">
          <h4>User Login</h4>
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
          Sign in
        </button>
      </form>
      <p className="mt-5 text-center">
        Want to
        <Link to="/signup"> Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
