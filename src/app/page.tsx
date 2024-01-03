'use client'

import Loader from "@/components/ui/Loader";
import Spinner from "@/components/ui/Spinner";
import { paths } from "@/paths/paths";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const router=useRouter();

  useEffect(()=>{
    router.push(paths.login)
  },[])
  return <div><Loader/></div>;
};

export default HomePage;
