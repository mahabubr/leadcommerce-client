import { Drawer, Layout, Menu } from "antd";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";

const { SubMenu } = Menu;

const sidebarData = [
  {
    title: "Dashboard",
    icon: <FaHome />,
    links: [{ label: "Dashboard", href: "/dashboard" }],
  },
  {
    title: "Products",
    icon: <FaHome />,
    links: [{ label: "All Products", href: "/products" }],
  },
  {
    title: "Stores",
    icon: <FaHome />,
    links: [{ label: "Stores", href: "/stores" }],
  },
  {
    title: "Orders",
    icon: <IoMdSettings />,
    links: [{ label: "Orders", href: "/order" }],
  },

  {
    title: "Ecommerce",
    icon: <IoMdSettings />,
    links: [
      { label: "Store", href: "/stores" },
      { label: "Seller Details", href: "/seller-details" },
    ],
  },
  {
    title: "Setting",
    icon: <IoMdSettings />,
    links: [{ label: "Profile setting", href: "/settings/profilesetting" }],
  },
];

const SideBar = ({ closeDrawer, open }: any) => {
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
        {sidebarData.map((section, index) => (
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
