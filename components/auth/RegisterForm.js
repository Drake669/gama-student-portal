import { useRef } from "react";
import { useRegisterMutation } from "@/features/hooks/auth/useSignup";
import SubmitButton from "../SubmitButton";
import { alert } from "../Alert";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const password = useRef("");
  const phoneNumber = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = {
        firstName: firstName.current,
        lastName: lastName.current,
        email: email.current,
        password: password.current,
        phoneNumber: phoneNumber.current,
        role: "student",
      };
      const res = await register(req).unwrap();
      await signIn("credentials", {
        accessToken: res.tokenData.access.token,
        accessTokenExpires: res.tokenData.access.expires,
        refreshToken: res.tokenData.refresh.token,
        refreshTokenExpires: res.tokenData.refresh.expires,
        user: res.user,
        callbackUrl: "/",
      });
      alert("Account creation successful", "success");
    } catch (error) {
      alert(error, "error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            type="text"
            placeholder="John"
            required
            className="input"
            onChange={(e) => {
              firstName.current = e.target.value;
            }}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="lastName"
            placeholder="Doe"
            required
            className="input"
            onChange={(e) => {
              lastName.current = e.target.value;
            }}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="m@example.com"
            required
            className="input"
            onChange={(e) => {
              email.current = e.target.value;
            }}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <label htmlFor="password">Password</label>
          </div>
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            required
            className="input"
            onChange={(e) => {
              password.current = e.target.value;
            }}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email">Phone Number</label>
          <input
            name="phoneNumber"
            type="text"
            placeholder="+233554221525"
            required
            className="input"
            onChange={(e) => {
              phoneNumber.current = e.target.value;
            }}
          />
        </div>
        <SubmitButton
          isLoading={isLoading}
          content={"Create new account"}
          full
        />
      </div>
    </form>
  );
};

export default RegisterForm;
