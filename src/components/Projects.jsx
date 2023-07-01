import ProjectsCard from "../features/projects/ProjectsCard";

const Projects = () => {
  return (
    <div className="md:p-10 px-4 font-['Agdasima'] text-white md:w-2/3 m-auto">
      <div className="text-center">
        <h2 className="text-4xl">Recent Projects</h2>
        <p className="text-2xl">
          Below are a few past projetcts that I have worked on.
        </p>
      </div>
      {/* Project Card Below */}
      <div className="bg-emerald-600 rounded-xl md:pt-6 xl:p-0 p-4 md:mx-auto mt-10 mb-10 md:mt-4 md:mb-10 grid grid-cols-12 border-b-2 border-l-2 border-red-700">
        <div className="col-span-12 text-center lg:mb-0 mb-8 xl:-mb-16">
          <div className="text-xl text-orange-400 md:text-2xl">
            Featured Project
          </div>
          <div className="text-2xl md:text-3xl">Portfolio Website</div>
        </div>
        <div className="px-4 col-span-12 md:col-span-6 m-auto -my-12 md:m-auto">
          <img src="src/assets/cardShot.png" alt="" />
        </div>
        <div className="px-4 col-span-12 text-xl md:col-span-6 text-center md:m-auto md:text-2xl mb-4">
          I made this project using React, Tailwind, Hooks, canva for design and
          combined with flex/grid I was able to make it responsive on all mobile
          devices. I am proud of how my portfolio turned out compared to my
          other one, it's simple but nice.
        </div>
        <div className="px-4 col-span-12 text-xl md:text-3xl text-center text-blue-400 xl:-mt-20">
          Github | Link to website
        </div>
      </div>
      {/*
       */}
      <div className="md:pt-6 bg-teal-500 rounded-xl xl:p-0 p-4 md:mx-auto mt-10 mb-10 md:mt-4 md:mb-10 grid grid-cols-12 border-b-2 border-l-2 border-red-700">
        <div className="col-span-12 text-center lg:mb-0 mb-8 xl:-mb-16">
          <div className="text-xl text-orange-400 md:text-2xl">
            Featured Project
          </div>
          <div className="text-2xl md:text-3xl">Portfolio Website</div>
        </div>
        <div className="px-4 col-span-12 md:col-span-6 m-auto -my-12 md:m-auto">
          <img src="src/assets/cardShot.png" alt="" />
        </div>
        <div className="px-4 col-span-12 text-xl md:col-span-6 text-center md:m-auto md:text-2xl mb-4">
          I made this project using React, Tailwind, Hooks, canva for design and
          combined with flex/grid I was able to make it responsive on all mobile
          devices. I am proud of how my portfolio turned out compared to my
          other one, it's simple but nice.
        </div>
        <div className="px-4 col-span-12 text-xl md:text-3xl text-center text-blue-400 xl:-mt-20">
          Github | Link to website
        </div>
      </div>
      <div className="bg-orange-700 rounded-xl md:pt-6 xl:p-0 p-4 md:mx-auto mt-10 mb-10 md:mt-4 md:mb-10 grid grid-cols-12 border-b-2 border-l-2 border-red-700">
        <div className="col-span-12 text-center lg:mb-0 mb-8 xl:-mb-16">
          <div className="text-xl text-orange-400 md:text-2xl">
            Featured Project
          </div>
          <div className="text-2xl md:text-3xl">Portfolio Website</div>
        </div>
        <div className="px-4 col-span-12 md:col-span-6 m-auto -my-12 md:m-auto">
          <img src="src/assets/cardShot.png" alt="" />
        </div>
        <div className="px-4 col-span-12 text-xl md:col-span-6 text-center md:m-auto md:text-2xl mb-4">
          I made this project using React, Tailwind, Hooks, canva for design and
          combined with flex/grid I was able to make it responsive on all mobile
          devices. I am proud of how my portfolio turned out compared to my
          other one, it's simple but nice.
        </div>
        <div className="px-4 col-span-12 text-xl md:text-3xl text-center text-blue-400 xl:-mt-20">
          Github | Link to website
        </div>
      </div>
    </div>
  );
};

export default Projects;

//  <div className="bg-red-500 w-2/3 p-4 m-auto grid grid-rows-6 grid-cols-12">
//         {/* Projects Card Here */}
//         <div className="bg-red-200 col-span-12">Featured Project</div>
//         <div className="bg-red-100 col-span-12">Project XYZ</div>
//         <div className="bg-red-200 col-start-1 col-end-9 row-span-2 ">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
//           quibusdam iste tempora atque aperiam voluptatibus, quos, excepturi
//           dignissimos quisquam doloribus in? Aperiam esse adipisci ducimus
//           soluta earum et blanditiis officia!
//         </div>
//         <div className="bg-red-300 col-start-7 col-end-12 row-span-3">
//           <img src="https://www.forbes.com/advisor/wp-content/uploads/2022/09/Image_-_How_to_design_a_website_.jpeg.jpg" />
//         </div>
//         <div className="bg-red-400 col-span-12 ">Technologies Used</div>
//         <div className="bg-red-100 col-span-12">Hi</div>
//       </div>
