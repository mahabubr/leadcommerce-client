import { FaHome, FaStore, FaCalendar } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { LuShoppingBasket } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { paths } from "@/paths/paths";
import { IoIosMan } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const sidebarItems = (role: string) => {
  const adminItems = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      links: [{ label: "Dashboard", href: "/dashboard" }],
    },
    {
      title: "Categories",
      icon: <BiSolidCategoryAlt />,
      links: [{ label: "All Category", href: "/category" }],
    },
    {
      title: "Stores",
      icon: <FaStore />,
      links: [{ label: "Stores", href: "/stores" }],
    },
    {
      title: "Users",
      icon: <FaUser />,
      links: [{ label: "Users", href: "/user" }],
    },
    {
      title: "Events",
      icon: <FaCalendar />,
      links: [
        { label: "Calendar", href: "/event/calendar" },
        { label: "Events", href: "/event" },
        { label: "Add Events", href: paths.add_events },
      ],
    },
  ];

  const storeItems = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      links: [{ label: "Seller Details", href: "/seller-details" }],
    },
    {
      title: "Products",
      icon: <MdOutlineProductionQuantityLimits />,
      links: [{ label: "All Products", href: "/products" }],
    },
    {
      title: "Orders",
      icon: <LuShoppingBasket />,
      links: [{ label: "Orders", href: "/orders" }],
    },
    {
      title: "Employe",
      icon: <IoIosMan />,
      links: [
        { label: "Employe List", href: paths.employees },
        { label: "Add Employee", href: paths.addEmploye },
      ],
    },
    {
      title: "Wallet",
      icon: <IoWalletOutline />,
      links: [{ label: "Wallet", href: "/wallet" }],
    },
    {
      title: "Transactions",
      icon: <IoWalletOutline />,
      links: [{ label: "Transaction", href: "/transaction" }],
    },
  ];

  const employeeItems = [
    {
      title: "Orders",
      icon: <LuShoppingBasket />,
      links: [{ label: "Orders", href: "/order" }],
    },
    {
      title: "Setting",
      icon: <IoMdSettings />,
      links: [{ label: "Profile setting", href: "/settings/profilesetting" }],
    },
  ];

  if (role === "admin") return adminItems;
  if (role === "store") return storeItems;
  if (role === "employee") return employeeItems;
};

export default sidebarItems;
