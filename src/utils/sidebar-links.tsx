import {
  FaHome,
  FaStore,
  FaCalendar,
  FaCartPlus,
  FaQuestion,
} from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { LuShoppingBasket } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { paths } from "@/paths/paths";
import { IoIosMan } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";

import { MdAdminPanelSettings, MdDeliveryDining } from "react-icons/md";

const sidebarItems = (role: string) => {
  const adminItems = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      links: [{ label: "Dashboard", href: "/admin/dashboard" }],
    },
    {
      title: "Categories",
      icon: <BiSolidCategoryAlt />,
      links: [
        { label: "Create Category", href: "/admin/category/add-category" },
        { label: "All Category", href: "/admin/category" },
      ],
    },
    {
      title: "Stores",
      icon: <FaStore />,
      links: [{ label: "All Stores", href: "/admin/stores" }],
    },
    {
      title: "Orders",
      icon: <FaCartPlus />,
      links: [{ label: "Order list", href: "/admin/orders" }],
    },
    {
      title: "Admins",
      icon: <MdAdminPanelSettings />,
      links: [
        { label: "All Admin", href: "/admin/admins" },
        { label: "Create Admin", href: "/admin/admins/create-admin" },
      ],
    },
    {
      title: "Employees",
      icon: <FaUsersViewfinder />,
      links: [
        { label: "All Employee", href: "/admin/employees" },
        { label: "Create Employee", href: "/admin/employees/add-employee" },
      ],
    },
    {
      title: "Delivery",
      icon: <MdDeliveryDining />,
      links: [
        { label: "All Delivery", href: "/admin/delivery" },
        { label: "Create Employee", href: "/admin/delivery/create-delivery" },
      ],
    },
    {
      title: "Events",
      icon: <FaCalendar />,
      links: [
        { label: "Add Events", href: "/admin/event/add-event" },
        { label: "Events Calendar", href: "/admin/event/calendar" },
      ],
    },
    {
      title: "FAQ",
      icon: <FaQuestion />,
      links: [{ label: "FAQ list", href: "/admin/faqs" }],
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
      links: [{ label: "Transaction", href: "/payments" }],
    },
    {
      title: "Events",
      icon: <IoWalletOutline />,
      links: [{ label: "Events", href: "/event" }],
    },
  ];

  const employeeItems = [
    {
      title: "Orders",
      icon: <LuShoppingBasket />,
      links: [
        { label: "Orders", href: "/order" },
        { label: "All Product", href: "/all-product" },
      ],
    },
    {
      title: "Setting",
      icon: <IoMdSettings />,
      links: [{ label: "Profile setting", href: "/settings/profilesetting" }],
    },
  ];

  const deliveryItems = [
    {
      title: "Orders",
      icon: <LuShoppingBasket />,
      links: [{ label: "Orders", href: "/delivery/order" }],
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
  if (role === "delivery") return deliveryItems;
};

export default sidebarItems;
