import AuthLayout from "@/components/layout/AuthLayout";
import PageHead from "@/components/layout/PageHead";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="overflow-hidden">
      <PageHead headTitle={"Eduvalut - Signup"} />
      <AuthLayout>
        <div className="mx-auto grid w-[350px] sm:w-[500px] gap-6 mt-[30px] md:mt-0">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Signup</h1>
            <p className="text-balance text-muted-foreground">
              Enter your details below to create a new account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstname"
                type="text"
                placeholder="John"
                required
                className="input"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="lastName"
                placeholder="Doe"
                required
                className="input"
              />
            </div>
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
              </div>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                required
                className="input"
              />
            </div>
            <button type="submit" className="w-full btn">
              Create new account
            </button>
          </div>
          <div className="mt-2 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Register;
