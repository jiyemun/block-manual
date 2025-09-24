import { Route, Routes } from "react-router-dom";
import BaseLayout from "@/widgets/layout/BaseLayout.tsx";
import ManualEditor from "@/pages/manual-editor/ui/ManualEditor.tsx";
import ManualList from "@/pages/manual-list/ui/ManualList.tsx";

const AppRouter = () => {
  return (
    <Routes>
      {/* 일반 페이지 - BaseLayout 사용 */}
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<ManualList />} />
        <Route path="editor" element={<ManualEditor />} />
      </Route>
      {/*<Route path="*" element={<Navigate to="/" replace />} />*/}
    </Routes>
  );
};

export default AppRouter;
