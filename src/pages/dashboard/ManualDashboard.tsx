import { ProPageHeader, ProTable, ProCard } from "@ant-design/pro-components";
import { Button, Form, Input, Select } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ThemeButton from "@/widgets/theme/ThemeButton.tsx";
import LanguageSelector from "@/widgets/language/LanguageSelector.tsx";
import {
  type Manual,
  type ManualFormValues,
} from "@/entities/dashbord/dashboard.type.ts";
import { PUBLISH_STATUS } from "@/entities/dashbord/dashboard.enum.ts";
import { dataSource } from "@/entities/dashbord/testData.ts";
import { useState } from "react";
import useManualColumns from "@/entities/dashbord/useManualColumns.tsx";

const ManualDashboard = () => {
  const [form] = Form.useForm<ManualFormValues>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [filters, setFilters] = useState<ManualFormValues>({});
  const columns = useManualColumns();

  const handleEditClick = (id: string) => {
    navigate("/editor", { state: { id: id } });
  };

  const handleAddManual = () => {
    navigate("/editor", { state: { id: -1 } });
  };

  // 폼 값 변경시 필터 업데이트
  const handleFormChange = () => {
    const values = form.getFieldsValue();
    setFilters(values);
  };

  // 간단한 필터링
  const filteredData = dataSource.filter((item) => {
    const titleMatch =
      !filters?.title ||
      item.name.toLowerCase().includes(filters.title.toLowerCase());

    const categoryMatch =
      !filters?.category || item.category === filters.category;

    const publishStatusMatch =
      !filters?.publishStatus ||
      filters.publishStatus.length === 0 ||
      filters.publishStatus.includes(item.publishStatus);

    return titleMatch && categoryMatch && publishStatusMatch;
  });

  return (
    <div className={"p-4"}>
      <div className={"flex justify-end mb-4"}>
        {/* 테스트용 테마 버튼 -> 추후 theme 는 host 에서 받아서 세팅 할 예정 */}
        <div className={"mr-2"}>
          <ThemeButton />
        </div>
        <LanguageSelector />
      </div>
      <ProPageHeader prefixedClassName={t("manual.list")} />
      <ProCard
        title={t("manual.list")}
        bodyStyle={{
          padding: 0,
        }}
      >
        <ProTable<Manual>
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          options={false}
          search={false}
          toolbar={{
            search: (
              <Form
                form={form}
                layout="inline"
                onValuesChange={handleFormChange}
              >
                <Form.Item name="title">
                  <Input placeholder={t("manual.title")} />
                </Form.Item>
                <Form.Item name="category">
                  <Input placeholder={t("manual.category")} />
                </Form.Item>
                <Form.Item name="publishStatus">
                  <Select
                    mode="multiple"
                    allowClear
                    className={"!w-[300px]"}
                    placeholder={t("manual.publishStatus")}
                    options={[
                      {
                        label: t("publish.draft"),
                        value: PUBLISH_STATUS.DRAFT,
                      },
                      {
                        label: t("publish.published"),
                        value: PUBLISH_STATUS.PUBLISHED,
                      },
                      {
                        label: t("publish.unpublished"),
                        value: PUBLISH_STATUS.UNPUBLISHED,
                      },
                    ]}
                  />
                </Form.Item>
              </Form>
            ),
            actions: [
              <Button key="add" type="primary" onClick={handleAddManual}>
                {t("manual.addNew")}
              </Button>,
            ],
          }}
          onRow={(record) => {
            return {
              onClick: () => handleEditClick(record.id),
            };
          }}
          rowClassName={"cursor-pointer"}
        />
      </ProCard>
    </div>
  );
};

export default ManualDashboard;
