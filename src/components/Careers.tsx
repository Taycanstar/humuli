import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  UsersIcon,
  ArrowUturnRightIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/20/solid";

const Careers: React.FC = () => {
  return (
    <div id="careers" className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-bold leading-7 text-black">
              Create the future you want
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Careers
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              We are a compact, self-funded, fully remote team that's currently
              on the lookout for fresh talent! We're not just building
              technology; we're sculpting a future that amplifies the potential
              for human creativity and innovation, enhancing the way we live,
              work, and play.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>careers@humuli.com</p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <UsersIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Culture
                    </strong>{" "}
                    Regardless of your origin, educational background, or
                    industry experience, if you have demonstrated exceptional
                    skills, we invite you to join us in reimagining the future
                    of humanity.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowUturnRightIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Flexibility
                    </strong>{" "}
                    At Humuli, you are empowered to create a work setting that
                    maximizes your productivity and propels your drive.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <GlobeAmericasIcon
                    className="mt-1 h-5 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Diversity and Inclusion
                    </strong>{" "}
                    We are committed to creating a more unified community of
                    visionaries that want to change the world for the better.
                  </span>
                </li>
              </ul>
              {/* <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                No server? No problem.
              </h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
