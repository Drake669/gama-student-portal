/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { useSession, signOut } from "next-auth/react";
import { useUpdateProfileMutation } from "@/features/hooks/user/useUpdateUserProfile";
import { alert } from "@/components/Alert";
import SubmitButton from "@/components/SubmitButton";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

function Profile() {
  const { data: session, update } = useSession();

  const router = useRouter();
  const { t } = router.query;
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    if (session) {
      setFirstName(session?.user?.user?.firstName || "");
      setLastName(session?.user?.user?.lastName || "");
      setPhoneNumber(session?.user?.user?.phoneNumber || "");
      //   console.log(session);
    }
  }, [session]);

  useEffect(() => {
    setNewPassword("");
    setOldPassword("");
    setFirstName(session?.user?.user?.firstName || "");
    setLastName(session?.user?.user?.lastName || "");
    setPhoneNumber(session?.user?.user?.phoneNumber || "");
  }, [t]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = {
        firstName,
        lastName,
        phoneNumber,
      };
      const res = await updateProfile(req).unwrap();
      console.log(res, "RESSSS");
      alert("Profile update successful", "success");
      if (session) {
        session.user.user = res;
        console.log(session);
        const resd = await update(session);
        console.log(resd);
      }
    } catch (error) {
      alert(error, "error");
    }
  };

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
          <div className="relative mx-auto grid w-full max-w-6xl gap-2">
            <h1 className="text-3xl font-semibold">User Settings</h1>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="absolute top-0 right-0 bg-red-600 text-white py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
          <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <nav
              className="grid gap-4 text-sm text-muted-foreground"
              x-chunk="dashboard-04-chunk-0"
            >
              <Link
                href="/profile?t=general"
                className={`font-semibold ${
                  t === "general" || !t
                    ? "text-blue-500"
                    : "text-muted-foreground"
                }`}
              >
                General
              </Link>
              <Link
                href="/profile?t=security"
                className={`font-semibold ${
                  t === "security" ? "text-blue-500" : "text-muted-foreground"
                }`}
              >
                Security
              </Link>
            </nav>
            <div className="grid gap-6">
              {t === "security" ? (
                // <form onSubmit={handleSubmit}>
                <Card x-chunk="dashboard-04-chunk-1">
                  <CardHeader>
                    <CardTitle>Security</CardTitle>
                    <CardDescription>Change your password here</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="oldPassword">Old Password</label>
                        <input
                          name="oldPassword"
                          type="password"
                          placeholder="Old Password"
                          autoComplete="new-password"
                          value={oldPassword}
                          required
                          className="input"
                          onChange={(e) => {
                            setOldPassword(e.target.value);
                          }}
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="newPassword">New Password</label>
                        <input
                          name="newPassword"
                          type="password"
                          placeholder="New Password"
                          autoComplete="new-password"
                          value={newPassword}
                          required
                          className="input"
                          onChange={(e) => {
                            setNewPassword(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t px-6 py-4">
                    <button className="btn" onClick={handleSubmit}>
                      Change Password
                    </button>
                  </CardFooter>
                </Card>
              ) : (
                // </form>
                // <form onSubmit={handleSubmit}>
                <Card x-chunk="dashboard-04-chunk-1">
                  <CardHeader>
                    <CardTitle>General</CardTitle>
                    <CardDescription>
                      Change profile settings here
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          name="firstName"
                          type="text"
                          autoComplete="new-password"
                          placeholder="John"
                          value={firstName}
                          required
                          className="input"
                          onChange={(e) => {
                            setFirstName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          name="lastName"
                          type="lastName"
                          placeholder="Doe"
                          value={lastName}
                          required
                          className="input"
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                          name="phoneNumber"
                          type="text"
                          placeholder="+233554221525"
                          value={phoneNumber}
                          required
                          className="input"
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t px-6 py-4">
                    <button
                      onClick={handleSubmit}
                      className={cn("btn flex items-center justify-center")}
                      disabled={isLoading}
                    >
                      Save Changes
                      {isLoading && (
                        <Loader2 className="w-6 h-6 ml-4 animate-spin" />
                      )}
                    </button>
                  </CardFooter>
                </Card>
                // </form>
              )}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Profile;
