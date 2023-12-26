import { FaHome, FaStore, FaCalendar } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { LuShoppingBasket } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

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
      title: "Events",
      icon: <FaCalendar />,
      links: [
        { label: "Calendar", href: "/events/calendar" },
        { label: "Events", href: "/event" },
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
      links: [{ label: "Orders", href: "/order" }],
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
