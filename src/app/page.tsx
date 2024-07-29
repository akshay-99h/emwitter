import Link from "next/link";

import { api, HydrateClient } from "@/trpc/server";
import { LoginTest } from "./_components/login-test";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  // void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <LoginTest />
    </HydrateClient>
  );
}
