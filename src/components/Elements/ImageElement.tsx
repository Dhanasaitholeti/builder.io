import { elementProps } from "../../libs/types/element.type";
import SideElementCard from "../shared/SideElementCard";

const ImageElement = () => {
  const componentData: elementProps = {
    elementType: "singleTag",
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
