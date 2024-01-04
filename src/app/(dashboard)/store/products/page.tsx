import ViewProducts from "@/components/products/ViewProducts";
import style from "../dashboard/static/dashboard.module.css";

const page = () => {
  return (
    <div className={style.container}>
      <ViewProducts />
    </div>
  );
};

export default page;
