"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useSession } from "next-auth/react";
import { getRandomColor } from "@/lib/utils";

const ProfileAvatar = () => {
  const { data } = useSession();
  const [pColor, setColor] = useState("");

  useEffect(() => {
    if (sessionStorage) {
      const profileColor = sessionStorage.getItem("profileColor");
      if (profileColor) {
        setColor(profileColor);
      } else {
        const color = getRandomColor();
        sessionStorage.setItem("profileColor", color);
        setColor(color);
      }
    }
  }, []);
  return (
    <Link href={"/profile?t=general"}>
      {data?.user.user && (
        <Avatar style={{ width: "50px", height: "50px" }}>
          {/* <AvatarImage src="" /> */}
          <AvatarFallback
            className={`text-white`}
            style={{ backgroundColor: pColor || "gray", fontSize: "20px", position: "absolute", top: 2 }}
          >
            {data?.user.user.firstName?.[0]}
          </AvatarFallback>
        </Avatar>
      )}
      <span className="sr-only">Open user profile</span>
    </Link>
  );
};

export default ProfileAvatar;
