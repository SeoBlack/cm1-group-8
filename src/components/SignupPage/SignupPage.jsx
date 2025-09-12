import React, { useState } from "react";
import "./SignupPage.css";

function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nationality: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const greetings = {
    fi: "Moi",
    en: "Hello",
    de: "Hallo",
    fr: "Bonjour",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // validation on change
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prev) => ({
        ...prev,
        email: emailRegex.test(value)
          ? "Email looks good"
          : "Wrong email address, check again",
      }));
    }

    if (name === "password") {
      setErrors((prev) => ({
        ...prev,
        password:
          value.length >= 8 ? "Password is strong" : "Password must be strong",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      errors.email === "Email looks good" &&
      errors.password === "Password is strong" &&
      formData.nationality
    ) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="signup-container">
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className={
              errors.email
                ? errors.email === "Email looks good"
                  ? "input-success"
                  : "input-error"
                : ""
            }
          />
        </label>
        <div
          className={`validation-msg ${
            errors.email === "Email looks good" ? "success" : "error"
          }`}
        >
          {errors.email}
        </div>

        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className={
              errors.password
                ? errors.password === "Password is strong"
                  ? "input-success"
                  : "input-error"
                : ""
            }
          />
        </label>
        <div
          className={`validation-msg ${
            errors.password === "Password is strong" ? "success" : "error"
          }`}
        >
          {errors.password}
        </div>

        <label>
          Nationality:
          <select
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Nationality --</option>
            <option value="fi">Finnish</option>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
        </label>

        <button type="submit">Sign Up</button>
      </form>

      {submitted && (
        <div className="result-message">
          {greetings[formData.nationality]}, your email address is{" "}
          <strong>{formData.email}</strong>.
        </div>
      )}
    </div>
  );
}

export default SignupPage;
