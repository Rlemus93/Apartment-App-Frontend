import { useForm } from "react-hook-form"
import { Form, FormGroup, Label } from "reactstrap"
import { Link, useNavigate } from "react-router-dom"
import homesteadLogo from "../assets/HomeSteadLiving.png"

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
      <div className="sign-up-form">
        <h2 className="sign-in-title">Create an Account</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup floating>
            <input
              style={{
                width: "30vw",
              }}
              id="email"
              name="email"
              placeholder="email"
              type="email"
              className="form-control"
              {...register("email", { required: true })}
            />
            <Label for="email">Enter Your Email</Label>
            {errors.email && (
              <span className="form-validations">Email is required</span>
            )}
          </FormGroup>
          <FormGroup floating>
            <input
              style={{
                width: "30vw",
              }}
              id="password"
              name="password"
              placeholder="password"
              type="password"
              className="form-control"
              {...register("password", { required: true })}
            />
            <Label for="password">Enter Your Password</Label>
            {errors.password && (
              <span className="form-validations">Password is required</span>
            )}
          </FormGroup>
          <FormGroup floating>
            <input
              style={{
                width: "30vw",
              }}
              id="password_confirmation"
              name="password_confirmation"
              placeholder="Password Confirmation"
              type="Password"
              className="form-control"
              {...register("password_confirmation", { required: true })}
            />
            <Label for="password_confirmation">Password Confirmation</Label>
            {errors.password_confirmation && (
              <span className="form-validations">
                Password Confirmation is required
              </span>
            )}
          </FormGroup>
          <button
            onClick={handleSubmit}
            className="nav-button"
            style={{
              borderRadius: "0.375rem",
              padding: "10px 20px",
              backgroundColor: "#CBA86B",
              color: "black",
              width: "30vw",
            }}
          >
            Sign Up
          </button>
          <p>
            Aleady have an account?{" "}
            <Link to="/signin" style={{ color: "#cba86b" }}>
              Signin
            </Link>
          </p>
        </Form>
        <div className="sign-up-logo-cont">
          <Link to="/">
            <img
              src={homesteadLogo}
              alt="apartment logo of a gold bull"
              className="sign-up-logo"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
