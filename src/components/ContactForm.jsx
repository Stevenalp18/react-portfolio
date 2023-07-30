import { useRef, useState } from "react";

const ContactForm = () => {
  const inputName = useRef();
  const [contactName, setContactName] = useState("");
  function handleInputName() {
    return setContactName((prevState) => (prevState = inputName.current.value));
  }

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
        action="https://formsubmit.co/2d77e14ba6424397a3dad5a6bdc8c19a"
        method="POST"
        className="p-4 md:p-10 m-auto w-full sm:w-3/4 lg:w-2/5"
      >
        {/* Name/Email */}
        <div className="mb-2">
          <input
            // onChange={(e) => setContactName(e.target.value)}
            onChange={handleInputName}
            ref={inputName}
            required
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            className="p-2 rounded-xl text-md  w-full bg-slate-800 font-mono"
          />
        </div>
        <div className="mb-2">
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            className="p-2 rounded-xl text-md w-full bg-slate-800 font-mono"
          />
        </div>
        {/* TextArea */}
        <div className="w-full text-center">
          <textarea
            required
            name="message"
            placeholder="Leave your message here..."
            className="p-2 w-full h-36 rounded-xl text-md bg-slate-800 font-mono"
          ></textarea>
        </div>
        <input
          type="hidden"
          name="_autoresponse"
          value={`Hi ${contactName} Thank you for reaching out! I appreciate the interest, I will respond as soon as I see this message! In the meantime, enjoy the rest of your day! :)`}
        />
        <input type="hidden" name="_template" value="table" />
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
