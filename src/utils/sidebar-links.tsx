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
import { AiFillDatabase } from "react-icons/ai";
import { PiCircleDashedBold } from "react-icons/pi";

import { MdAdminPanelSettings, MdDeliveryDining } from "react-icons/md";

const sidebarItems = (role: string) => {
  const adminItems = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      links: [
        {
          label: "Dashboard",
          href: "/admin/dashboard",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
    {
      title: "Categories",
      icon: <BiSolidCategoryAlt />,
      links: [
        {
          label: "Create Category",
          href: "/admin/category/add-category",
          icon: <PiCircleDashedBold />,
        },
        {
          label: "All Category",
          href: "/admin/category",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
    {
      title: "Stores",
      icon: <FaStore />,
      links: [
        {
          label: "All Stores",
          href: "/admin/stores",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
    {
      title: "Orders",
      icon: <FaCartPlus />,
      links: [
        {
          label: "Order list",
          href: "/admin/orders",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
    {
      title: "Admins",
      icon: <MdAdminPanelSettings />,
      links: [
        {
          label: "All Admin",
          href: "/admin/admins",
          icon: <PiCircleDashedBold />,
        },
        {
          label: "Create Admin",
          href: "/admin/admins/create-admin",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
    {
      title: "Employees",
      icon: <FaUsersViewfinder />,
      links: [
        {
          label: "All Employee",
          href: "/admin/employees",
          icon: <PiCircleDashedBold />,
        },
        {
          label: "Create Employee",
          href: "/admin/employees/add-employee",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
    {
      title: "Delivery",
      icon: <MdDeliveryDining />,
      links: [
        {
          label: "All Delivery",
          href: "/admin/delivery",
          icon: <PiCircleDashedBold />,
        },
        {
          label: "Create Delivery",
          href: "/admin/delivery/create-delivery",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
    {
      title: "Events",
      icon: <FaCalendar />,
      links: [
        {
          label: "Add Events",
          href: "/admin/event/add-event",
          icon: <PiCircleDashedBold />,
        },
        {
          label: "Events Calendar",
          href: "/admin/event/calendar",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
    {
      title: "FAQ",
      icon: <FaQuestion />,
      links: [
        {
          label: "FAQ list",
          href: "/admin/faqs",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
  ];

  const storeItems = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      links: [
        {
          label: "Seller Details",
          href: "/store/seller-details",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
    {
      title: "Products",
      icon: <MdOutlineProductionQuantityLimits />,
      links: [
        {
          label: "All Products",
          href: "/store/products",
          icon: <PiCircleDashedBold />,
        },
        {
          label: "Create Products",
          href: "/store/products/add-product",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
    {
      title: "Orders",
      icon: <LuShoppingBasket />,
      links: [
        {
          label: "Orders",
          href: "/store/orders",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
    // {
    //   title: "Wallet",
    //   icon: <IoWalletOutline />,
    //   links: [{ label: "Wallet", href: "/wallet" }],
    // },
    {
      title: "Transactions",
      icon: <IoWalletOutline />,
      links: [
        {
          label: "Transaction",
          href: "/store/payments",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
    {
      title: "Events",
      icon: <FaCalendar />,
      links: [
        { label: "Events", href: "/store/event", icon: <PiCircleDashedBold /> },
      ],
    },
  ];

  const employeeItems = [
    {
      title: "Orders",
      icon: <LuShoppingBasket />,
      links: [
        {
          label: "Orders",
          href: "/employee/order",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
    {
      title: "Products",
      icon: <AiFillDatabase />,
      links: [
        {
          label: "All Product",
          href: "/employee/all-product",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
    {
      title: "Setting",
      icon: <IoMdSettings />,
      links: [
        {
          label: "Profile setting",
          href: "/employee/settings/profilesetting",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
  ];

  const deliveryItems = [
    {
      title: "Orders",
      icon: <LuShoppingBasket />,
      links: [
        {
          label: "Orders",
          href: "/delivery/order",
          icon: <PiCircleDashedBold />,
        },
      ],
    },
  ];

  if (role === "admin") return adminItems;
  if (role === "store") return storeItems;
  if (role === "employee") return employeeItems;
  if (role === "delivery") return deliveryItems;
};

export default sidebarItems;
