const ImageElement = () => {
  const handleOnDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData(
      "textData",
      JSON.stringify({
        element: "img",
        content: "https://dummyimage.com/640x4:3",
      })
    );
  };

  return (
    <>
      <img
        src={"https://dummyimage.com/640x4:3"}
        alt="image component"
        onDragStart={(e) => handleOnDragStart(e)}
        draggable="true"
      />
    </>
  );
};

export default ImageElement;
