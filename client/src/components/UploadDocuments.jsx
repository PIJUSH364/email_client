import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const UploadDocuments = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post('http://localhost:5000/emp/emp_content', data)
      .then(function (response) {
        console.log(response.data);
        alert(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="   flex flex-col justify-center items-center p-4">
      <p className="text-2xl pb-2">upload a document</p>
      <Form
        className="border-[1px] p-6 rounded-lg border-slate-400 w-[400px]"
        onSubmit={handleSubmit(onSubmit)}>
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
        {/* <Form.Field>
          <label>upload pdf</label>
          <input
            placeholder="upload pdf"
            type="file"
            accept=".pdf"
            {...register("uploadPdf", {
              required: true,
            })}
          />
        </Form.Field>{" "} */}

        <div className="text-center mt-12">
          <button type="submit" className="border-[2px] p-1 rounded-lg text-lg px-6  border-slate-400">Submit</button>
        </div>

      </Form>
    </div>
  );
};
