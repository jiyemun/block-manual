import { Navigate, Route, Routes } from "react-router-dom";
import BaseLayout from "@/widgets/layout/BaseLayout.tsx";
import ManualEditor from "@/pages/editor/ManualEditor.tsx";
import ManualDashboard from "@/pages/dashboard/ManualDashboard.tsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<ManualDashboard />} />
        <Route path="editor" element={<ManualEditor />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
