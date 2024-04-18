import { useForm } from "react-hook-form"
import { Col, Form, FormGroup, Label, Row } from "reactstrap"
import { Link, useNavigate } from "react-router-dom"

const New = ({ createHomeStead, currentUser }) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (newHomeStead) => {
    newHomeStead.user_id = currentUser.id
    createHomeStead(newHomeStead)
    navigate("/myhomesteads")
  }

  return (
    <div className="page-body">
      <div className="new-form">
        <Form onSubmit={handleSubmit(onSubmit)} className="form-size">
          <h3 className="title-header center-content">Add a New Homestead</h3>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="street">Street Address</Label>
                <input
                  style={{
                    width: "30vw",
                  }}
                  id="street"
                  name="street"
                  placeholder="Street Address"
                  type="text"
                  className="form-control"
                  {...register("street", { required: true })}
                />
                {errors.street && (
                  <span className="form-validations">Address is required</span>
                )}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="unit">Unit</Label>
                <input
                  style={{
                    width: "30vw",
                  }}
                  id="unit"
                  name="unit"
                  placeholder="Unit"
                  type="text"
                  className="form-control"
                  {...register("unit", { required: true })}
                />
                {errors.unit && (
                  <span className="form-validations">Unit is required</span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="city">City</Label>
                <input
                  style={{
                    width: "30vw",
                  }}
                  id="city"
                  name="city"
                  placeholder="City"
                  type="text"
                  className="form-control"
                  {...register("city", { required: true })}
                />
                {errors.city && (
                  <span className="form-validations">City is required</span>
                )}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="state">State</Label>
                <input
                  style={{
                    width: "30vw",
                  }}
                  id="state"
                  name="state"
                  placeholder="State"
                  type="text"
                  className="form-control"
                  {...register("state", { required: true })}
                />
                {errors.state && (
                  <span className="form-validations">State is required</span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="square_footage">Square Footage</Label>
                <input
                  style={{
                    width: "30vw",
                  }}
                  id="square_footage"
                  name="square_footage"
                  placeholder="Square Footage"
                  type="number"
                  min="0"
                  className="form-control"
                  {...register("square_footage", { required: true })}
                />
                {errors.square_footage && (
                  <span className="form-validations">
                    Square Footage is required
                  </span>
                )}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="price">Monthly Rental Price</Label>
                <input
                  style={{
                    width: "30vw",
                  }}
                  id="price"
                  name="price"
                  placeholder="Price"
                  type="text"
                  className="form-control"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="form-validations">Price is required</span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="bedrooms">Bedrooms</Label>
                <input
                  style={{
                    width: "30vw",
                  }}
                  id="bedrooms"
                  name="bedrooms"
                  placeholder="Bedrooms"
                  type="number"
                  min="0"
                  className="form-control"
                  {...register("bedrooms", { required: true })}
                />
                {errors.bedrooms && (
                  <span className="form-validations">Bedrooms is required</span>
                )}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="bathrooms">Bathrooms</Label>
                <input
                  style={{
                    width: "30vw",
                  }}
                  id="bathrooms"
                  name="bathrooms"
                  placeholder="Bathrooms"
                  type="float"
                  min="0"
                  className="form-control"
                  {...register("bathrooms", { required: true })}
                />
                {errors.bathrooms && (
                  <span className="form-validations">
                    Bathrooms is required
                  </span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="pets">Pet Policy</Label>
                <input
                  style={{
                    width: "30vw",
                  }}
                  id="pets"
                  name="pets"
                  placeholder="Pets"
                  type="text"
                  className="form-control"
                  {...register("pets", { required: true })}
                />
                {errors.pets && (
                  <span className="form-validations">Pets is required</span>
                )}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="image">Image URL</Label>
                <input
                  style={{
                    width: "30vw",
                  }}
                  id="image"
                  name="image"
                  placeholder="Image"
                  type="text"
                  className="form-control"
                  {...register("image", { required: true })}
                />
                {errors.image && (
                  <span className="form-validations">Image is required</span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Col md={6}>
            <FormGroup>
              <Label for="about">Tell Us About Your Homestead</Label>
              <input
                style={{
                  width: "61.5vw",
                }}
                id="about"
                name="about"
                placeholder="about"
                type="text"
                className="form-control"
                {...register("about", { required: true })}
              />
              {errors.about && (
                <span className="form-validations">
                  An About Section is required
                </span>
              )}
            </FormGroup>
          </Col>
          <div className="center-content">
            <button className="new-edit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default New
