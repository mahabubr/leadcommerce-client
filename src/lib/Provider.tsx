"use client";

import theme from "@/theme/theme";
import StyledComponentsRegistry from "./AntdRegistry";
import { ConfigProvider } from "antd";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
