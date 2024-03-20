import { fireEvent, render } from "@testing-library/react"
import SignUp from "./SignUp"
import "@testing-library/jest-dom";

describe("Components", () => {
  describe("SignUp", () => {
    it("renders text correctly", () => {
      const { getByText } = render(<SignUp />)
     
      expect(getByText("Stay updated!")).toBeInTheDocument()
      expect(getByText("Subscribe to monthly newsletter")).toBeInTheDocument();
    })

    it("should throw error when email field is empty", () => {
      const { getByText } = render(<SignUp />)

      fireEvent.click(getByText("Subscribe to monthly newsletter"));

      expect(getByText("This is a required field")).toBeInTheDocument();
    })

    it("should throw error when email is invalid", () => {
      const { getByText, getByTestId } = render(<SignUp />);

      fireEvent.change(getByTestId("email-input"), { target: { value: "67" }})
      fireEvent.click(getByText("Subscribe to monthly newsletter"));

      expect(getByText("Invalid email address")).toBeInTheDocument();
    });

    it("should show success message when the email is submitted", () => {
      const { getByText, getByTestId } = render(<SignUp />);

      fireEvent.change(getByTestId("email-input"), { target: { value: "test@company.com" } });
      fireEvent.click(getByText("Subscribe to monthly newsletter"));

      expect(getByText("Thanks for subscribing!")).toBeInTheDocument();
    });

    it("should show the subscription page again when Dismiss button is clicked", () => {
      const { getByText, getByTestId } = render(<SignUp />);

      fireEvent.change(getByTestId("email-input"), {
        target: { value: "test@company.com" },
      });
      fireEvent.click(getByText("Subscribe to monthly newsletter"));

      expect(getByText("Thanks for subscribing!")).toBeInTheDocument();

      fireEvent.click(getByText("Dismiss message"));

      expect(getByText("Stay updated!")).toBeInTheDocument()
    });
  })
})