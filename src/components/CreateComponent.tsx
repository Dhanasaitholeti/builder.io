import { elementProps } from "../libs/types/element.type";

const CreateComponent: React.FC<elementProps> = ({ element, content }) => {
  const Element = `${element}` as keyof JSX.IntrinsicElements;

  return (
    <>
      <Element>{content}</Element>
    </>
  );
};

export default CreateComponent;
