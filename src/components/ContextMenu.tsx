import { Dispatch, SetStateAction } from "react";
import { IContextMenu } from "../libs/types/contextmenu.type";

interface IContextMenuProps {
  position: { left: number; top: number };
  closeContextMenu: Dispatch<SetStateAction<IContextMenu>>;
}

const ContextMenu: React.FC<IContextMenuProps> = ({
  position,
  closeContextMenu,
}) => {
  return (
    <>
      <div
        className={"absolute z-10 border border-white"}
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
      >
        <p>This is Context Menu</p>
        <ul>
          <li>edit conetnt</li>
          <li>styles</li>
          <li>del</li>
        </ul>
        <button
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
