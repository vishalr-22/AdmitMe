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
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };
  fetch('http://192.168.0.79:8093/addRecords', requestOptions)
      // .then(response => response.json())
      .then(console.log("data stored"));
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
            {...register("standard", {
              required: true,
            })}
          >
            <option value="I">Class I</option>
            <option value="II">Class II</option>
            <option value="III">Class III</option>
            <option value="IV">Class IV</option>
            <option value="V">Class V</option>
            <option value="VI">Class VI</option>
            <option value="VII">Class VII</option>
            <option value="VIII">Class VIII</option>
            <option value="IX">Class IX</option>
            <option value="X">Class X</option>
            <option value="XI">Class XI</option>
            <option value="XII">Class XII</option>
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
