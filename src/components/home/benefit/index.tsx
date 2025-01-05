import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
const Benefits = () => {
  const features = [
    {
      name: "There are no platform fees",
      description:
        "We will not charge any platform fees when you buy or sell any NFTs.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "High security and a user-friendly interface.",
      description:
        "Our platform ensures high-level security to protect your transactions, while offering an intuitive, user-friendly interface for a seamless experience.",
      icon: LockClosedIcon,
    },
    {
      name: "Variety of features",
      description:
        "Our platform offers a wide range of diverse functions, catering to various needs and enhancing the user experience.",
      icon: ArrowPathIcon,
    },
    {
      name: "Cost-effective",
      description:
        "More affordable pricing with access to all features without excessive costs.",
      icon: FingerPrintIcon,
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <div className="body-font text-white py-12 mb-6 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight special-text sm:text-5xl lg:text-balance">
              The benefits of using our products
            </p>
            <p className="mt-6 text-lg/8 text-white">
              This is the first non-profit platform in Vietnam dedicated to
              promoting and educating users about decentralized applications
              (Dapps).
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-white">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-white">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-orange-400 h-80">
        <p>thêm cái gì đó ở đây thêm chưa suy nghĩ ra</p>
      </div>
    </div>
  );
};

export default Benefits;
