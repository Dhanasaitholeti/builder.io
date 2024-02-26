import { elementProps } from "../../libs/types/element.type";
import { generateuniqueId } from "../../utils/generateuniqueId";
import SideElementCard from "../shared/SideElementCard";

const TextElement: React.FC = () => {
  const componentData: elementProps = {
    elementType: "multiTag",
    id: generateuniqueId(),
    element: "div",
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
