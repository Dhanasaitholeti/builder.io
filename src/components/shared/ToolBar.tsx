// import ImageElement from "../Elements/ImageElement";
// import TextElement from "../Elements/TextElement";
import Elements from "../Elements";

const ToolBar: React.FC = () => {
  return (
    <>
      <h1 className="font-semibold text-blue-500 text-xl">Elements:</h1>
      <>
        {Elements.map((Element) => (
          <Element />
        ))}
      </>
    </>
  );
};

export default ToolBar;
