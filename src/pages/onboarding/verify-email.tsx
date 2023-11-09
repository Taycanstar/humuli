import { SlimLayout } from "@/components/SlimLayout";
import React from "react";
import LogoLayout from "@/components/LogoLayout";
import { NavLink } from "@/components/NavLink";

const VerifyEmail: React.FC & { Layout?: React.ComponentType<any> } = () => {
  return (
    <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm space-y-2">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center space-x-3"></div>

          <h2 className="mt-1 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Verify your email
          </h2>
        </div>

        <div className="flex items-center justify-center">
          <label className="text-center block text-sm text-gray-900">
            We sent an email to email Click the link inside to get started
          </label>
        </div>
        <div className="flex text-sm leading-6 py-5 justify-center items-center">
          <a
            href="#"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            Resend email
          </a>
        </div>
      </div>
    </div>
  );
};

VerifyEmail.Layout = LogoLayout;
export default VerifyEmail;
