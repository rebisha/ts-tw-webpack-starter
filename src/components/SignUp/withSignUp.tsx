import React, { FC, FormEvent, useState } from "react";
import { z } from "zod"

type SignUpInputProps = {
  name?: string;
};

type SignUpOutputProps = SignUpInputProps & {
  email: string;
  error: string
  handleChange: ({ target: { value } }) => void;
  handleSubmit: (e: FormEvent<HTMLButtonElement>) => void
  success: boolean
  updates: string[];
};

const emailValidation = z.string().email("Invalid email address").min(1, "This is a required field")

export const withSignUp =
  (Component: FC<SignUpOutputProps>) =>
    ({ name = "SignUp" }: SignUpInputProps) => {
      const [email, setEmail] = useState("")
      const [error, setError] = useState(undefined)
      const [success, setSuccess] = useState(false)

    const updates = [
      "Product discovery and building what matters",
      "Measuring to ensure updates are a success",
      "And much more!",
      ]

      const handleSubmit = (e) => {
        e.preventDefault()
        const result = emailValidation.safeParse(email)

        if (!result.success) {
          result.error.issues.map(err => {
            if (err.code === "too_small") {
              return setError(err.message)
            }
            return setError(err.message)
          })
        } else {
          setError(undefined);
        }
      }

      const handleChange = ({ target: { value } }) => {
        setEmail(value);
      }
      
      Component.displayName = name;

      return <Component email={email} error={error} handleChange={handleChange} handleSubmit={handleSubmit} success={success} updates={updates} />;
  };
