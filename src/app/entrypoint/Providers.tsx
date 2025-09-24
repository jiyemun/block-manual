import { ConfigProvider, theme } from "antd";
// import { ProConfigProvider } from "@ant-design/pro-components";
import koKR from "antd/locale/ko_KR";
import React from "react";
import { ThemeKey, useThemeStore } from "@/shared/i18n/stores/useThemeStore.ts";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const themeMode = useThemeStore((state) => state.theme);

  const themeAlgorithm =
    themeMode === ThemeKey.DARK_THEME
      ? theme.darkAlgorithm
      : theme.defaultAlgorithm;

  return (
    <ConfigProvider
      locale={koKR}
      theme={{
        algorithm: themeAlgorithm,
      }}
    >
      {/*<ProConfigProvider*/}
      {/*  hashed={false}*/}
      {/*  token={{*/}
      {/*    header: {*/}
      {/*      colorBgHeader: "#001529",*/}
      {/*      colorHeaderTitle: "#fff",*/}
      {/*      colorTextMenu: "#dfdfdf",*/}
      {/*      colorTextMenuSecondary: "#dfdfdf",*/}
      {/*      colorTextMenuSelected: "#fff",*/}
      {/*      colorBgMenuItemSelected: "#1890ff",*/}
      {/*    },*/}
      {/*  }}*/}
      {/*>*/}
      {children}
      {/*</ProConfigProvider>*/}
    </ConfigProvider>
  );
};
