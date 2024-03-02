import Canvas from "../components/canvas/Canvas";
import { ElementContextProvider } from "../contexts/ElementContext";

const HomeScreen: React.FC = () => {
  return (
    <>
      <ElementContextProvider>
        <Canvas />
      </ElementContextProvider>
    </>
  );
};

export default HomeScreen;
