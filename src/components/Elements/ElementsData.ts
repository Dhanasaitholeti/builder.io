import { elementProps } from "../../libs/types/element.type";
import { generateuniqueId } from "../../utils/generateuniqueId";

const ElementsData: elementProps[] = [
  {
    elementName: "FlexBox",
    elementType: "multiTag",
    id: generateuniqueId(),
    element: "div",
    content: "This is a Flex Box building it from scratch",
  },
  {
    elementName: "GridBox",
    elementType: "multiTag",
    id: generateuniqueId(),
    element: "div",
    content: "This is a Grid Box building it from scratch",
  },
  {
    elementName: "Text",
    elementType: "multiTag",
    id: generateuniqueId(),
    element: "p",
    content: "This is Text lol",
  },
  {
    elementName: "Image",
    elementType: "singleTag",
    id: generateuniqueId(),
    element: "img",
    content: "https://dummyimage.com/640x4:",
  },
];

export default ElementsData;
