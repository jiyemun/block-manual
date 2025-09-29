import { type ProColumns } from "@ant-design/pro-components";
import { Tag } from "antd";
import { useTranslation } from "react-i18next";
import {
  DOCUMENT_STATUS,
  documentStatusColorMap,
  PUBLISH_STATUS,
  SAVE_STATUS,
} from "@/entities/dashbord/dashboard.enum.ts";
import type { Manual } from "@/entities/dashbord/dashboard.type.ts";

export const useManualColumns = (): ProColumns<Manual>[] => {
  const { t } = useTranslation();

  return [
    {
      title: t("manual.title"),
      dataIndex: "name",
      width: "25%",
    },
    {
      title: t("manual.category"),
      dataIndex: "category",
      width: "20%",
    },
    {
      title: t("manual.saveStatus"),
      dataIndex: "saveStatus",
      align: "center",
      width: "10%",
      render: (_, record) => {
        const maps = {
          [SAVE_STATUS.DRAFT]: t("save.draft"),
          [SAVE_STATUS.SAVED]: t("save.saved"),
          [SAVE_STATUS.DRAFT_WORKING]: t("save.draftWorking"),
        };
        return maps[record.saveStatus] ?? "-";
      },
    },
    {
      title: t("manual.publishStatus"),
      dataIndex: "publishStatus",
      align: "center",
      width: "10%",
      render: (_, record) => {
        const maps = {
          [PUBLISH_STATUS.PUBLISHED]: t("publish.published"),
          [PUBLISH_STATUS.DRAFT]: t("publish.draft"),
          [PUBLISH_STATUS.UNPUBLISHED]: t("publish.unpublished"),
        };
        return maps[record.publishStatus] ?? "-";
      },
    },
    {
      title: t("manual.pages"),
      dataIndex: "pageCount",
      valueType: "digit",
      width: "8%",
    },
    {
      title: t("manual.status"),
      dataIndex: "documentStatus",
      align: "center",
      width: "10%",
      render: (_, record) => {
        const maps = {
          [DOCUMENT_STATUS.DRAFT]: t("document.draft"),
          [DOCUMENT_STATUS.USER_VIEW]: t("document.userView"),
          [DOCUMENT_STATUS.IN_REVIEW]: t("document.inReview"),
        };
        return (
          <Tag
            color={
              documentStatusColorMap[record.documentStatus] ??
              documentStatusColorMap.default
            }
          >
            {maps[record.documentStatus] ?? "-"}
          </Tag>
        );
      },
    },
    {
      title: t("manual.lastModified"),
      dataIndex: "lastModified",
      valueType: "date",
      width: "15%",
    },
  ];
};

export default useManualColumns;
