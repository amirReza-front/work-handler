import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
const Form = () => {
  interface FromValidation {
    WorkDescription: string ;
    WorkTitle:string ;
  }
  const { register, handleSubmit } = useForm<FromValidation>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <>
      <form className="w-50 mx-auto mt-5" onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label className="my-1">عنوان کار</label>
          <input
            {...register("WorkTitle")}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="مثلا خوردن دارو"
          />
        </div>
        <div className="form-group  mb-3">
          <label className="my-1">توضیحات کار</label>
          <input
            {...register("WorkDescription")}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="باید ساعت 5 دارو بخورم"
          />
        </div>

        <button type="submit" className="btn btn-primary ms-auto d-block">
          Submit
        </button>
      </form>
      <hr className="mt-5" />
    </>
  );
};

export default Form;
