import LoginForm from "@/components/auth/LoginForm";
import AuthLayout from "@/components/layout/AuthLayout";
import PageHead from "@/components/layout/PageHead";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="overflow-hidden">
      <PageHead headTitle={"Gama Learning Institute - Login"} />
      <AuthLayout>
        <div className="mx-auto grid w-[350px] sm:w-[500px] gap-6 mt-[30px] md:mt-0">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your details below to login to your account
            </p>
          </div>
          <LoginForm />
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
