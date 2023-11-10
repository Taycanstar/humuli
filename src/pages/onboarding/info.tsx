import { SlimLayout } from "@/components/SlimLayout";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import LogoLayout from "@/components/LogoLayout";
import { NavLink } from "@/components/NavLink";
import { useRouter } from "next/router";

const Info: React.FC & { Layout?: React.ComponentType<any> } = () => {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior.
    console.log("Submitting form", { email, password });

    try {
      const response = await fetch("http://127.0.0.1:8000/verify-email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'X-CSRFToken': csrfToken // Include this if CSRF is used.
        },
        body: JSON.stringify({
          email: email,
          password: password,
          // Don't send confirmationToken from client-side
        }),
      });
      console.log("hi");

      const data = await response.json();

      // Check if the request was successful
      if (response.ok) {
        console.log("Verification email sent successfully:", data.message);
        // Navigate to the next page or display a success message
        // Navigate to the new page with email as a query parameter
        router.push({
          pathname: "/onboarding/verify-email",
          query: { email: email.toLowerCase(), password: password },
        });
      } else {
        // Handle errors, such as displaying a message to the user
        console.error("Failed to send verification email:", data.message);
      }
    } catch (error) {
      console.error(
        "An error occurred while sending the verification email:",
        error
      );
    }
  };

  // Event handler for email input changes
  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Event handler for password input changes
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const isPasswordValid = () => password.length >= 8;

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
          <div className="relative -space-y-px rounded-md shadow-sm">
            <div className="flex space-x-2">
              <div className="w-1/2">
                <label className="sr-only">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                  maxLength={255}
                  autoComplete="given-name"
                  className="relative block w-full rounded-t-md rounded-b-md border-0 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                  placeholder="First Name" // Add a placeholder for the input
                />
              </div>
              <div className="w-1/2">
                <label className="sr-only">Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={handleLastNameChange}
                  required
                  maxLength={255}
                  autoComplete="family-name"
                  className="relative block w-full rounded-t-md rounded-b-md border-0 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                  placeholder="Last Name" // Add a placeholder for the input
                />
              </div>
            </div>
            <div className="pt-2">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-b-md border-0 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                placeholder="Password"
                value={password} // Set value from state
                onChange={handlePasswordChange} // Set state on change
              />
            </div>
          </div>
          {!isPasswordValid() && password.length > 0 && (
            <p className="text-sm text-red-600">
              Password must be at least 8 characters.
            </p>
          )}

          <div>
            <button
              type="submit"
              className={`flex w-full justify-center rounded-md bg-blue-400 px-3 py-2.5 text-lg font-bold leading-6 text-white ${
                isPasswordValid()
                  ? "hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
                  : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isPasswordValid()}
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
