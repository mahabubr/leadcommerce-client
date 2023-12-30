"use client";

import AddCategory from "@/components/category/AddCategory";
import style from "../../dashboard/static/dashboard.module.css";

const page = () => {
  return (
    <div className={style.container}>
      <AddCategory />
    </div>
  );
};

export default page;
