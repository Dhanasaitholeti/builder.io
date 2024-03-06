import { IconType } from "react-icons";
import { elementProps } from "../../libs/types/element.type";
import { generateuniqueId } from "../../utils/generateuniqueId";
import { LuLayout } from "react-icons/lu";
import { CiImageOn } from "react-icons/ci";
import { MdTextFields } from "react-icons/md";

export interface sideElementProps extends elementProps {
  logo: IconType;
}

const ElementsData: sideElementProps[] = [
  {
    elementName: "FlexBox",
    elementType: "multiTag",
    id: generateuniqueId(),
    element: "div",
    content: "This is a Flex Box building it from scratch",
    logo: LuLayout,
  },
  {
    elementName: "GridBox",
    elementType: "multiTag",
    id: generateuniqueId(),
    element: "div",
    content: "This is a Grid Box building it from scratch",
    logo: LuLayout,
  },
  {
    elementName: "Text",
    elementType: "multiTag",
    id: generateuniqueId(),
    element: "p",
    content: "This is Text lol",
    logo: MdTextFields,
  },
  {
    elementName: "Image",
    elementType: "singleTag",
    id: generateuniqueId(),
    element: "img",
    content: "https://dummyimage.com/300x200",
    logo: CiImageOn,
  },
];

export default ElementsData;
