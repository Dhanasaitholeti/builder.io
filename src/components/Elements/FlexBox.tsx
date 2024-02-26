import { elementProps } from "../../libs/types/element.type";
import { generateuniqueId } from "../../utils/generateuniqueId";
import SideElementCard from "../shared/SideElementCard";

const FlexBox: React.FC = () => {
  const componentData: elementProps = {
    elementType: "multiTag",
    id: generateuniqueId(),
    element: "div",
    content: "This is Text lol",
  };

  return (
    <>
      <SideElementCard
        elementName="FlexBox Element"
        componentData={componentData}
      />
    </>
  );
};

export default FlexBox;
