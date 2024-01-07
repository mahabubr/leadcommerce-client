import { Avatar, Dropdown, Input, Menu } from "antd";
import { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoIosNotifications } from "react-icons/io";
import { MdCenterFocusStrong } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Loader from "./Loader";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { extractPathNames } from "@/Helper/CommonFunction";
import style from './static/ui.module.css';
import Link from "next/link";

const TopBar = ({ open, closeDrawer, showDrawer }: any) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [show_paths,setShowPaths]=useState(false);
  const router = useRouter();
  const [new_paths,setNewPaths]=useState<string[]>([]);

  const toggleFullscreen = () => {
    const element = document.documentElement as HTMLElement;

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        const options: FullscreenOptions = {
          navigationUI: "hide",
        };
        element
          .requestFullscreen(options)
          .then(() => {
            setIsFullscreen(true);
          })
          .catch((error) => {
            console.error("Error attempting to enter fullscreen:", error);
          });
      }
    } else {
      if (document.exitFullscreen) {
        document
          .exitFullscreen()
          .then(() => {
            setIsFullscreen(false);
          })
          .catch((error) => {
            console.error("Error attempting to exit fullscreen:", error);
          });
      }
    }
  };

  const handleSignOut = () => {
    if (typeof window === "undefined") {
      return;
    }
    localStorage.removeItem("accessToken");
    router.refresh();
    return <Loader />;
  };

  useEffect(()=>{
    setNewPaths(extractPathNames());
  },[])

  const changeHandler=(e:any)=>{
    const paths=[...extractPathNames()];
    const newPaths:string[]=[];
    paths.forEach((p_item)=>{
      const new_p_item=p_item;
      const new_path_item=new_p_item.split('/').join('');
      const res= new_path_item.toLocaleLowerCase().search(e.target.value.toLocaleLowerCase());
      if(res>=0)newPaths.push(p_item);
    })
    setNewPaths([...newPaths])
  }

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #f0f0f0",
        marginLeft: open ? 320 : 0,
        transition: "margin 0.4s ",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
        }}
      >
        <div>
          {open ? (
            <div onClick={closeDrawer}>
              <HiBars3 style={{ fontSize: "22px", cursor: "pointer" }} />
            </div>
          ) : (
            <div onClick={showDrawer}>
              <HiBars3 style={{ fontSize: "22px", cursor: "pointer" }} />
            </div>
          )}
        </div>
          <div style={{position:'relative', flex: 1, margin: "0 20px" }}>
            <Input
              size="middle"
              placeholder="Search Pages"
              suffix={<CiSearch />}
              allowClear
              style={{ width: "100%" }}
              onFocus={()=>setShowPaths(true)}
              onBlur={()=>setTimeout(()=>setShowPaths(false),300)}
              onChange={(e)=>changeHandler(e)}
            />
            {
              show_paths?(
                <ul className={style.ul_list}>
                  {new_paths?.map((path_items:string)=>(
                      <li onClick={()=>router.push(path_items)} className={style.list_item} key={path_items}>
                        <Link href={path_items} >{path_items}</Link>
                        {/* {path_items} */}
                      </li>
                  ))}
                </ul>
              ):''
            }
          </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            color: "#5A5A5A",
          }}
        >
          <MdCenterFocusStrong
            onClick={toggleFullscreen}
            style={{ fontSize: "22px", cursor: "pointer" }}
          />
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item onClick={handleSignOut} key="7">
                  Log Out
                </Menu.Item>
              </Menu>
            }
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Avatar
                size="default"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <FaCaretDown style={{ fontSize: "22px" }} />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
