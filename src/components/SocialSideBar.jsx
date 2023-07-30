import { useState } from "react";

const SocialSideBar = () => {
  return (
    <>
      <div className="fixed right-5 bottom-5 lg:bottom-10 flex flex-col gap-2">
        <button className="hidden sm:block rounded-3xl font-['Agdasima'] rounded-3xl text-white animate- bg-blue-500/70 hover:bg-orange-400 hover:text-black">
          <a href="https://github.com/Stevenalp18" target="_blank">
            <i className="fa-brands fa-lg fa-github w-full py-6 px-4" />
          </a>
        </button>
        <button className="hidden sm:block rounded-3xl font-['Agdasima'] rounded-3xl text-white animate- bg-blue-500/70 hover:bg-orange-400 hover:text-black">
          <a href="www.linkedin.com/in/stevenalp18" target="_blank">
            <i className="fa-brands fa-lg fa-linkedin py-6 px-4" />
          </a>
        </button>
        <button className="hidden sm:block rounded-3xl font-['Agdasima'] rounded-3xl text-white animate- bg-blue-500/70 hover:bg-orange-400 hover:text-black">
          <a href="https://www.google.com" target="_blank">
            <i className="fa-regular fa-lg fa-envelope py-6 px-4" />
          </a>
        </button>
        <button className="rounded-3xl font-['Agdasima'] rounded-3xl text-white animate- bg-blue-500/70 hover:bg-orange-400 hover:text-black">
          <i className="fa-solid fa-lg fa-share-nodes py-6 px-4" />
        </button>
      </div>
    </>
  );
};

export default SocialSideBar;

{
  /* <button className="fixed bottom-20 left-5 sm:bottom-10 sm:left-10 px-4 py-3 font-['Agdasima'] rounded-3xl text-white animate- bg-blue-500/70 hover:bg-orange-400 hover:text-black">
        <i className="fa-regular fa-" />
      </button> */
}
