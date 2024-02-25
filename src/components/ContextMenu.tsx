import { useEffect } from "react";

interface IContextMenu {
  position: { left: number; top: number };
}

const ContextMenu: React.FC<IContextMenu> = ({ position }) => {
  console.log(position);

  useEffect(() => {}, [position]);

  return (
    <>
      <div
        className={`absolute z-10 top-[${position.top}] left-[${position.left}]`}
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
