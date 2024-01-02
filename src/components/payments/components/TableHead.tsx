import { Flex, Input, Select } from "antd";
import React from "react";
import { paymentMethodItems } from "../utils/paymentData";

type Props = {};

const TableHead = (props: Props) => {
  /* //**Product page list sorting */
  const handleProductListsorting = (value: any) => {
    // setCurrentSortOrder(value);
  };

  return (
    <Flex align="center" justify="space-between">
      <Input size="middle" placeholder="Search..." style={{ width: "300px" }} />
      {/* <Select
                size="large"
                placeholder='Method'
                onChange={handleProductListsorting}
                style={{ width: "150px", textTransform: "capitalize" }}
                options={paymentMethodItems}
                defaultValue={paymentMethodItems[0]}
            /> */}
    </Flex>
  );
};

export default TableHead;
