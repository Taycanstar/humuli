import { SlimLayout } from "@/components/SlimLayout";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import LogoLayout from "@/components/LogoLayout";
import { NavLink } from "@/components/NavLink";
import { useRouter } from "next/router";
import { AppDispatch } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { addInfo, signup } from "@/store/user";
import { unwrapResult } from "@reduxjs/toolkit";
import { LOCAL } from "@/constants";
import axios from "axios";

const url = "http://127.0.0.1:8000";
const Info: React.FC & { Layout?: React.ComponentType<any> } = () => {
  const router = useRouter();
  const { token, email } = router.query;
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [org, setOrg] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const [num, setNum] = useState<string>("");
  const [formError, setFormError] = useState("");
  const [isError, setIsError] = useState(false);

  const handleBdChange = (inputValue: string) => {
    const input = inputValue.replace(/\D/g, ""); // Remove non-digit characters
    let formattedDate = "";

    if (input.length > 0) {
      formattedDate += input.substr(0, 2);
    }
    if (input.length > 2) {
      formattedDate += "/" + input.substr(2, 2);
    }
    if (input.length > 4) {
      formattedDate += "/" + input.substr(4, 4);
    }

    setBirthday(formattedDate);
  };

  const handleBirthdayChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleBdChange(event.target.value);
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    if (num === "" && currentValue !== "+") {
      setNum("+1" + currentValue);
    } else {
      setNum(currentValue);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // Check if the required fields are filled
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !birthday.trim() ||
      !num.trim()
    ) {
      setFormError("Please fill in all required fields.");
      setIsError(true);
      return;
    }

    if (!isError) {
      try {
        const resultAction = await dispatch(
          addInfo({
            email: email as string,
            firstName: firstName,
            lastName: lastName,
            organization: org,
            phoneNumber: num,
            birthday,
          })
        );
        unwrapResult(resultAction);
        // Handle success here
        router.push({
          pathname: "/onboarding/verify-phone",
          query: { email: email, phoneNumber: num },
        });
        console.log("add info successful");
      } catch (error: any) {
        // Handle error here
        console.error("add info error:", error);
        // Directly use the error message from the backend
        setFormError(error.message || "Invalid phone number");
        setIsError(true);
      }
    }
  };

  // Event handler for email input changes
  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleOrgChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOrg(event.target.value);
  };
  useEffect(() => {
    const confirmUser = async () => {
      if (token && email) {
        try {
          const response = await fetch(`${LOCAL}/confirm-email/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // 'X-CSRFToken': csrfToken // Include this if CSRF is used.
            },
            body: JSON.stringify({
              email: email,
              confirmationToken: token,
              // Don't send confirmationToken from client-side
            }),
          });

          const data = await response.json();

          // Check if the request was successful
          if (response.ok) {
            console.log("Email verified", data.message);
          } else {
            // Handle errors, such as displaying a message to the user
            console.error("Failed to verify email", data.message);
          }
        } catch (error) {
          console.error(
            "An error occurred while sending the verification email:",
            error
          );
        }
      }
    };

    if (token && email) {
      confirmUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, email]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isError) {
      timer = setTimeout(() => {
        setIsError(false);
        setFormError("");
      }, 5000);
    }

    // Clear the timer when the component unmounts or isError changes
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isError]);

  return (
    <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm space-y-10">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center space-x-3"></div>

          <h2 className="mt-1 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Give us a glimpse about yourself{" "}
          </h2>
        </div>

        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <div className="flex space-x-2">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  value={firstName}
                  placeholder="First Name"
                  className="relative block w-full rounded-md border-0 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                  onChange={handleFirstNameChange}
                />
              </div>
              {/* Last Name */}
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  value={lastName}
                  placeholder="Last name"
                  className="relative block w-full rounded-md border-0 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                  onChange={handleLastNameChange}
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                name="organization"
                value={org}
                id="organization"
                placeholder="Organization (Optional)"
                className="relative block w-full rounded-md border-0 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                onChange={handleOrgChange}
              />
            </div>

            <div>
              <input
                type="text"
                name="birthday"
                placeholder="MM/DD/YYYY"
                id="birthday"
                value={birthday}
                className="relative block w-full rounded-md border-0 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                onChange={handleBirthdayChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="phone number"
                placeholder="Phone number"
                value={num}
                id="num"
                className="relative block w-full rounded-md border-0 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                onChange={handleInputChange}
              />
            </div>
          </div>
          {isError && <p className="text-sm text-red-600">{formError}</p>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-400 px-3 py-2.5 text-sm font-semibold leading-6 text-white hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Continue
            </button>
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor="remember-me"
              className="block text-sm text-gray-900"
            >
              Already have an account?
            </label>
            <a
              href="/auth/login"
              className="text-blue-500 mx-2 text-sm hover:text-blue-300"
            >
              Log in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

Info.Layout = LogoLayout;
export default Info;
