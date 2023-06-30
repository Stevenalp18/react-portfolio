import ContactBtn from "./ContactBtn";

const About = () => {
  return (
    <div className="md:grid grid-rows-1 grid-cols-12 md:p-10 p-3 text-center m-auto md:w-11/12 text-white gap-6 font-['Agdasima']">
      <div className="col-span-12 text-5xl pb-2 border-b-2 border-blue-700 m-auto">
        About Me.
      </div>
      <div className="col-span-12 text-2xl my-4">
        Learn about what I do and what Skills I have below.
      </div>
      <div className="p-4 col-span-6 grid border-l-2 border-b-2 border-blue-700">
        <div className="text-4xl px-4 text-left text-orange-700">
          Get to know me.
        </div>
        <div className="p-4 text-left text-2xl">
          Hi, my name is Steven Perez. I am a self taught web developer. I have
          created several web applications professionally and for fun for some
          time now. I love using different web technologies and love to learn
          new concepts about web app development. I specialize more in the Front
          End aspect of a website but also have some knowledge with some backend
          tecnhologies. I like to create from scratch and let my mind wander
          free with what creativity brings to fruition.
        </div>
      </div>
      <div className="p-4 col-span-6 grid">
        <div className="text-3xl text-left px-4">Skills.</div>
        <div className="p-4 text-left">
          <ul className="flex flex-wrap gap-4 text-xl text-black">
            <li className="px-4 py-2 rounded-xl bg-orange-600 animate-pulse">
              React
            </li>
            <li className="px-4 py-2 rounded-xl bg-orange-600 animate-pulse">
              Javascript
            </li>
            <li className="px-4 py-2 rounded-xl bg-orange-600 animate-pulse">
              Node
            </li>
            <li className="px-4 py-2 rounded-xl bg-orange-600 animate-pulse">
              React Hooks
            </li>
            <li className="px-4 py-2 rounded-xl bg-orange-600 animate-pulse">
              Responsive Design
            </li>
            <li className="px-4 py-2 rounded-xl bg-orange-600 animate-pulse">
              Team Work
            </li>
            <li className="px-4 py-2 rounded-xl bg-orange-600 animate-pulse">
              Git
            </li>
            <li className="px-4 py-2 rounded-xl bg-orange-600 animate-pulse">
              Bash/Terminal
            </li>
            <li className="px-4 py-2 rounded-xl bg-orange-600 animate-pulse">
              Github
            </li>
            <li className="px-4 py-2 rounded-xl bg-orange-600 animate-pulse">
              SASS
            </li>
            <li className="px-4 py-2 rounded-xl bg-orange-600 animate-pulse">
              TailwindCss
            </li>
            <li className="px-4 py-2 rounded-xl bg-orange-600 animate-pulse">
              Bootstrap
            </li>
            <li className="px-4 py-2 rounded-xl bg-orange-600 animate-pulse">
              HTML
            </li>
            <li className="px-4 py-2 rounded-xl bg-orange-600 animate-pulse">
              CSS
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-12 px-2 text-center md:mt-8">
        <ContactBtn />
      </div>
    </div>
  );
};

export default About;
{
  /* <div className="md:px-10 px-4 md:py-14 py-10 text-white md:w-2/3 m-auto">
      <div className="py-8 px-6 text-5xl font-['Agdasima'] text-left">
        <h2 className="">About</h2>
      </div>
      <div className="bg-slate-400/20 p-6 text-2xl font-['Agdasima'] text-center">
        <p>
          Hi, my name is Steven Perez. I am a web developer. I have created
          several web applications professionally and for fun. I love using
          different web technologies and love to learn new concepts about web
          app development. I specialize more in the Front End aspect of a
          website but also have some knowledge with some backend tecnhologies. I
          like to create from scratch and let my mind wander free with what
          creativity brings to fruition.
        </p>
      </div>
    </div> */
}
