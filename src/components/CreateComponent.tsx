import { useContext, useState } from "react";
import { elementProps } from "../libs/types/element.type";
import { ElementContext } from "../contexts/ElementContext";
import ContextMenu from "./ContextMenu";

const CreateComponent: React.FC<elementProps> = ({
  element,
  content,
  elementType,
  id,
}) => {
  const context = useContext(ElementContext);
  const [editable, setEditable] = useState<boolean>(false);
  const [chContent, setChContent] = useState<string>("");
  const [showContextMenu, setShowContextMenu] = useState<{
    show: boolean;
    position: { top: number; left: number };
  }>({ show: false, position: { left: 0, top: 0 } });

  const Element = `${element}` as keyof JSX.IntrinsicElements;

  const hadleOnContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowContextMenu({
      show: true,
      position: { left: e.pageX, top: e.pageY },
    });
  };

  const handleDoubleClick = () => {
    console.log("editing enabled");
    setEditable((prev) => !prev);
  };

  const handleOnChange = (e: React.FormEvent) => {
    const newValue = e.currentTarget.textContent || "";
    setChContent(() => newValue);
    context?.changeContentOfElement(id, chContent);
  };

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
          contentEditable={editable} //will remove it
          onContextMenu={(e) => hadleOnContextMenu(e)}
          onInput={(e) => handleOnChange(e)} //will remove
          onDoubleClick={() => handleDoubleClick()} //will remove
          className="hover:cursor-pointer"
        >
          {content}
        </Element>
      )}

      {showContextMenu.show && (
        <ContextMenu position={showContextMenu.position} />
      )}
    </>
  );
};

export default CreateComponent;
