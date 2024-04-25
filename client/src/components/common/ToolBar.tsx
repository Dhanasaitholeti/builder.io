import { useContext } from "react";
import EditElement from "../EditElement";
import { Elements } from "../elements";
import { EditElementContext } from "../../contexts/EditElementContext";
import { useNavigate } from "react-router-dom";

const ToolBar: React.FC = () => {
  const navigate = useNavigate();

  const editElementContext = useContext(EditElementContext);
  return (
    <>
      <div className="flex justify-between items-center p-2 max-h-[90vh] overflow-y-scroll">
        <h1 className="font-semibold text-textPrimary text-xl">
          {editElementContext?.editElement.edit ? "Edit:" : "Add:"}
        </h1>
        {editElementContext?.editElement.edit && (
          <button
            className="px-4 bg-CTAPrimary text-white font-semibold rounded-md"
            onClick={() => {
              editElementContext.changeEditState(false, "");
              navigate("/");
            }}
          >
            close
          </button>
        )}
      </div>
      {editElementContext?.editElement.edit ? <EditElement /> : <>{Elements}</>}
    </>
  );
};

export default ToolBar;
