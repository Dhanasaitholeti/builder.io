import { useContext } from "react";
import { ElementContext } from "../contexts/ElementContext";
import { EditElementContext } from "../contexts/EditElementContext";
import { elementProps } from "../libs/types/element.type";

const EditElement = () => {
  const elements = useContext(ElementContext);
  const elementInEditState = useContext(EditElementContext);

  const editElementData = elementInEditState?.editElement;

  const handleOnClick = () => {
    console.log("Got into it.");
    const id = elementInEditState?.editElement.elementId;

    if (id) {
      elements?.changeContentOfElement(
        id,
        "https://placehold.jp/3d4070/ffffff/150x150.png?text=Dhanasai%20here"
      );
    }
  };

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

      <button onClick={() => handleOnClick()}>save</button>
    </>
  );
};

export default EditElement;
