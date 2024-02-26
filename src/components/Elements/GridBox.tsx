import { elementProps } from "../../libs/types/element.type";
import { generateuniqueId } from "../../utils/generateuniqueId";
import SideElementCard from "../shared/SideElementCard";

const GridBox: React.FC = () => {
  const componentData: elementProps = {
    elementType: "multiTag",
    id: generateuniqueId(),
    element: "div",
    content: "This is Text lol",
  };

  return (
    <>
      <SideElementCard
        elementName="GridBox Element"
        componentData={componentData}
      />
    </>
  );
};

export default GridBox;
