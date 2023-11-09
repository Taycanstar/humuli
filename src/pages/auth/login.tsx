import { SlimLayout } from "@/components/SlimLayout";
import React from "react";
import NoLayout from "@/components/NoLayout";
import LogoLayout from "@/components/LogoLayout";
import { NavLink } from "@/components/NavLink";
import Signup from "./signup";

const Login: React.FC & { Layout?: React.ComponentType<any> } = () => {
  return (
    <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm space-y-10">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center space-x-3">
            {/* Logo and text side by side */}
          </div>
          {/* Reduce the top margin to bring the "Hello again" closer to the image */}
          <h2 className="mt-1 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Hello again
          </h2>
        </div>

        <form className="space-y-6" action="#" method="POST">
          <div className="relative -space-y-px rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-t-md border-0 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                placeholder="Email address"
              />
            </div>
            <div>
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
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-400 focus:ring-blue-400"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm leading-6 text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm leading-6">
              <a
                href="#"
                className="font-semibold text-blue-400 hover:text-blue-300"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-400 px-3 py-2.5 text-sm font-semibold leading-6 text-white hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Log in
            </button>
          </div>
          <div className="flex items-center justify-center">
            <label
              htmlFor="remember-me"
              className="block text-sm text-gray-900"
            >
              Don't have an account?
            </label>
            <a
              href="/auth/signup"
              className="text-blue-400 mx-2 text-sm hover:text-blue-300"
            >
              Signup
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.Layout = LogoLayout;
export default Login;
