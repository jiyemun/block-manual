import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/shadcn";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/shadcn/style.css";
import { useLocation } from "react-router-dom";

const ManualEditor = () => {
  const editor = useCreateBlockNote();
  const location = useLocation();
  const id = location.state?.id;

  return (
    <div className={"p-4"}>
      <div className={"pb-4"}>메뉴얼 : {id}</div>
      <BlockNoteView editor={editor} />
    </div>
  );
};

export default ManualEditor;
