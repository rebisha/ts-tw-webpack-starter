import React from "react";
import checkIcon from "../../static/assets/check.svg";
import desktopImage from "../../static/assets/signup-desktop.svg";

const SignUp = () => {
  const updates = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  return (
    <div className="flex justify-between">
      <div className="p-12">
        <h1 className="font-display text-5xl font-bold mb-6">Stay updated!</h1>
        <p className="mb-5">
          {" "}
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <div className="mb-6">
          {updates?.map((update, index) => (
            <div className="flex font-body py-1" key={index}>
              <img
                src={checkIcon}
                alt={`check-icon-${index}`}
                className="mr-3"
              />
              <p>{update}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          <label className="font-bold mb-1">Email address</label>
          <input
            className="border-slate-300 rounded border h-10 mb-3 p-4"
            type="text"
            placeholder="email@company.com"
          />
          <button
            className="border rounded bg-black text-white h-12"
            type="submit"
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>

      <img src={desktopImage} alt="desktop-illustration" />
    </div>
  );
};

export default SignUp;
