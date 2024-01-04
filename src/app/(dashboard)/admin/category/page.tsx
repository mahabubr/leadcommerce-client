"use client";

import ViewCategory from "@/components/category/ViewCategory";
import style from "../dashboard/static/dashboard.module.css";

const page = () => {
  return (
    <div className={style.container}>
      <ViewCategory />
    </div>
  );
};

export default page;
