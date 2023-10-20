import { useForm } from "react-hook-form";

import "./index.css";

function SimpleForm() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="App">
      <h1 className="h1">Simplest React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label">
          First Name
          <input
            className="input"
            {...register("firstName", {
              required: "This field is required",
              minLength: {
                value: 2,
                message: "Should be at least 2 characters long",
              },
            })}
          />
        </label>
        <div>
          {errors?.firstName && (
            <p className="p">
              {errors?.firstName?.message || "Error! Fill in the field"}
            </p>
          )}
        </div>

        <label className="label">
          Last Name
          <input
            className="input"
            {...register("lastName", {
              required: "This field is required",
              minLength: {
                value: 2,
                message: "Should be at least 2 characters long",
              },
            })}
          />
        </label>
        <div>
          {errors?.lastName && (
            <p className="p">
              {errors?.lastName?.message || "Error! Fill in the field"}
            </p>
          )}
        </div>

        <input type="submit" value="Send" disabled={!isValid} />
      </form>
    </div>
  );
}

export default SimpleForm;
