import React, { useState } from "react";
import "./signup.scss";
import { registerUserService } from "../../../api/services/auth-services";
import Loader from "./../../../components/loader/Loader";
import InputField from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { registerUserFields } from "../constants";

const Signup = () => {
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
    <div className="signup-container">
      {loading && <Loader />}
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {registerUserFields?.map((item) => {
          return (
            <InputField
              key={item?.name}
              name={item?.name}
              id={item?.id}
              type={item?.type}
              placeholder={item?.placeholder}
              value={formData[item?.name] || ""}
              label={item?.label}
              onChange={handleInputChange}
              required={item?.required}
              disabled={item?.disabled}
            />
          );
        })}

        <Button icon={loading} disabled={loading}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
