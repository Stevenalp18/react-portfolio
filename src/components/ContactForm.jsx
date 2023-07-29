const ContactForm = () => {
  return (
    <div className="md:px-10 px-4 font-['Agdasima'] text-white m-auto ">
      <div className="text-center mt-10 flex flex-col justify-center">
        <h2 className="text-5xl pb-2 border-b-2 m-auto border-blue-700">
          Get in touch.
        </h2>
        <p className="text-2xl my-3">
          Want to inquire, Hire me, or simply Chat? Fill out the form below!
        </p>
      </div>
      {/* Form Below */}
      <form
        action="https://formsubmit.co/stevenalp18@gmail.com"
        method="POST"
        className="p-4 md:p-10 m-auto w-full sm:w-3/4 lg:w-2/5"
      >
        {/* Name/Email */}
        <div className="mb-2">
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="e.g. john doe"
            className="p-2 rounded-xl text-md  w-full bg-slate-800 font-mono"
          />
        </div>
        <div className="mb-2">
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="e.g. johndoe@mail.com"
            className="p-2 rounded-xl text-md w-full bg-slate-800 font-mono"
          />
        </div>
        {/* TextArea */}
        <div className="w-full text-center">
          <textarea
            required
            placeholder="Leave your message here..."
            className="p-2 w-full h-36 rounded-xl text-md bg-slate-800 font-mono"
          ></textarea>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="px-6 py-2 text-md font-mono rounded text-white bg-blue-500/70 hover:bg-orange-400 hover:text-black"
          >
            Send Message.
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
