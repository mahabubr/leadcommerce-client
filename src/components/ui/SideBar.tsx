<<<<<<< HEAD
import { Drawer, Layout, Menu } from "antd";
import { FaHome  } from "react-icons/fa";
import { IoManSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
=======
import decodedToken from "@/utils/decodeToken";
import { getFromLocalStorage } from "@/utils/local-storage";
import sidebarItems from "@/utils/sidebar-links";
import { Drawer, Menu } from "antd";
>>>>>>> 2334c099f27f0acd61bec28754a196ac6c8040e3
import Link from "next/link";
import { paths } from "@/paths/paths";

const { SubMenu } = Menu;

<<<<<<< HEAD
const sidebarData = [
  {
    title: "Dashboard",
    icon: <FaHome />,
    links: [{ label: "Dashboard", href: "/dashboard" }],
  },
  {
    title: "Categories",
    icon: <FaHome />,
    links: [{ label: "All Category", href: "/category" }],
  },
  {
    title: "Products",
    icon: <FaHome />,
    links: [{ label: "All Products", href: "/products" }],
  },
  {
    title: "Stores",
    icon: <FaHome />,
    links: [
      { label: "Stores", href: "/stores" },
      { label: "Seller Details", href: "/seller-details" },
    ],
  },
  {
    title: "Orders",
    icon: <IoMdSettings />,
    links: [{ label: "Orders", href: "/order" }],
  },
  {
    title: "Employees",
    icon: <IoManSharp />,
    links: [
      { label: "Employees", href: paths.employees },
      { label: "Add Employe", href: paths.addEmploye },
    ],
  },
  {
    title: "Wallet",
    icon: <IoMdSettings />,
    links: [{ label: "Wallet", href: "/wallet" }],
  },

  {
    title: "Setting",
    icon: <IoMdSettings />,
    links: [{ label: "Profile setting", href: "/settings/profilesetting" }],
  },
];

=======
>>>>>>> 2334c099f27f0acd61bec28754a196ac6c8040e3
const SideBar = ({ closeDrawer, open }: any) => {
  const token = getFromLocalStorage("accessToken");
  const decode = decodedToken(token as string);

  //@ts-ignore
  const role = decode?.role;

  const sidebarData = sidebarItems(role);

  return (
    <Drawer
      title="Lead Commerce"
      placement="left"
      onClose={closeDrawer}
      visible={open}
      width={300}
      maskClosable={false}
      mask={false}
    >
      <Menu mode="inline" style={{ width: "100%", borderRight: 0 }}>
        {sidebarData?.map((section, index) => (
          <SubMenu
            key={`sub${index}`}
            title={
              <span>
                {section.icon}
                <span style={{ marginLeft: 8 }}>{section.title}</span>
              </span>
            }
          >
            {section.links.map((link, subIndex) => (
              <Menu.Item key={`sub${index}-item${subIndex}`}>
                <Link href={link.href} passHref>
                  <span>{link.label}</span>
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Drawer>
  );
};

export default SideBar;
