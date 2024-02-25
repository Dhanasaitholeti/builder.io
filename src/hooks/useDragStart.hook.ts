import { elementProps } from "../libs/types/element.type";

export const useDragHandler = (data: elementProps) => {
  const handleOnDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("elementData", JSON.stringify(data));
  };

  return handleOnDragStart;
};
