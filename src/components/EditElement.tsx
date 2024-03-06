import { useContext } from "react";
import { ElementContext } from "../contexts/ElementContext";
import { EditElementContext } from "../contexts/EditElementContext";
import { elementProps } from "../libs/types/element.type";

const EditElement = () => {
  const elements = useContext(ElementContext);
  const elementInEditState = useContext(EditElementContext);

  const editElementData = elementInEditState?.editElement;

  const presentEditingElement =
    editElementData?.elementId &&
    (elements?.getElement(editElementData.elementId) as elementProps);

  return (
    <>
      <div>Edit the Content of the given component</div>
      <input
        type="text"
        name=""
        id=""
        placeholder={presentEditingElement && presentEditingElement?.content}
      />
    </>
  );
};

export default EditElement;
