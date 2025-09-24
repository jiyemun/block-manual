import { Button } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { ThemeKey, useThemeStore } from "@/shared/i18n/stores/useThemeStore.ts";

const ThemeButton = () => {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    const nextTheme =
      theme === ThemeKey.LIGHT_THEME
        ? ThemeKey.DARK_THEME
        : ThemeKey.LIGHT_THEME;
    setTheme(nextTheme);
  };

  return (
    <Button
      type="text"
      icon={theme === ThemeKey.LIGHT_THEME ? <MoonOutlined /> : <SunOutlined />}
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
