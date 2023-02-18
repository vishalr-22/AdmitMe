import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import moment from 'moment';

export default function FormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Name"
            type="text"
  {...register("name", { required: true, maxLength: 20, pattern: /^[a-zA-Z ]*$/ })}
          />
        </Form.Field>
        {errors.name && <p>Please check the First Name</p>}
        <Form.Field>
          <label>DOB</label>
          <input
            type="date"
            {...register("dob", {
              required: true,
            })}
            max={moment().format("YYYY-MM-DD")}
          />
        </Form.Field>
        {errors.dob && <p>Please check the DOB</p>}
        <Form.Field>
          <select
            {...register("class", {
              required: true,
            })}
          >
            <option value="1">Class I</option>
            <option value="2">Class II</option>
            <option value="3">Class III</option>
            <option value="4">Class IV</option>
            <option value="5">Class V</option>
            <option value="6">Class VI</option>
            <option value="7">Class VII</option>
            <option value="8">Class VIII</option>
            <option value="9">Class IX</option>
            <option value="10">Class X</option>
            <option value="11">Class XI</option>
            <option value="12">Class XII</option>
          </select>
          {errors.class && <p>Please check the Class</p>}
        </Form.Field>
        <Form.Field>
          <select
            {...register("division", {
              required: true,
            })}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </Form.Field>
        {errors.division && <p>Please check the division</p>}
        <Form.Field>
          <label>
            <input
              {...register("gender",{required:true})}
              type="radio"
              value="male"
              id="male"
              checked
            />
            Male
          </label>
          <label>
            <input
              {...register("gender", {required:true})}
              type="radio"
              value="female"
              id="female"
            />
            Female
          </label>
        </Form.Field>
        {errors.gender && <p>Please check the gender</p>}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
