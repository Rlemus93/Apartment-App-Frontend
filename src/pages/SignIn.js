import { useForm } from "react-hook-form"
import { Form, FormGroup, Label } from "reactstrap"
import { Link, useNavigate } from "react-router-dom"
import homesteadLogo from "../assets/HomeSteadLiving.png"

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
    <>
      <div className="edit-cont">
        <div className="sign-in-form">
          <h2 className="sign-in-title">Sign In</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup floating>
              <input
                style={{
                  width: "30vw",
                }}
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                className="form-control"
                {...register("email", { required: true })}
              />
              <Label for="email">Email</Label>
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
              <Label for="password">Password</Label>
              {errors.password && (
                <span className="form-validations">Password is required</span>
              )}
            </FormGroup>{" "}
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
              Sign In
            </button>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" style={{ color: "#cba86b" }}>
                Signup
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
    </>
  )
}

export default SignIn
