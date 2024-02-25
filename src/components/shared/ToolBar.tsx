import ImageElement from "../Elements/ImageElement";
import TextElement from "../Elements/TextElement";

const ToolBar: React.FC = () => {
  return (
    <>
      <h1 className="font-semibold text-blue-500 text-xl">Elements:</h1>
      <TextElement />
      <ImageElement />
    </>
  );
};

export default ToolBar;
