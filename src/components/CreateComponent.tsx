import { useContext, useState } from "react";
import { elementProps } from "../libs/types/element.type";
import { ElementContext } from "../contexts/ElementContext";

const CreateComponent: React.FC<elementProps> = ({
  element,
  content,
  elementType,
  id,
}) => {
  const context = useContext(ElementContext);
  const [editable, setEditable] = useState<boolean>(false);
  const [chContent, setChContent] = useState<string>("");

  const Element = `${element}` as keyof JSX.IntrinsicElements;

  const handleDoubleClick = () => {
    console.log("hi ihi");
    setEditable((prev) => !prev);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLElement>) => {
    const newValue = e.currentTarget.textContent || "";
    setChContent(newValue);
    context?.changeContentOfElement(id, chContent);
  };

  return (
    <>
      {elementType == "singleTag" ? (
        <Element src={content} id={id} />
      ) : (
        <Element
          id={id}
          contentEditable={editable}
          onInput={(e) => handleOnChange(e)}
          onDoubleClick={() => handleDoubleClick()}
          className="hover:cursor-pointer"
        >
          {content}
        </Element>
      )}
    </>
  );
};

export default CreateComponent;
