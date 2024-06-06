import { useForgotPasswordMutation } from "@/features/hooks/auth/useForgotPassword";
import React, { useRef } from "react";
import SubmitButton from "../SubmitButton";
import { alert } from "../Alert";

const ForgotPasswordForm = () => {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const email = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = { email: email.current };
      const res = await forgotPassword(req).unwrap();
      alert("Check your mail for a password reset link", "success");
    } catch (error) {
      alert(error, "error");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            className="input"
            onChange={(e) => {
              email.current = e.target.value;
            }}
          />
        </div>
        <SubmitButton isLoading={isLoading} content={"Send Link"} />
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
