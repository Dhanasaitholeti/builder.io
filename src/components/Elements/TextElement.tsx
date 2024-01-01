import SideElementCard from "../shared/SideElementCard";

const TextElement = () => {
  
  const componentData = {
    element: "p",
    content: "This is Text lol",
  };


  return (
    <>
      <SideElementCard elementName="Text Element" componentData={componentData} />
    </>
  );
};

export default TextElement;
