import React from "react"
import { withSignUp } from "./withSignUp";
import SignUpSuccess from "./SignUpSuccess";
import checkIcon from "../../static/assets/check.svg";
import desktopImage from "../../static/assets/signup-desktop.svg";
import mobileImage from "../../static/assets/signup-mobile.svg";

const SignUp = withSignUp(
  ({
    email,
    error,
    handleChange,
    handleSubmit,
    success,
    setSuccess,
    updates,
  }) => {
    return (
      <div>
        {!success ? (
          <div className="flex justify-evenly flex-col md:flex-row">
            <img
              src={mobileImage}
              alt="mobile-illustration"
              className="block md:hidden"
            />
            <div className="p-8 md:p-12">
              <h1 className="font-display text-5xl font-bold mb-6">
                Stay updated!
              </h1>
              <p className="mb-5">
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
                  data-testid="email-input"
                  name="email"
                  className="border-slate-300 rounded border h-10 mb-3 p-4"
                  type="email"
                  placeholder="email@company.com"
                  onChange={handleChange}
                  value={email}
                />
                {error !== undefined ? (
                  <p className="font-body text-orange-600 mb-3">{error}</p>
                ) : null}
                <button
                  className="border rounded bg-black text-white h-12 hover:bg-orange-700"
                  onClick={handleSubmit}
                >
                  Subscribe to monthly newsletter
                </button>
              </div>
            </div>
            <img
              src={desktopImage}
              alt="desktop-illustration"
              className="hidden md:block"
            />
          </div>
        ) : (
          <SignUpSuccess email={email} setSuccess={setSuccess} />
        )}
      </div>
    );
  }
);

export default SignUp;
