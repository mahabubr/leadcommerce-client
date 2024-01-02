"use client";
import style from "./layout.module.css";
import { useState, useEffect } from "react";
import SideBar from "@/components/ui/SideBar";
import TopBar from "@/components/ui/TopBar";
import { getFromLocalStorage } from "@/utils/local-storage";
import decodedToken from "@/utils/decodeToken";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/Loader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const token = getFromLocalStorage("accessToken");
  const decode = decodedToken(token as string);

  const [open, setOpen] = useState(true);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  useEffect(() => {
    //@ts-ignore
    if (!decode?.email && !decode?.role) {
      router.push("/login");
    }

    //@ts-ignore
  }, [decode?.email, decode?.role, router]);

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //@ts-ignore
  if (!decode?.email && !decode?.role) {
    if (typeof window !== "undefined") {
      return <Loader />;
    }
  }

  return (
    <div>
      <TopBar open={open} closeDrawer={closeDrawer} showDrawer={showDrawer} />
      <SideBar showDrawer={showDrawer} closeDrawer={closeDrawer} open={open} />

      <div
        style={{
          marginLeft: open ? 330 : 0,
          transition: "margin 0.4s",
        }}
      >
        <div className={style.main_box}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
