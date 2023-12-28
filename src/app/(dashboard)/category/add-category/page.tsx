import AddCategory from "@/components/category/AddCategory";

const page = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div>
      <AddCategory />
    </div>
  );
};

export default page;
