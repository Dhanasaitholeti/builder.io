interface TextElementProps {
  text?: string;
}

const TextElement: React.FC<TextElementProps> = ({ text = "Text Element" }) => {
  const handleOnDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData(
      "textData",
      JSON.stringify({
        element: "p",
        content: "This is Text lol",
      })
    );
  };

  return (
    <>
      <p draggable="true" onDragStart={(e) => handleOnDragStart(e)}>
        {text}
      </p>
    </>
  );
};

export default TextElement;
