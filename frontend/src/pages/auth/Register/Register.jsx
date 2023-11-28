import { useState } from "react";
import "./register.scss";
import { registerUserService } from "../../../api/services/auth-services";
import { registerUserFields } from "../constants";
import Form from "../../../components/form/Form";
import Heading from "../../../components/heading/Heading";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle changes in form input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await registerUserService(formData);
    console.log(res);
    setLoading(false);
  };

  return (
    <div className="register">
      <div className="register-container">
        <Heading className="text-center" title="Register user" />
        <Form
          handleSubmit={handleSubmit}
          fields={registerUserFields}
          formValues={formData}
          handleInputChange={handleInputChange}
          formButtonIcon={loading}
          formButtonDisable={loading}
          formButtonText={"Register"}
          formButtonType={"submit"}
          formButtonClass={"btn btn-primary w-100 text-center"}
        />
      </div>
    </div>
  );
};

export default Register;
