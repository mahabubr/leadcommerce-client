import decodedToken from "@/utils/decodeToken";
import { getFromLocalStorage } from "@/utils/local-storage";
import sidebarItems from "@/utils/sidebar-links";
import { Drawer, Menu } from "antd";
import Link from "next/link";
import { paths } from "@/paths/paths";

const { SubMenu } = Menu;

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
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('https://img.freepik.com/free-vector/e-commerce-illustration_1168-341.jpg?w=740&t=st=1704477702~exp=1704478302~hmac=517c3fa72feeb626047eca95a17b7fbf7515f86b0258d8852c122ac6224953d2')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 0.1,
        }}
      />
      <Menu
        mode="inline"
        style={{
          width: "100%",
          borderRight: 0,
          backgroundColor: "rgba(0, 0, 0, 0.0)",
        }}
      >
        {sidebarData?.map((section, index) => (
          <SubMenu
            key={`sub${index}`}
            title={
              <span>
                {section.icon}
                <span
                  style={{
                    marginLeft: 9,
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#393f47",
                  }}
                >
                  {section.title}
                </span>
              </span>
            }
          >
            {section.links.map((link: any, subIndex) => (
              <Menu.Item key={`sub${index}-item${subIndex}`}>
                <Link href={link.href} passHref>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    {link.icon}
                    <span
                      style={{
                        marginLeft: 6,
                        fontSize: 15,
                        fontWeight: 500,
                      }}
                    >
                      {link.label}
                    </span>
                  </span>
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
