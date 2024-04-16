import { useForm } from "react-hook-form"
import { Form, FormGroup, Label } from "reactstrap"
import { useNavigate } from "react-router-dom"

const SignUp = ({ signUp }) => {
  const navigate = useNavigate()
  const preloadedValues = {
    email: "test@example.com",
    password: "password",
    password_confirmation: "password",
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: preloadedValues })

  const onSubmit = (newUser) => {
    signUp({ user: newUser })
    navigate("/")
  }

  return (
    <div className="edit-cont">
      <h2 className="title-header center-content">Create an Account</h2>
      <Form onSubmit={handleSubmit(onSubmit)} className="form-cont">
        <FormGroup>
          <Label for="email">Enter Your Email</Label>
          <input
            id="email"
            name="email"
            placeholder="email"
            type="email"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="form-validations">Email is required</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="password">Enter Your Password</Label>
          <input
            id="password"
            name="password"
            placeholder="password"
            type="password"
            className="form-control"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="form-validations">Password is required</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="Password_Confirmation">Password Confirmation</Label>
          <input
            id="Password_Confirmation"
            name="Password_Confirmation"
            placeholder="Password Confirmation"
            type="Password"
            className="form-control"
            {...register("Password_Confirmation", { required: true })}
          />
          {errors.enjoys && (
            <span className="form-validations">
              Password Confirmation is required
            </span>
          )}
        </FormGroup>
        <div className="centering-content">
          <button onClick={handleSubmit} className="nav-button">
            Submit
          </button>
        </div>
      </Form>
    </div>
  )
}

export default SignUp
