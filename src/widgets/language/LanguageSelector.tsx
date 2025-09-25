import { useLanguageStore } from "@/app/store/useLanguageStore.ts";
import { Select } from "antd";

const LanguageSelector = () => {
  const { language, setLanguage, availableLanguages } = useLanguageStore();

  return (
    <Select
      value={language}
      onChange={(value) => setLanguage(value)}
      className={"w-[150px]"}
      size="middle"
      fieldNames={{ label: "name", value: "code" }}
      options={availableLanguages}
    ></Select>
  );
};

export default LanguageSelector;
