import { SlimLayout } from "@/components/SlimLayout";
import React, { useState } from "react";
import LogoLayout from "@/components/LogoLayout";
import NoLayout from "@/components/NoLayout";
import { useRouter } from "next/router";
import { NavLink } from "@/components/NavLink";
import { LOCAL } from "@/constants";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];
const cards = [
  {
    name: "Project Y",
    id: "py",
    href: "#",
    description:
      "Using advanced AI, it transforms your ideas into a tangible set of resources, all packed into one efficient zip file.",
    pathname: "/projecty",
  },
  {
    name: "API",
    id: "api",
    href: "#",
    description:
      "Incorporate Humuli models into your app or business operations.",
    pathname: "/platform/api",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Apps: React.FC & { Layout?: React.ComponentType<any> } = () => {
  const [frequency, setFrequency] = useState(frequencies[0]);
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-full flex-1 items-center justify-center ">
      <img
        src="/images/black-logo.png"
        alt="Humuli Logo"
        className="h-14 w-auto mt-10"
      />
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="isolate mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {cards.map((card) => (
            <button
              key={card.id}
              className={classNames(
                "ring-gray-200",
                "rounded-3xl p-8 ring-0 xl:p-10 bg-gray-100"
              )}
            >
              <h3
                id={card.id}
                className={classNames(
                  "text-gray-900",
                  "text-lg font-semibold leading-8"
                )}
              >
                {card.name}
              </h3>
              <p
                className={classNames(
                  "text-gray-600",
                  "mt-4 text-sm leading-6"
                )}
              >
                {card.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

Apps.Layout = NoLayout;
export default Apps;
