import { useContext } from "react";
import EditElement from "../EditElement";
import { Elements } from "../elements";
import { EditElementContext } from "../../contexts/EditElementContext";

const ToolBar: React.FC = () => {
  const editElementContext = useContext(EditElementContext);
  console.log(editElementContext);
  return (
    <>
      <div className="flex justify-between p-2">
        <h1 className="font-semibold text-textPrimary text-xl">
          {editElementContext?.editElement.edit ? "Edit:" : "Add:"}
        </h1>
        {editElementContext?.editElement.edit && (
          <button
            className="px-4 bg-CTAPrimary text-white font-semibold rounded-md"
            onClick={() => editElementContext.changeEditState(false, "")}
          >
            close
          </button>
        )}
      </div>
      <div>
        
      </div>
      {editElementContext?.editElement.edit ? <EditElement /> : <>{Elements}</>}
    </>
  );
};

export default ToolBar;
