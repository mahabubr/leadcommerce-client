
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
      open={open}
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
