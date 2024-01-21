import Canvas from "../components/Canvas";
import { ElementContextProvider } from "../contexts/ElementContext";

const HomeScreen = () => {
  return (
    <>
      <ElementContextProvider>
        <Canvas />
      </ElementContextProvider>
    </>
  );
};

export default HomeScreen;
