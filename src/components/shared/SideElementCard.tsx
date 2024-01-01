import { useDragHandler } from "../../hooks/useDragStart.hook";
import { elementProps } from "../../libs/types/element.type";

interface SideElementCardProps {
  elementName: string;
  componentData: elementProps;
}

const SideElementCard: React.FC<SideElementCardProps> = ({
  elementName,
  componentData,
}) => {

  const handleOnDragStart = useDragHandler(componentData);

  return (
    <>
      <div className="py-2 px-4 mx-4 my-2 border-1 border-black bg-white shadow-lg rounded-xl">
        <p
          draggable="true"
          onDragStart={(e) => handleOnDragStart(e)}
          className="font-semibold text-lg text-blue-400"
        >
          {elementName}
        </p>
      </div>
    </>
  );
};

export default SideElementCard;
