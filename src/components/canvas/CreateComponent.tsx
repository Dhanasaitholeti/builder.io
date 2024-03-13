import { useContext, useState } from "react";
import { elementProps } from "../../libs/types/element.type";
import ContextMenu from "../ui/ContextMenu";
import { IContextMenu } from "../../libs/types/contextmenu.type";
import { movementType, useDragHandler } from "../../hooks/useDragStart.hook";
import { ElementContext } from "../../contexts/ElementContext";

const CreateComponent: React.FC<elementProps> = (props) => {
  const { element, content, elementType, id, children, styles } = props;
  const elementContext = useContext(ElementContext);

  const [showContextMenu, setShowContextMenu] = useState<IContextMenu>({
    show: false,
    position: { left: 0, top: 0 },
  });

  const handleOnDrop = (e: React.DragEvent) => {
    const target = e.target as HTMLElement;
    const droppedElement = JSON.parse(e.dataTransfer.getData("elementData"));
    elementContext?.addChildrenToElement(target.id, droppedElement.data);
  };

  const handleOnDragStart = useDragHandler(props, movementType.reposition);

  const Element = `${element}` as keyof JSX.IntrinsicElements;

  const hadleOnContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowContextMenu({
      show: true,
      position: { left: e.pageX, top: e.pageY },
    });
  };

  const dynamicClassName = `hover:cursor-pointer ${
    styles ? Object.values(styles).join(" ") : ""
  }`;
  console.log(dynamicClassName);

  return (
    <>
      {elementType == "singleTag" ? (
        <Element
          id={id}
          draggable
          src={content}
          className={dynamicClassName}
          onDragStart={handleOnDragStart}
          onContextMenu={(e) => hadleOnContextMenu(e)}
        />
      ) : (
        <Element
          draggable
          id={id}
          onContextMenu={(e) => hadleOnContextMenu(e)}
          onDragStart={handleOnDragStart}
          className={dynamicClassName}
          onDrop={(e) => handleOnDrop(e)}
        >
          {content}
          {children &&
            children.map((child) => (
              <CreateComponent key={child.id} {...child} />
            ))}
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
