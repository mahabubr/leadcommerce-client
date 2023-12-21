/* eslint-disable @next/next/no-img-element */
"use client";

import SpineChart from "@/components/dashboard/SplineChart";
import { Button, Card, Input, Select } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { CiSearch } from "react-icons/ci";

const chartData = [10, 20, 30, 40, 50]; // Your data points
const chartLabels = ["A", "B", "C", "D", "E"]; // Labels for the data points

const Stores = () => {
  return (
    <div>
      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* First section */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Input
              size="middle"
              placeholder="Search Pages"
              suffix={<CiSearch />}
              allowClear
            />
          </div>

          {/* Second section */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Select
              placeholder="Categories"
              allowClear
              options={[
                { value: "ordered", label: "Ordered" },
                { value: "rejected", label: "Rejected" },
              ]}
              style={{ width: 250 }}
            />
            <Button type="primary">Add Store</Button>
          </div>
        </div>
      </Card>
      <div
        style={{
          marginTop: 20,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
            <h4 style={{ marginTop: 20 }}>Apple LLC</h4>
            <p style={{ fontSize: 14 }}>Steve Jobs</p>
          </div>
          <div>
            <SpineChart />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div>
              <p>452</p>
              <p style={{ fontSize: 14, color: "grey" }}>Item Stock</p>
            </div>
            <div>
              <p>$45,415</p>
              <p style={{ fontSize: 14, color: "grey" }}>Balance</p>
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <Button type="primary">View Details</Button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
            <h4 style={{ marginTop: 20 }}>Apple LLC</h4>
            <p style={{ fontSize: 14 }}>Steve Jobs</p>
          </div>
          <div>
            <SpineChart />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div>
              <p>452</p>
              <p style={{ fontSize: 14, color: "grey" }}>Item Stock</p>
            </div>
            <div>
              <p>$45,415</p>
              <p style={{ fontSize: 14, color: "grey" }}>Balance</p>
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <Button type="primary">View Details</Button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
            <h4 style={{ marginTop: 20 }}>Apple LLC</h4>
            <p style={{ fontSize: 14 }}>Steve Jobs</p>
          </div>
          <div>
            <SpineChart />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div>
              <p>452</p>
              <p style={{ fontSize: 14, color: "grey" }}>Item Stock</p>
            </div>
            <div>
              <p>$45,415</p>
              <p style={{ fontSize: 14, color: "grey" }}>Balance</p>
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <Button type="primary">View Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;
