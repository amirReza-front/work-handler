import React, { FormEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import {FromValidation} from '../constant/globalIntefaces'
import { useAppDispatch } from "./redux/hooks";
import { addWork } from "./redux/reducers/listWorksSlice";
const Form = () => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm<FromValidation>();
  const onSubmit = handleSubmit((data) =>  dispatch(addWork(data)));
  return (
    <>
      <form className="w-50 mx-auto mt-5 p-5 rounded-3 main-form" onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label className="my-1">عنوان کار</label>
          <input
            {...register("WorkTitle")}
            type="text"
            className="form-control"
            id="WorkTitle"
            placeholder="مثلا خوردن دارو"
          />
        </div>
        <div className="form-group  mb-3">
          <label className="my-1">توضیحات کار</label>
          <input
            {...register("WorkDescription")}
            type="text"
            className="form-control"
            id="WorkDescription"
            placeholder="باید ساعت 5 دارو بخورم"
          />
        </div>

        <button type="submit" className="btn btn-primary ms-auto d-block">
          ثبت تسک
        </button>
      </form>
      <hr className="mt-5" />
    </>
  );
};

export default Form;
