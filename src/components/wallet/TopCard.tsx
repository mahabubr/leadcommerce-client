import { Card } from "antd";
import { IoLogoUsd } from "react-icons/io";

const TopCard = () => {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 30 }}
    >
      <Card style={{ boxShadow: "2px 2px 10px grey" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <div>
            <IoLogoUsd
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "#3498db",
                padding: 8,
                borderRadius: 8,
                color: "white",
              }}
            />
          </div>
          <div>
            <p style={{ fontSize: 20, fontWeight: "600" }}>USD</p>
            <p style={{ fontSize: 14 }}>usdt/price</p>
          </div>
          <div>
            <p style={{ color: "#e74c3c" }}>3.2541</p>
            <p style={{ color: "#27ae60" }}>48%</p>
          </div>
        </div>
      </Card>
      <Card style={{ boxShadow: "2px 2px 10px grey" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <div>
            <IoLogoUsd
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "#3498db",
                padding: 8,
                borderRadius: 8,
                color: "white",
              }}
            />
          </div>
          <div>
            <p style={{ fontSize: 20, fontWeight: "600" }}>USD</p>
            <p style={{ fontSize: 14 }}>usdt/price</p>
          </div>
          <div>
            <p style={{ color: "#e74c3c" }}>3.2541</p>
            <p style={{ color: "#27ae60" }}>48%</p>
          </div>
        </div>
      </Card>
      <Card style={{ boxShadow: "2px 2px 10px grey" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <div>
            <IoLogoUsd
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "#3498db",
                padding: 8,
                borderRadius: 8,
                color: "white",
              }}
            />
          </div>
          <div>
            <p style={{ fontSize: 20, fontWeight: "600" }}>USD</p>
            <p style={{ fontSize: 14 }}>usdt/price</p>
          </div>
          <div>
            <p style={{ color: "#e74c3c" }}>3.2541</p>
            <p style={{ color: "#27ae60" }}>48%</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TopCard;
