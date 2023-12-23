import dynamic from "next/dynamic";

const PageBody = dynamic(() => import("@/components/authPage/PageBody"), {
  ssr: false,
});

export const metadata = {
  title: "LC - login page",
  description: "page about page description",
};

const page = () => {
  return <PageBody />;
};

export default page;
