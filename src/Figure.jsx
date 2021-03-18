import React from "react";
import avatar from "./avatar.webp";
import Badges from "./Badges";
export default () => (
  <div className="mx-auto max-w-screen-md px-4 sm:px-6 md:px-8 my-12 sm:my-20 md:my-32">
    <div className="flex flex-col sm:flex-row">
      <img
        src={avatar}
        alt="avatar"
        className="w-24 md:w-32 md:h-32 rounded-full"
      />
      <div className="mt-8 sm:mt-0 sm:ml-8 flex flex-col justify-center">
        <p className="text-gray-900 dark:text-white leading-tight text-2xl md:text-3xl ">
          Hi, I'm
        </p>
        <h1 className="text-gray-900 dark:text-white leading-tight font-semibold text-4xl md:text-5xl">
          Xiaokai Li
        </h1>
      </div>
    </div>
    <p className="mt-10 text-lg leading-7 text-gray-900 dark:text-white">
      I'm currently an undergraduate at University of Florida. I'm interested in
      C++ and TypeScript.
    </p>
    <Badges />
  </div>
);
