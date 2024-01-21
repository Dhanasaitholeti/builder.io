import { useState } from "react";
import { elementProps } from "../libs/types/element.type";

const CreateComponent: React.FC<elementProps> = ({
  element,
  content,
  elementType,
  id,
}) => {
  const [editable, setEditable] = useState(false);
  const Element = `${element}` as keyof JSX.IntrinsicElements;

  const handleDoubleClick = () => {
    console.log("hi ihi");
    setEditable((prev) => !prev);
  };

  return (
    <>
      {elementType == "singleTag" ? (
        <Element src={content} id={id} />
      ) : (
        <Element
          id={id}
          contentEditable={editable}
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
