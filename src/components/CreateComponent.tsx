import { elementProps } from "../libs/types/element.type";

const CreateComponent: React.FC<elementProps> = ({
  element,
  content,
  elementType,
}) => {
  const Element = `${element}` as keyof JSX.IntrinsicElements;

  return (
    <>
      {elementType == "singleTag" ? (
        <Element src={content} />
      ) : (
        <Element>{content}</Element>
      )}
    </>
  );
};

export default CreateComponent;
