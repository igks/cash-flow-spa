import React from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { login } from "../services/apiService";
import { setAlert } from "../redux/actions/alert";
import { loginSuccess, loginFail } from "../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const res = await login(data);
    if (res.status === "ok") {
      localStorage.setItem("token", res.data.token);
      setAlert(dispatch, "Login success.", "success");
      loginSuccess(dispatch);
    }
    if (res.status === "error") {
      res.data.errors.map((data) => {
        return setAlert(dispatch, data.msg, "danger");
      });
      loginFail(dispatch);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="container">
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
          Login<span className="oi oi-account-login"></span>
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
