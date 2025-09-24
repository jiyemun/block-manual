import { ConfigProvider, theme } from "antd";
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
      {children}
    </ConfigProvider>
  );
};
