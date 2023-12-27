import React from "react";
import { Button, Flex, Typography } from "antd";
import { useRouter } from "next/navigation";
import ButtonGroup from "antd/es/button/button-group";

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
            size="middle"
            onClick={() => router.push("products/add-product")}
          >
            Create Product
          </Button>
        </Title>

        <ButtonGroup>
          <Button size="middle" type="dashed">
            Export
          </Button>
          <Button size="middle" type="dashed">
            Import
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};

export default PVBreadcrumb;
