"use client";
import {
  SignedOut,
  SignInButton,
  SignOutButton,
  useUser,
  SignedIn,
  UserProfile,
  UserButton,
} from "@clerk/nextjs";
import { useEffect } from "react";

export const LoginTest = () => {
  const user = useUser();
  useEffect(() => {
    console.log({ user });
  }, [user]);
  return (
    <>
      <UserButton />
    </>
  );
};
