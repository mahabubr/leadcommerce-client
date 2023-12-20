import React from "react";
import { Button, Flex, Typography } from "antd";
import { useRouter } from "next/navigation";

const { Title } = Typography;

const boxStyle: React.CSSProperties = {
  width: "100%",
};

type Props = {
  title: string;
};

const PCBreadcrumb = ({ title }: Props) => {
  // global
  const router = useRouter();

  return (
    <Flex gap="middle" align="start" vertical>
      <Flex style={boxStyle} justify="space-between" align="center">
        <Title style={{ margin: 0 }} level={3}>
          <Button
            type="primary"
            size="large"
            onClick={() => router.push("/products")}
          >
            View All
          </Button>
        </Title>

        <Flex gap="small" wrap="wrap">
          <Button size="large">Save as Draft</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PCBreadcrumb;
