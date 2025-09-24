import { type ProColumns, ProTable } from "@ant-design/pro-components";
import { Tag, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "@/widgets/language/LanguageSelector.tsx";
import { useNavigate } from "react-router-dom";
import {
  dataSource,
  type Manual,
  statusColorMap,
} from "@/pages/manual-list/model/manualModel.ts";
import ThemeButton from "@/widgets/theme/ThemeButton.tsx";

const ManualList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleEditClick = (id: string) => {
    navigate("/editor", { state: { id: id } });
  };

  const columns: ProColumns<Manual>[] = [
    {
      title: t("manual.title"),
      dataIndex: "name",
      width: "25%",
      render: (_, record) => (
        <div>
          <div className="font-bold">{record.name}</div>
          <div className="text-gray-400 text-xs">{record.description}</div>
        </div>
      ),
    },
    {
      title: t("manual.category"),
      dataIndex: "category",
      align: "center",
      width: "15%",
      render: (_, record) => <Tag color="blue">{record.category}</Tag>,
    },
    {
      title: t("manual.status"),
      dataIndex: "status",
      align: "center",
      width: "15%",
      render: (_, record) => (
        <Tag color={statusColorMap[record.status]}>{record.status}</Tag>
      ),
    },
    {
      title: t("manual.pages"),
      dataIndex: "pageCount",
      valueType: "digit",
      width: "10%",
    },
    {
      title: t("manual.lastModified"),
      dataIndex: "lastModified",
      valueType: "date",
      width: "20%",
    },
    {
      title: t("manual.actions"),
      valueType: "option",
      align: "center",
      width: "15%",
      render: (_, record) => {
        return (
          <Button
            key="editable"
            icon={<EditOutlined />}
            onClick={() => handleEditClick(record.id)}
          >
            {t("manual.edit")}
          </Button>
        );
      },
    },
  ];

  return (
    <div className={"p-4"}>
      <div className={"flex justify-end mb-4"}>
        {/* 테스트용 테마 버튼 -> 추후 theme 는 host 에서 받아서 세팅 할 예정 */}
        <div className={"mr-2"}>
          <ThemeButton />
        </div>
        <LanguageSelector />
      </div>
      <ProTable<Manual>
        columns={columns}
        dataSource={dataSource}
        rowKey="id"
        search={false}
        options={false}
        pagination={false}
        headerTitle={t("manual.list")}
      />
    </div>
  );
};

export default ManualList;
