import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    DOB: "",
    password: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: "",
    DOB: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    let emailError = "";
    let dobError = "";
    let passwordError = "";

    // Validate email
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(formData.email)) {
      emailError = "Invalid email";
    }

    // Validate DOB
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dobRegex.test(formData.DOB)) {
      dobError = "Invalid date of birth format (yyyy-mm-dd)";
    }

    // Validate password
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      passwordError =
        "Password must be at least 8 characters and contain at least 1 uppercase letter, 1 number, and 1 special character";
    }

    if (emailError || dobError || passwordError) {
      setFormErrors({
        email: emailError,
        DOB: dobError,
        password: passwordError,
      });
      return false;
    } else {
      return true;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        const res = await fetch("http://localhost:4000/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          setFormSubmitted(true);
          setFormData({
            name: "",
            email: "",
            DOB: "",
            password: "",
          });
          setFormErrors({
            email: "",
            DOB: "",
            password: "",
          });
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && <p>{formErrors.email}</p>}
      </div>
      <div>
        <label htmlFor="DOB">Date of Birth:</label>
        <input
          type="text"
          id="DOB"
          name="DOB"
          value={formData.DOB}
          onChange={handleInputChange}
        />
        {formErrors.DOB && <p>{formErrors.DOB}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {formErrors.password && <p>{formErrors.password}</p>}
      </div>
      <button type="submit">Submit</button>
      {formSubmitted && <p>Form submitted successfully!</p>}
    </form>
  );
};

export default RegistrationForm;
