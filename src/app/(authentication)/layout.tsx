"use client";

/* eslint-disable @next/next/no-img-element */
import { getFromLocalStorage } from "@/utils/local-storage";
import style from "./style/authentication.module.css";
import decodedToken from "@/utils/decodeToken";
import Loader from "@/components/ui/Loader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getFromLocalStorage("accessToken");
    const decode = decodedToken(token as string);

    // @ts-ignore
    if (decode?.email && decode?.role) {
      router.push("/dashboard");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={style.container}>
      <div className={style.layout}>
        <div className={style.layout_image}>
          <img
            src="https://i.ibb.co/dQykjqq/marvin-meyer-SYTO3xs06f-U-unsplash.jpg"
            alt=""
          />
        </div>
        <div className={style.layout_display}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
