import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
export const Login = () => {
  const user = useSelector((state) => state.user.userInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(user);
    console.log(data);
  };
  return (
    <div className="   flex flex-col justify-center items-center p-4">
      <p className="text-2xl pb-2">Login to ECL Intranet</p>
      <Form
        className="border-[1px] p-6 rounded-lg border-slate-400"
        onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>Employee Code</label>
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
        <div className="text-center mt-12">
          <button type="submit" className="border-[2px] p-1 rounded-lg text-lg px-6  border-slate-400">Submit</button>
        </div>

      </Form>
    </div>
  );
};
