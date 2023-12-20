import React from "react";
import { Button, Flex, Typography } from "antd";
import { useRouter } from "next/navigation";

const { Title } = Typography;

const boxStyle: React.CSSProperties = {
  width: "100%",
};

const PVBreadcrumb = () => {
  // global
  const router = useRouter();

  return (
    <Flex gap="middle" align="start">
      <Flex style={boxStyle} justify="space-between" align="center">
        <Title style={{ margin: 0 }} level={3}>
          <Button
            type="primary"
            size="large"
            onClick={() => router.push("products/add-product")}
          >
            Create Product
          </Button>
        </Title>

        <Flex gap="small" wrap="wrap">
          <Button size="large">Export</Button>
          <Button size="large">Import</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PVBreadcrumb;
