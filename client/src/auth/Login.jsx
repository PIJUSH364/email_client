import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { isAuth } from "../controller/userDeatils";
export const Login = () => {
  const logIngStatus = useSelector((state) => state.user.authStatus);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/emp/login", data)
      .then(function (response) {
        console.log(response.data);
        alert(response.data.message);
        console.log(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      {!logIngStatus && (
        <div className="   flex flex-col justify-center items-center p-4 py-[5rem]">
          <p className="text-3xl pb-2">Login to ECL Intranet</p>
          <Form
            className="border-[1px] p-10 pb-2 rounded-lg border-slate-400 w-[400px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Form.Field>
              <label className="capitalize">Employee Code</label>
              <input
                placeholder="Enter Unique Code"
                type="text"
                {...register("empCode", {
                  required: true,
                  minLength: 8,
                  maxLength: 8,
                })}
              />
            </Form.Field>
            {errors.empCode && <p>Please check the Employee Code</p>}
            <Form.Field>
              <label>Password</label>
              <input
                placeholder="Password"
                type="password"
                {...register("password", {
                  required: true,
                  // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                })}
              />
            </Form.Field>
            {errors.password && <p>Please check the Password</p>}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="border-[2px] p-1 rounded-lg text-lg px-6  border-slate-400"
              >
                Submit
              </button>
            </div>
            {/* <p
              className="pt-2 tracking-wide underline text-sky-700 cursor-pointer"
              onClick={() => dispatch(isAuth(!isAuth))}
            >
              Don't have account ? create account
            </p> */}
          </Form>
        </div>
      )}
    </>
  );
};
