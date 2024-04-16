import { IconType } from "react-icons";
import { elementProps } from "../../libs/types/element.type";
import { generateuniqueId } from "../../utils/generateuniqueId";
import { LuLayout } from "react-icons/lu";
import { CiImageOn } from "react-icons/ci";
import { MdTextFields } from "react-icons/md";

export interface sideElementProps extends elementProps {
  logo: IconType;
}

const commonStyles = {
  padding: "p-2",
  paddingBottom: "",
  paddingLeft: "",
  paddingRight: "",
  paddingTop: "",
  margin: "",
  marginBottom: "",
  marginLeft: "",
  marginRight: "",
  marginTop: "",
  border: "",
  borderColor: "",
  borderRadius: "",
  borderWidth: "",
};

const ElementsData: sideElementProps[] = [
  {
    elementName: "Flex",
    elementType: "multiTag",
    id: generateuniqueId(),
    element: "div",
    logo: LuLayout,
    isChildren: true,
    styles: {
      ...commonStyles,
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
      ...commonStyles,
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
      ...commonStyles,
      fontSize: "text-xl",
      fontWeight: "",
      fontStyle: "",
      textPosition: "",
      textColor: "",
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
      ...commonStyles,
      height: "max-content",
      width: "max-content",
      bg: "",
    },
  },
];

export default ElementsData;
