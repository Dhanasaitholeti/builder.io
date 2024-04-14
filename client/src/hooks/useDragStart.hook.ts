import { elementProps } from "../libs/types/element.type";
export enum movementType {
  reposition = "reposition",
  insert = "insert",
}

export const useDragHandler = (
  data: elementProps,
  type: movementType = movementType.insert
) => {
  const elementData = {
    type,
    data,
  };
  const handleOnDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("elementData", JSON.stringify(elementData));
  };

  return handleOnDragStart;
};
