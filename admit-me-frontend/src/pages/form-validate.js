import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import moment from "moment";
import '../styles/formValidate.css';

export default function FormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    await fetch("https://6416c7ce3a29ed1a1d9ae1dd--silver-bublanina-a72c31.netlify.app/addRecords", requestOptions).then(
      (response) => {
        console.log("kkkkkkkkk")
        console.log(response.status);
        if (response.status == 200) {
          alert("Data added successfully");
        } else {
          alert("Data already existing");
        }
      }
    );
  };

  return (
    <div className="container" id="formvalidate">
      <h3>Admission Details</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>Name</label>
          <div className="input-group mb-3">
            <input
              className="form-control"
              placeholder="Name"
              type="text"
              {...register("name", {
                required: true,
                maxLength: 20,
                pattern: /^[a-zA-Z ]*$/,
              })}
            />
          </div>
        </Form.Field>
        {errors.name && <p>Please check the First Name</p>}
        <div className="row">
          <div className="col-6">
            <Form.Field>
              <label>DOB</label>
              <br />
              <input
                type="date"
                {...register("dob", {
                  required: true,
                })}
                max={moment().format("YYYY-MM-DD")}
              />
            </Form.Field>
            {errors.dob && <p>Please check the DOB</p>}
          </div>

          <div className="col-6">
            <Form.Field>
              <label>Standard</label>
              <br />
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
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-6">
            <Form.Field>
              <label>Division</label>
              <br />
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
          </div>
          <div className="col-6">
            <Form.Field>
              <label>Gender</label>
              <br />
              <div className="row">
          <div className="col-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  {...register("gender", { required: true })}
                  type="radio"
                  value="male"
                  id="male"
                  checked
                />
                <label className="form-check-label">Male</label>
              </div>
</div>

<div className="col-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  {...register("gender", { required: true })}
                  type="radio"
                  value="female"
                  id="female"
                />
                <label className="form-check-label">Female</label>
              </div>
              </div>
              </div>
            </Form.Field>
            {errors.gender && <p>Please check the gender</p>}
          
          
          </div>
        </div>
        <br />
        <Button className="btn btn-primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
