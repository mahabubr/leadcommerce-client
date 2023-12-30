"use client";

import UpdateCategory from "@/components/category/UpdateCategory";
import style from "../../../dashboard/static/dashboard.module.css";

const page = ({ params }: { params: { categoryId: string } }) => {
  return (
    <div className={style.container}>
      <UpdateCategory categoryId={params.categoryId} />
    </div>
  );
};

export default page;
