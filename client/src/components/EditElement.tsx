import { MdOutlineArrowForward } from "react-icons/md";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { ElementContext } from "../contexts/ElementContext";
import { EditElementContext } from "../contexts/EditElementContext";
import { elementProps } from "../libs/types/element.type";
import {
  IflexStyles,
  IgridStyles,
  IimageStyles,
  IparaStyles,
} from "../libs/types/elementStyles.type";

type Istyles = IimageStyles | IflexStyles | IgridStyles | IparaStyles;

const EditElement = () => {
  const searchParams = useSearchParams();
  const editSearchParam: string | null = searchParams[0].get("edit") as string;

  const [val, setVal] = useState("");
  const [styles, setStyles] = useState<Istyles | object>({});
  console.log(styles);

  const elements = useContext(ElementContext);
  const elementInEditState = useContext(EditElementContext);

  const editElementData = elementInEditState?.editElement;

  const handleOnClick = () => {
    const id = elementInEditState?.editElement.elementId;
    if (id) {
      elements?.changeContentOfElement(id, val);
      elements?.updateElementStyles(
        id,
        styles as IimageStyles | IflexStyles | IgridStyles | IparaStyles
      );
    }
  };

  const handleOnStyleChange = (
    style: keyof typeof styles,
    subStyle: keyof (typeof styles)[keyof typeof styles],
    value: string
  ) => {
    if (styles) {
      setStyles((prevStyles: typeof styles) => ({
        ...prevStyles,
        [style]: {
          ...prevStyles[style],
          [subStyle]: value,
        },
      }));
    }
  };

  const presentEditingElement =
    editElementData?.elementId &&
    (elements?.getElement(editElementData.elementId) as elementProps);

  let styleKeys: (keyof (
    | IimageStyles
    | IparaStyles
    | IflexStyles
    | IgridStyles
  ))[] = [];

  if (presentEditingElement && presentEditingElement.styles)
    styleKeys = Object.keys(presentEditingElement?.styles) as (keyof (
      | IimageStyles
      | IparaStyles
      | IflexStyles
      | IgridStyles
    ))[];

  useEffect(() => {
    // Update styles state when presentEditingElement changes
    if (presentEditingElement && presentEditingElement.styles) {
      setStyles(presentEditingElement.styles);
    } else {
      setStyles({});
    }
  }, [presentEditingElement]);

  return (
    <>
      <div>
        <div className="flex flex-col items-start max-w-full w-full px-4 gap-2">
          <p className="text-lg">Content:</p>
          <input
            type="text"
            onChange={(e) => setVal(e.target.value)}
            className="bg-backgroundNavbar px-4 py-2 w-full"
            placeholder={
              presentEditingElement && presentEditingElement?.content
            }
          />
        </div>

        <div className="flex flex-col px-4 py-2 gap-4">
          {editSearchParam && styles[editSearchParam]
            ? Object.entries(styles[editSearchParam]).map(([key, value]) => (
                <div className="flex flex-col gap-2">
                  <p>{key}</p>
                  <input
                    type="text"
                    onChange={(e: ChangeEvent) =>
                      handleOnStyleChange(
                        editSearchParam,
                        key as keyof (typeof styles)[keyof typeof styles],
                        (e.target as HTMLInputElement).value
                      )
                    }
                    className="bg-backgroundNavbar px-4 py-2 w-full"
                    placeholder={value as string}
                  />
                </div>
              ))
            : styleKeys?.map((style) => (
                <Link to={`/?edit=${style}`}> 
                  <div className="flex justify-between items-center px-2 rounded-md max-w-full w-full hover:bg-gray-200 cursor-pointer">
                    <p className="text-lg my-2">{style}</p>
                    <MdOutlineArrowForward size={24} />
                  </div>
                </Link>
              ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => handleOnClick()}
        className="text-center mx-auto px-4 py-2 text-white bg-CTAPrimary max-w-min mt-16"
      >
        save
      </button>
    </>
  );
};

export default EditElement;
