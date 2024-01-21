import { useContext } from "react";
import CreateComponent from "./CreateComponent";
import { ElementContext } from "../contexts/ElementContext";
import { elementProps } from "../libs/types/element.type";

const Canvas = () => {
  const data = useContext(ElementContext);

  console.log(data);

  const handleOnDrop = (e: React.DragEvent) => {
    const elementdata = JSON.parse(e.dataTransfer.getData("textData"));
    data?.addElement(elementdata);
  };

  const allowDrag = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        onDrop={(e) => handleOnDrop(e)}
        onDragOver={(e) => allowDrag(e)}
        className="h-[100%] "
      >
        {data?.elements?.map((element: elementProps) => (
          <CreateComponent {...element} />
        ))}
      </div>
    </>
  );
};

export default Canvas;
