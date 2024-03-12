import { Dispatch, SetStateAction, useContext } from "react";
import { IContextMenu } from "../../libs/types/contextmenu.type";
import { ElementContext } from "../../contexts/ElementContext";
import { MdDelete, MdClose, MdModeEdit } from "react-icons/md";
import { EditElementContext } from "../../contexts/EditElementContext";

interface IContextMenuProps {
  position: { left: number; top: number };
  closeContextMenu: Dispatch<SetStateAction<IContextMenu>>;
  elementId: string;
}

const LabelCommonStyles = "w-full flex items-center gap-2 hover:cursor-pointer";

const ContextMenu: React.FC<IContextMenuProps> = ({
  position,
  closeContextMenu,
  elementId,
}) => {
  const elementContext = useContext(ElementContext);
  const editElementContext = useContext(EditElementContext);

  const handleEditClick = () => {
    editElementContext?.changeEditState(true, elementId);
    closeContextMenu({
      show: false,
      position: { left: 0, top: 0 },
    });
  };

  return (
    <>
      <div
        className="absolute z-10 border border-white bg-white py-2 px-4 rounded-lg divide-y-2 flex flex-col items-start gap-1 text-lg shadow-lg"
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
      >
        <div
          className={` ${LabelCommonStyles}`}
          onClick={() => handleEditClick()}
        >
          <MdModeEdit color="green" />
          edit
        </div>
        <div
          className={` ${LabelCommonStyles}`}
          onClick={() => elementContext?.removeELement(elementId)}
        >
          <MdDelete color="orange" />
          delete
        </div>
        <div
          className={` ${LabelCommonStyles}`}
          onClick={() =>
            closeContextMenu({
              show: false,
              position: { left: 0, top: 0 },
            })
          }
        >
          <MdClose color="red" />
          close
        </div>
      </div>
    </>
  );
};

export default ContextMenu;
