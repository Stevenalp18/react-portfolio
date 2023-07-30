import { useState } from "react";

const ContactSideBtn = () => {
  const [openForm, setOpenForm] = useState(false);
  const formModal = () => {
    return (
      <>
        {/* {" "}
        //{" "}
        <div className="text-black bg-white w-72 p-4 fixed bottom-10 right-10 rounded-xl">
          // <div className="border-2 border-red-500">Get in touch!</div>
          //{" "}
          <div className="border-2 border-emerald-500 py-40">
            // Contact Form Here //{" "}
          </div>
          //{" "} */}
        {/* </div> */}
      </>
    );
  };

  return (
    <>
      <button
      // className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10 px-4 py-3 font-['Agdasima'] rounded-3xl text-white animate- bg-blue-500/70 hover:bg-orange-400 hover:text-black"
      // onClick={() => formModal}
      >
        {/* <i className="fa-regular fa-lg fa-envelope" /> */}
      </button>
      {/* <div className="text-black bg-white w-72 p-4 fixed bottom-10 right-10 rounded-xl">
        <div className="border-2 border-red-500">Get in touch!</div>
        <div className="border-2 border-emerald-500 py-40">
          Contact Form Here
        </div>
      </div> */}
    </>
  );
};

export default ContactSideBtn;
