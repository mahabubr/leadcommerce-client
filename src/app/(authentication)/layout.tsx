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

  const token = getFromLocalStorage("accessToken");
  const decode = decodedToken(token as string);

  useEffect(() => {
    // @ts-ignore
    if (decode?.email) {
      // @ts-ignore
      if (decode?.role === "admin") {
        router.push("/admin/dashboard");
      }
      // @ts-ignore
      else if (decode?.role === "store") {
        router.push("/store/seller-details");
      }
      // @ts-ignore
      else if (decode?.role === "employee") {
        router.push("/employee/settings/profilesetting");
      } // @ts-ignore
      else if (decode?.role === "delivery") {
        router.push("/delivery/settings/profilesetting");
      }
    } else {
      setIsLoading(false);
    }
    // @ts-ignore
  }, [router, decode?.email, decode?.role]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={style.container}>
      <div className={style.layout}>
        <div className={style.layout_image}>
          <img
            src="https://img.freepik.com/free-photo/shopping-trolleys-packets-tags_23-2147961897.jpg?t=st=1704634173~exp=1704634773~hmac=eead96601c2da9991815ee1519e40538a19bb768ec774dd20499446944c27596"
            alt=""
          />
        </div>
        <div className={style.layout_display}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
