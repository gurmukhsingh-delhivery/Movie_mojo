import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { serverUrl } from "../../constants/serverDetails";

const Register = () => {
  const router = useRouter();
  let { id } = router.query;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
    confirm_password: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: "",
    dob: "",
    password: "",
    samePass: "",
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
    let samePassError = "";

    // Validate email
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(formData.email)) {
      emailError = "Invalid email";
    }

    // Validate dob
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dobRegex.test(formData.dob)) {
      dobError = "Invalid date of birth format (yyyy-mm-dd)";
    }

    // Validate password
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      passwordError =
        "Password must be at least 8 characters and contain at least 1 uppercase letter, 1 number, and 1 special character";
    }

    console.log(formData.password, formData.confirm_password);
    if (formData.password.localeCompare(formData.confirm_password) != 0)
      samePassError = "confirm password and password are not same";

    if (emailError || dobError || passwordError || samePassError) {
      setFormErrors({
        email: emailError,
        dob: dobError,
        password: passwordError,
        samePass: samePassError,
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
        const res = await fetch(`${serverUrl}user/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          console.log("here");

          // here we will have to wait for some time and show that user has successfully registered with us
          alert("user was successfully registered");
          setTimeout(() => {
            router.push("/login");
            setFormSubmitted(true);
            setFormData({
              name: "",
              email: "",
              dob: "",
              password: "",
              confirm_password: "",
            });
            setFormErrors({
              email: "",
              dob: "",
              password: "",
              samePass: "",
            });
          }, 1000);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form
              class="space-y-4 md:space-y-6"
              onSubmit={handleFormSubmit}
              action={`${serverUrl}user/register`}
              method="POST"
            >
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="off"
                  required=""
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="off"
                  required=""
                />

                <p className="text-gray-400">
                  email should end with @gmail.com
                </p>

                {formErrors.email && (
                  <p className="text-red-600">{formErrors.email}</p>
                )}
              </div>

              <div>
                <label
                  for="dob"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date of Birth
                </label>
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="off"
                  required=""
                />
                <p className="text-gray-400">
                  should be in the format yyyy-mm-dd
                </p>
                {formErrors.dob && (
                  <p className="text-red-600">{formErrors.dob}</p>
                )}
              </div>

              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="off"
                  required=""
                />
                <p className="text-gray-400">
                  Password must be at least 8 characters and contain at least 1
                  uppercase letter, 1 number, and 1 special character
                </p>

                {formErrors.password && (
                  <p className="text-red-600">{formErrors.password}</p>
                )}
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleInputChange}
                  id="confirm-password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="off"
                  required=""
                />
                <p className="text-gray-400">
                  Confirm password and password should be same
                </p>
                {formErrors.samePass && (
                  <p className="text-red-600">{formErrors.samePass}</p>
                )}
              </div>

              <button
                type="submit"
                class="w-full text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                {formSubmitted && <p>Form submitted successfully!</p>}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
