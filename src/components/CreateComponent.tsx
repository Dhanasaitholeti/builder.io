import { elementProps } from "../libs/types/element.type";

const CreateComponent: React.FC<elementProps> = ({
  element,
  content,
  elementType,
  id,
}) => {
  const Element = `${element}` as keyof JSX.IntrinsicElements;

  return (
    <>
      {elementType == "singleTag" ? (
        <Element src={content} id={id} />
      ) : (
        <Element id={id}>{content}</Element>
      )}
    </>
  );
};

export default CreateComponent;
