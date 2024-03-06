import { createContext, useState } from "react";
import { elementProps } from "../libs/types/element.type";
import { v4 } from "uuid";

export interface commonProviderChildren {
  children: React.ReactNode;
}

interface IElementContext {
  elements: elementProps[];
  addElement: (element: elementProps) => void;
  changeContentOfElement: (id: string, content: any) => void;
  removeELement: (id: string) => void;
  repositionElement: (id: string, belowId: string) => void;
}

export const ElementContext = createContext<IElementContext | undefined>(
  undefined
);

export const useElementContext = () => {
  const [elements, setElements] = useState<elementProps[]>([]);

  console.log(elements);

  const addElement = (element: elementProps) => {
    element.id = v4();
    setElements((prev) => [...prev, element]);
  };

  const changeContentOfElement = (id: string, content: any) => {
    elements.map((element) => {
      if (id === element.id) element.content = content;
    });
  };

  const removeELement = (id: string) => {
    const newElements = elements.filter((element) => element.id !== id);
    setElements(newElements);
  };

  const repositionElement = (id: string, belowId: string) => {
    setElements((prevElements) => {
      const indexId = prevElements.findIndex((element) => element.id === id);
      const indexBelowId = prevElements.findIndex(
        (element) => element.id === belowId
      );

      console.log(indexId, indexBelowId);

      if (indexId !== -1 && indexBelowId !== -1) {
        const elementToMove = prevElements[indexId];
        prevElements.splice(indexId, 1);
        prevElements.splice(indexBelowId, 0, elementToMove);
      }

      return [...prevElements];
    });
  };

  return {
    elements,
    addElement,
    changeContentOfElement,
    repositionElement,
    removeELement,
  };
};

export const ElementContextProvider = ({
  children,
}: commonProviderChildren) => {
  const value = useElementContext();
  return (
    <ElementContext.Provider value={value}>{children}</ElementContext.Provider>
  );
};
