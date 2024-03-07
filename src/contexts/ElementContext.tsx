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
  getElement: (id: string) => elementProps | undefined;
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
    setElements((prevElements) => {
      return prevElements.map((element) => {
        if (id === element.id) {
          // Return a new object with the updated content
          return {
            ...element,
            content: content,
          };
        } else {
          // For elements other than the one being updated, return them unchanged
          return element;
        }
      });
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

  const getElement = (id: string) => {
    return elements.find((element) => id === element.id);
  };

  return {
    elements,
    addElement,
    changeContentOfElement,
    repositionElement,
    removeELement,
    getElement,
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
