import { IconType } from "react-icons";
import { elementProps } from "../../libs/types/element.type";
import { generateuniqueId } from "../../utils/generateuniqueId";
import { LuLayout } from "react-icons/lu";
import { CiImageOn } from "react-icons/ci";
import { MdTextFields } from "react-icons/md";
import { ICommonDimensionStyles, ICommonStyles } from "../../libs/types/elementStyles.type";

export interface sideElementProps extends elementProps {
  logo: IconType;
}

const commonStyles:ICommonStyles = {
  padding: {
    padding:"p-2",
    paddingBottom: "",
    paddingLeft: "",
    paddingRight: "",
    paddingTop: "",
  },
  margin: {
    margin:"",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
    marginTop: "",
  },
  border: {
    border:"",
    borderColor: "",
    borderRadius: "",
    borderWidth: "",
  },
  background: {
    bg:"bg-green-400"
  }
};


const CommonDimenstions: ICommonDimensionStyles = {
  dimensions:{
    width:"",
    height:"",
    maxWidth:"",
    minWidth:"",
    maxHeight:"",
    minHeight:"min-h-60"
  }
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
      ...commonStyles,
      ...CommonDimenstions,
      flex:{
        flex:"",
        flexGrow:"",
        flexWrap:"",
        alignItems:"",
        flexColumn:"",
        justifyContent:"",
        gap:""
      },
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
      ...CommonDimenstions,
      grid:{
        grid:"",
        gridRows:"",
        gridRowEnd:"",
        gridColumns:"",
        gridRowSpan:"",
        gridRowStart:"",
        gridColumnEnd:"",
        gridColumnSpan:"",
        gridColumnStart:"",
        gap:""
      }
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
      ...CommonDimenstions,
      font:{
        fontSize:"",
        fontStyle:"",
        fontWeight:"",
      },
      textColor:"",
      textPosition:""
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
      ...CommonDimenstions,
      objectFit:""

    },
  },
];

export default ElementsData;
