import { v4 as uuidv4 } from "uuid";
import { elementProps } from "../../libs/types/element.type";
import SideElementCard from "../shared/SideElementCard";

const ImageElement: React.FC = () => {
  const componentData: elementProps = {
    elementType: "singleTag",
    id: uuidv4(),
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
