import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export const UploadDocuments = () => {
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
      <p>upload a document</p>
      <div className="w-[300px] flex_box justify-center border-2 m-40  mb-10">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <label>Document no</label>

            <input
              placeholder="Enter Document no"
              type="text"
              {...register("DocumentNo", {
                required: true,
                minLength: 8,
                maxLength: 8,
              })}
            />
          </Form.Field>{" "}
          {errors.DocumentNo && <p>Please check the DocumentNo</p>}
          <Form.Field>
            <label>ref no </label>

            <input
              placeholder="Enter ref no "
              type="text"
              {...register("refNo", {
                required: true,
                minLength: 8,
                maxLength: 8,
              })}
            />
          </Form.Field>
          <Form.Field>
            <label>Document type</label>

            <input
              placeholder="Enter Document type"
              type="text"
              {...register("DocumentType", {
                required: true,
                minLength: 8,
                maxLength: 8,
              })}
            />
          </Form.Field>
          <Form.Field>
            <label>title</label>

            <input
              placeholder="Enter title"
              type="text"
              {...register("title", {
                required: true,
                minLength: 8,
                maxLength: 8,
              })}
            />
          </Form.Field>
          <Form.Field>
            <label>section</label>

            <input
              placeholder="Enter section"
              type="text"
              {...register("section", {
                required: true,
                minLength: 8,
                maxLength: 8,
              })}
            />
          </Form.Field>{" "}
          <Form.Field>
            <label>department</label>

            <input
              placeholder="department"
              type="text"
              {...register("department", {
                required: true,
                minLength: 8,
                maxLength: 8,
              })}
            />
          </Form.Field>{" "}
          <Form.Field>
            <label>search keyWord</label>

            <input
              placeholder="search keyWord"
              type="text"
              {...register("searchkeyWord", {
                required: true,
                minLength: 8,
                maxLength: 8,
              })}
            />
          </Form.Field>{" "}
          <Form.Field>
            <label>upload pdf</label>
            <input
              placeholder="upload pdf"
              type="text"
              {...register("uploadPdf", {
                required: true,
                minLength: 8,
                maxLength: 8,
              })}
            />
          </Form.Field>{" "}
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
};
