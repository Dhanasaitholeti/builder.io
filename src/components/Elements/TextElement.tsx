import { elementProps } from "../../libs/types/element.type";
import SideElementCard from "../shared/SideElementCard";
import { v4 as uuidv4 } from "uuid";

const TextElement: React.FC = () => {
  const componentData: elementProps = {
    elementType: "multiTag",
    id: uuidv4(),
    element: "p",
    content: "This is Text lol",
  };

  return (
    <>
      <SideElementCard
        elementName="Text Element"
        componentData={componentData}
      />
    </>
  );
};

export default TextElement;
