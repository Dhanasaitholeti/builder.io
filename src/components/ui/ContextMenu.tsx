import { Dispatch, SetStateAction, useContext } from "react";
import { IContextMenu } from "../../libs/types/contextmenu.type";
import { ElementContext } from "../../contexts/ElementContext";

interface IContextMenuProps {
  position: { left: number; top: number };
  closeContextMenu: Dispatch<SetStateAction<IContextMenu>>;
  elementId: string;
}

const ContextMenu: React.FC<IContextMenuProps> = ({
  position,
  closeContextMenu,
  elementId,
}) => {
  console.log(elementId);

  const elementContext = useContext(ElementContext);

  return (
    <>
      <div
        className="absolute z-10 border border-white bg-white py-2 px-4 rounded-lg divide-y-2 flex flex-col items-start gap-1 text-lg shadow-lg"
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
      >
        <button>Edit Content</button>
        <button>Edite Styles</button>
        <button
          className="text-orange-600 w-full"
          onClick={() => elementContext?.removeELement(elementId)}
        >
          delete
        </button>
        <button
          className="text-red-600 w-full"
          onClick={() =>
            closeContextMenu({
              show: false,
              position: { left: 0, top: 0 },
            })
          }
        >
          close
        </button>
      </div>
    </>
  );
};

export default ContextMenu;
