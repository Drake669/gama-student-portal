import AuthLayout from "@/components/layout/AuthLayout";
import PageHead from "@/components/layout/PageHead";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="overflow-hidden">
      <PageHead headTitle={"Eduvalut - Login"} />
      <AuthLayout>
        <div className="mx-auto grid w-[350px] sm:w-[500px] gap-6 mt-[30px] md:mt-0">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your details below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="input"
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
              <input id="password" type="password" required className="input" />
            </div>
            <button type="submit" className="w-full btn">
              Login
            </button>
          </div>
          <div className="mt-2 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Login;
