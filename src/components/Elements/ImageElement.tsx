import { elementProps } from "../../libs/types/element.type";
import SideElementCard from "../shared/SideElementCard";
import { generateuniqueId } from "../../utils/generateuniqueId";

const ImageElement: React.FC = () => {
  const componentData: elementProps = {
    elementType: "singleTag",
    id: generateuniqueId(),
    element: "img",
    content: "https://dummyimage.com/640x4:3",
  };

  return (
    <>
      <SideElementCard
        elementName="Image Element"
        componentData={componentData}
      />
    </>
  );
};

export default ImageElement;
