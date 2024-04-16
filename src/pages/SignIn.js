import { useForm } from "react-hook-form"
import { Form, FormGroup, Label } from "reactstrap"
import { useNavigate } from "react-router-dom"

const SignIn = ({ signIn }) => {
  const navigate = useNavigate()
  const preloadedValues = {
    email: "test1@example.com",
    password: "password",
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: preloadedValues })

  const onSubmit = (formData) => {
    signIn({ user: formData })
    navigate("/")
  }

  return (
    <div className="edit-cont">
      <h2 className="title-header center-content">Sign In</h2>
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
        <div className="centering-content">
          <button onClick={handleSubmit} className="nav-button">
            Submit
          </button>
        </div>
      </Form>
    </div>
  )
}

export default SignIn
