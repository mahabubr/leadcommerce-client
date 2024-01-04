import { Table, Flex, Button } from "antd";
import { ColumnsType } from "antd/es/table";
import Image from "next/image";
import React from "react";
import moment from "moment";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/Loader";

type Props = {
  datas: any;
  setCurrentClickData: any;
};

const PaymentTable = ({
  datas,
  setCurrentClickData,
  setCurrentPage,
  setCurrentLimit,
  isLoading,
  currentPage,
  currentLimit,
}: any) => {
  // global
  const router = useRouter();

  // data columns
  const columns: ColumnsType<any> = [
    {
      title: "Transaction Id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Total Amount",
      dataIndex: "total_amount",
      key: "total_amount",
      render: (_, { total_amount }) => <>$ {total_amount} </>,
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, { createdAt }) => <>{new Date(createdAt).toDateString()}</>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, { _id }) => (
        <Button
          type="primary"
          size="middle"
          onClick={() => router.push(`/payments/${_id}`)}
        >
          Details
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={datas}
        rowKey="_id"
        scroll={{ x: true }}
        pagination={{
          current: currentPage,
          pageSize: currentLimit,
          defaultCurrent: 1,
          pageSizeOptions: ["5", "10", "20"],
          total: datas?.meta?.total,
          onChange: (page, pageSize) => {
            setCurrentPage(page);
            setCurrentLimit(pageSize);
          },
          onShowSizeChange: (current, size) => {
            setCurrentPage(current);
            setCurrentLimit(size);
          },
          showSizeChanger: true,
        }}
        loading={isLoading && { indicator: <Loader /> }}
        onRow={(record, rowIndex) => ({
          onClick: () => setCurrentClickData(record),
        })}
      />
    </>
  );
};

export default PaymentTable;
