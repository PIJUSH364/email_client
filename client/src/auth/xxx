import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-[#F7F9FC] text-center">
      <p>Login to ECL Intranet</p>
      <div className="w-[300px] flex_box justify-center border-2 m-40  mb-10">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <label>ESI No</label>
            <input
              placeholder="Enter Your Unique Code"
              type="number"
              {...register("esiCode", {
                required: true,
                minLength: 8,
                maxLength: 8,
              })}
            />
          </Form.Field>
          {errors.esiCode && <p>Please check the Esi Code</p>}
          <Form.Field>
            <label>Create Employee Code</label>
            <input
              placeholder="Create Unique Code"
              type="number"
              {...register("empCode", {
                required: true,
                minLength: 8,
                maxLength: 10,
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
                minLength: 8,
                maxLength: 10,
              })}
            />
          </Form.Field>
          {errors.password && <p>Please check the Password</p>}
          <Form.Field>
            <label>confirm Password</label>
            <input
              placeholder="Password"
              type="password"
              {...register("password", {
                required: true,

                validate: (val) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
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
