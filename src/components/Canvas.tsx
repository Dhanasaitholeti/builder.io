import { useState } from "react";
import CreateComponent from "./CreateComponent";
import { elementProps } from "../libs/types/element.type";

const Canvas = () => {
  const [elements, setElements] = useState<elementProps[]>([]);

  const handleOnDrop = (e: React.DragEvent) => {
    const elementdata = JSON.parse(e.dataTransfer.getData("textData"));
    setElements((prev) => [...prev, elementdata]);
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
        {elements.map((element) => (
          <CreateComponent {...element} />
        ))}
      </div>
    </>
  );
};

export default Canvas;
