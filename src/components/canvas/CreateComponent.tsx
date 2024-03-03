import { useState } from "react";
import { elementProps } from "../../libs/types/element.type";
import ContextMenu from "./ContextMenu";
import { IContextMenu } from "../../libs/types/contextmenu.type";
import { movementType, useDragHandler } from "../../hooks/useDragStart.hook";

const CreateComponent: React.FC<elementProps> = (props) => {
  const { element, content, elementType, id } = props;

  const [showContextMenu, setShowContextMenu] = useState<IContextMenu>({
    show: false,
    position: { left: 0, top: 0 },
  });

  const handleOnDragStart = useDragHandler(props, movementType.reposition);

  const Element = `${element}` as keyof JSX.IntrinsicElements;

  const hadleOnContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowContextMenu({
      show: true,
      position: { left: e.pageX, top: e.pageY },
    });
  };

  return (
    <>
      {elementType == "singleTag" ? (
        <Element
          draggable
          src={content}
          id={id}
          className="hover:cursor-pointer"
          onDragStart={handleOnDragStart}
          onContextMenu={(e) => hadleOnContextMenu(e)}
        />
      ) : (
        <Element
          draggable
          id={id}
          onContextMenu={(e) => hadleOnContextMenu(e)}
          onDragStart={handleOnDragStart}
          className="hover:cursor-pointer"
        >
          {content}
        </Element>
      )}

      {showContextMenu.show && (
        <ContextMenu
          elementId={id}
          position={showContextMenu.position}
          closeContextMenu={setShowContextMenu}
        />
      )}
    </>
  );
};

export default CreateComponent;

// const handleDoubleClick = () => {
//   console.log("editing enabled");
//   setEditable((prev) => !prev);
// };

// const handleOnChange = (e: React.FormEvent) => {
//   const newValue = e.currentTarget.textContent || "";
//   setChContent(() => newValue);
//   context?.changeContentOfElement(id, chContent);
// };
