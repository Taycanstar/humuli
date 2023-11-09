import {
  ArrowPathIcon,
  BriefcaseIcon,
  CircleStackIcon,
  CubeTransparentIcon,
} from "@heroicons/react/20/solid";
import { FC, SVGProps } from "react";

type HeroIcon = typeof ArrowPathIcon;

interface Feature {
  name: string;
  description: string;
  href: string;
  icon: HeroIcon;
}

const features: Feature[] = [
  {
    name: "Products",
    description:
      "Shaping AI innovations to amplify human creativity and inspiration.",
    href: "#products",
    icon: CubeTransparentIcon,
  },
  {
    name: "Careers",
    description:
      "Join our quest at the intersection of AI and human potential, forging technologies for an abundant and boundless future.",
    href: "#careers",
    icon: BriefcaseIcon,
  },
  {
    name: "Research",
    description:
      "Conducting forefront research in the pursuit of safe Artificial General Intelligence.",
    href: "#",
    icon: CircleStackIcon,
  },
];

const PrimaryFeatures: React.FC = () => {
  return (
    <div className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Deploy faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div> */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white text-2xl">
                    <Icon
                      className="h-5 w-5  flex-none text-white"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-2">
                      <a
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-white underline decoration-solid underline-offset-4"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default PrimaryFeatures;
