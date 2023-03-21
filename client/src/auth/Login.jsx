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
    <div className="bg-[#F7F9FC] text-center">
      <p>Login to ECL Intranet</p>
      <div className="w-[300px] flex_box justify-center border-2 m-40  mb-10">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <label>Employee Code</label>
            <input
              placeholder="Enter Unique Code"
              type="number"
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
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
};
