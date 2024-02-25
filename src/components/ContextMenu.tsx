import { useEffect } from "react";

interface IContextMenu {
  position: { left: number; top: number };
}

const ContextMenu: React.FC<IContextMenu> = ({ position }) => {
  useEffect(() => {}, [position]);

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
      </div>
    </>
  );
};

export default ContextMenu;
