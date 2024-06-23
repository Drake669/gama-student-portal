import { useLoginMutation } from "@/features/hooks/auth/useLogin";
import Link from "next/link";
import { useRef } from "react";
import SubmitButton from "../SubmitButton";
import { alert } from "../Alert";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();

  const email = useRef("");
  const password = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = { email: email.current, password: password.current };
      const res = await login(req).unwrap();
      await signIn("credentials", {
        accessToken: res.tokenData.access.token,
        accessTokenExpires: res.tokenData.access.expires,
        refreshToken: res.tokenData.refresh.token,
        refreshTokenExpires: res.tokenData.refresh.expires,
        user: res.user,
        callbackUrl: "/",
      });
      alert("Login successful", "success");
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
        <div className="grid gap-2">
          <div className="flex items-center">
            <label htmlFor="password">Password</label>
            <Link
              href="/forgot-password"
              className="ml-auto inline-block text-sm underline"
            >
              Forgot your password?
            </Link>
          </div>
          <input
            id="password"
            type="password"
            required
            className="input"
            onChange={(e) => {
              password.current = e.target.value;
            }}
          />
        </div>
        <SubmitButton isLoading={isLoading} content={"Login"} full />
      </div>
    </form>
  );
};

export default LoginForm;
