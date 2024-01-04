"use client";

import { paths } from "@/paths/paths";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(paths.login);
  }, [router]);
  return <div></div>;
};

export default HomePage;
