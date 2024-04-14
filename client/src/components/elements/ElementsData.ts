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
    elementName: "Flex",
    elementType: "multiTag",
    id: generateuniqueId(),
    element: "div",
    logo: LuLayout,
    isChildren: true,
    styles: {
      height: "h-max min-h-40",
      width: "w-full",
      bg: "bg-green-200",
      padding: "p-10",
    },
  },
  {
    elementName: "Grid",
    elementType: "multiTag",
    id: generateuniqueId(),
    element: "div",
    logo: LuLayout,
    isChildren: true,
    styles: {
      height: "h-max min-h-40",
      width: "w-full",
      bg: "bg-gray-200",
      padding: "p-10",
    },
  },
  {
    elementName: "Text",
    elementType: "multiTag",
    id: generateuniqueId(),
    element: "p",
    content: "This is Text lol",
    logo: MdTextFields,
    isChildren: false,
    styles: {
      fontSize: "text-xl",
      fontWeight: "",
      fontStyle: "",
      textPosition: "",
      textColor: "",
      border: "",
      borderColor: "",
      borderWidth: "",
      borderRadius: "",
      padding: "",
      margin: "",
    },
  },
  {
    elementName: "Image",
    elementType: "singleTag",
    id: generateuniqueId(),
    element: "img",
    content: "https://dummyimage.com/300x200",
    logo: CiImageOn,
    isChildren: false,
    styles: {
      height: "max-content",
      width: "max-content",
      padding: "p-2",
      bg: "",
    },
  },
];

export default ElementsData;
