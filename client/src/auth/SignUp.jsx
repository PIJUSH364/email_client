import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Form, Button } from "semantic-ui-react";

const SignUp = () => {
  const formSchema = Yup.object().shape({
    eisNo: Yup.string()
      .required("ESI  is mandatory")
      .min(8, "ESI  code exact 8 char")
      .max(8, "ESI  code exact 8 char"),
    empCode: Yup.string()
      .required("Employee code  is mandatory")
      .min(6, "Employee code  at least 6 char long")
      .max(8, "Employee code  not more than 8 char long"),
    password: Yup.string()
      .required("Password is mandatory")
      .min(3, "Password must be at 3 char long"),
    confirmPwd: Yup.string()
      .required("Password is mandatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

  return (
    <div className="bg-[#F7F9FC] text-center">
      <p>Login to ECL Intranet</p>
      <div className="w-[300px] flex_box justify-center border-2 m-40  mb-10">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <label>Eis no</label>
            <input
              name="eisNo"
              placeholder="Enter your Eis  Code"
              type="text"
              {...register("eisNo")}
            />
          </Form.Field>
          {errors.eisNo && <p>{errors.eisNo?.message}</p>}
          <Form.Field>
            <label>Employee Code</label>
            <input
              name="empCode"
              placeholder="Enter Unique Code"
              type="text"
              {...register("empCode")}
            />
          </Form.Field>
          {errors.empCode && <p>{errors.empCode?.message}</p>}
          <Form.Field>
            <label>Password</label>
            <input
              name="password"
              type="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <input
              name="confirmPwd"
              type="password"
              {...register("confirmPwd")}
              className={`form-control ${
                errors.confirmPwd ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
          </Form.Field>
          <div className="mt-3">
            <button type="submit" className="border-2 border-red-500">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
