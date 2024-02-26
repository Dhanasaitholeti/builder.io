import { useState } from "react";
import { elementProps } from "../libs/types/element.type";
import ContextMenu from "./ContextMenu";
import { IContextMenu } from "../libs/types/contextmenu.type";

const CreateComponent: React.FC<elementProps> = ({
  element,
  content,
  elementType,
  id,
}) => {
  const [showContextMenu, setShowContextMenu] = useState<IContextMenu>({
    show: false,
    position: { left: 0, top: 0 },
  });

  const Element = `${element}` as keyof JSX.IntrinsicElements;

  const hadleOnContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowContextMenu({
      show: true,
      position: { left: e.pageX, top: e.pageY },
    });
  };

  // const handleDoubleClick = () => {
  //   console.log("editing enabled");
  //   setEditable((prev) => !prev);
  // };

  // const handleOnChange = (e: React.FormEvent) => {
  //   const newValue = e.currentTarget.textContent || "";
  //   setChContent(() => newValue);
  //   context?.changeContentOfElement(id, chContent);
  // };

  return (
    <>
      {elementType == "singleTag" ? (
        <Element
          src={content}
          id={id}
          className="hover:cursor-pointer"
          onContextMenu={(e) => hadleOnContextMenu(e)}
        />
      ) : (
        <Element
          id={id}
          onContextMenu={(e) => hadleOnContextMenu(e)}
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
