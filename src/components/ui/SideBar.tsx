import { Drawer, Collapse, Divider } from "antd";
import { FaHome, FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const { Panel } = Collapse;

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
      <Collapse accordion>
        <Panel
          showArrow={false}
          header={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              Dashboard
              <FaChevronDown />
            </div>
          }
          key="1"
        >
          <div
            style={{
              color: "#5A5A5A",
              fontSize: 14,
              fontWeight: "500",
              borderRadius: 10,
            }}
          >
            <Link
              href="/dashboard"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              Dashboard
            </Link>
          </div>
        </Panel>
      </Collapse>
      <Collapse accordion style={{ marginTop: 10 }}>
        <Panel
          showArrow={false}
          header={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              Products
              <FaChevronDown />
            </div>
          }
          key="1"
        >
          <div
            style={{
              color: "#5A5A5A",
              fontSize: 14,
              fontWeight: "500",
              borderRadius: 10,
            }}
          >
            <Link
              href="/dashboard"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              All Products
            </Link>
          </div>
          <Divider style={{ margin: "5px auto", width: "80%" }} />
          <div
            style={{
              color: "#5A5A5A",
              fontSize: 14,
              fontWeight: "500",
              borderRadius: 10,
            }}
          >
            <Link
              href="/dashboard"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              View By Category
            </Link>
          </div>
        </Panel>
      </Collapse>
      <Collapse accordion style={{ marginTop: 10 }}>
        <Panel
          showArrow={false}
          header={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              Orders
              <FaChevronDown />
            </div>
          }
          key="1"
        >
          <div
            style={{
              color: "#5A5A5A",
              fontSize: 14,
              fontWeight: "500",
              borderRadius: 10,
            }}
          >
            <Link
              href="/dashboard"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              All Orders
            </Link>
          </div>
          <Divider style={{ margin: "5px auto", width: "80%" }} />
          <div
            style={{
              color: "#5A5A5A",
              fontSize: 14,
              fontWeight: "500",
              borderRadius: 10,
            }}
          >
            <Link
              href="/dashboard"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              Rejected Orders
            </Link>
          </div>
          <Divider style={{ margin: "5px auto", width: "80%" }} />
          <div
            style={{
              color: "#5A5A5A",
              fontSize: 14,
              fontWeight: "500",
              borderRadius: 10,
            }}
          >
            <Link
              href="/dashboard"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              Approved Orders
            </Link>
          </div>
        </Panel>
      </Collapse>
      <Collapse accordion style={{ marginTop: 10 }}>
        <Panel
          showArrow={false}
          header={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              Sellers
              <FaChevronDown />
            </div>
          }
          key="1"
        >
          <div
            style={{
              color: "#5A5A5A",
              fontSize: 14,
              fontWeight: "500",
              borderRadius: 10,
            }}
          >
            <Link
              href="/dashboard"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              Sellers Id
            </Link>
          </div>
          <Divider style={{ margin: "5px auto", width: "80%" }} />
          <div
            style={{
              color: "#5A5A5A",
              fontSize: 14,
              fontWeight: "500",
              borderRadius: 10,
            }}
          >
            <Link
              href="/dashboard"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              Sellers List
            </Link>
          </div>
        </Panel>
      </Collapse>
      <Collapse accordion style={{ marginTop: 10 }}>
        <Panel
          showArrow={false}
          header={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              Transactions
              <FaChevronDown />
            </div>
          }
          key="1"
        >
          <div
            style={{
              color: "#5A5A5A",
              fontSize: 14,
              fontWeight: "500",
              borderRadius: 10,
            }}
          >
            <Link
              href="/dashboard"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              All Transactions
            </Link>
          </div>
        </Panel>
      </Collapse>
      <Collapse accordion style={{ marginTop: 10 }}>
        <Panel
          showArrow={false}
          header={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              Review
              <FaChevronDown />
            </div>
          }
          key="1"
        >
          <div
            style={{
              color: "#5A5A5A",
              fontSize: 14,
              fontWeight: "500",
              borderRadius: 10,
            }}
          >
            <Link
              href="/dashboard"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              All Transactions
            </Link>
          </div>
        </Panel>
      </Collapse>
      <Collapse accordion style={{ marginTop: 10 }}>
        <Panel
          showArrow={false}
          header={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              Brands
              <FaChevronDown />
            </div>
          }
          key="1"
        >
          <div
            style={{
              color: "#5A5A5A",
              fontSize: 14,
              fontWeight: "500",
              borderRadius: 10,
            }}
          >
            <Link
              href="/dashboard"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              All Transactions
            </Link>
          </div>
        </Panel>
      </Collapse>
      <Collapse accordion style={{ marginTop: 10 }}>
        <Panel
          showArrow={false}
          header={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              Statistics
              <FaChevronDown />
            </div>
          }
          key="1"
        >
          <div
            style={{
              color: "#5A5A5A",
              fontSize: 14,
              fontWeight: "500",
              borderRadius: 10,
            }}
          >
            <Link
              href="/dashboard"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#5A5A5A",
                fontSize: 14,
                fontWeight: "500",
                width: "90%",
                borderRadius: 10,
              }}
            >
              <FaHome />
              All Transactions
            </Link>
          </div>
        </Panel>
      </Collapse>
    </Drawer>
  );
};

export default SideBar;
