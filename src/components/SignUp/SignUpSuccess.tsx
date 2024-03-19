import React, { Dispatch, SetStateAction } from "react"
import iconSuccess from "../../static/assets/success.svg"

type SignUpSuccessProps = {
  email: string
  setSuccess: Dispatch<SetStateAction<boolean>>
}

const SignUpSuccess = ({ email, setSuccess }: SignUpSuccessProps) => {
  return (
    <div className="flex flex-col p-12">
      <img src={iconSuccess} alt="success" className="w-10 mb-8" />
      <h1 className="font-display text-5xl font-bold mb-6">
        Thanks for subscribing!
      </h1>
      <p className="font-body mb-3">
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email}</span>. Please open it and click the
        button inside to confirm subscription.
      </p>
      <button
        className="border rounded bg-black text-white h-12 hover:bg-orange-700"
        onClick={() => setSuccess(false)}
        type="button"
      >
        Dismiss message
      </button>
    </div>
  );
};

export default SignUpSuccess