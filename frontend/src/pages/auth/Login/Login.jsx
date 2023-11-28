import { useState } from "react";
import "./Login.scss";
import { logonUserService } from "../../../api/services/auth-services";
import { loginUserFields } from "../constants";
import Form from "../../../components/form/Form";
import Heading from "../../../components/heading/Heading";

const Login = () => {
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
    const res = await logonUserService(formData);
    console.log(res);
    setLoading(false);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <Heading className="text-center" title="Welcome back" />
        <Heading
          className="text-center h6 Login-container-heading"
          title="Login to app"
        />
        <Form
          handleSubmit={handleSubmit}
          fields={loginUserFields}
          formValues={formData}
          handleInputChange={handleInputChange}
          formButtonIcon={loading}
          formButtonDisable={loading}
          formButtonText="Login"
          formButtonType="submit"
          formButtonClass={"btn btn-primary w-100 text-center"}
        />
      </div>
    </div>
  );
};

export default Login;
