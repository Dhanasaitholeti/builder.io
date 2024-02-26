import { createContext, useState } from "react";
import { elementProps } from "../libs/types/element.type";

interface IElementContext {
  elements: elementProps[];
  addElement: (element: elementProps) => void;
  changeContentOfElement: (id: string, content: any) => void;
  removeELement: (id: string) => void;
  repositionElement: (
    id: string,
    newPosition: { left: number; top: number }
  ) => void;
}

export const ElementContext = createContext<IElementContext | undefined>(
  undefined
);

export const useElementContext = () => {
  const [elements, setElements] = useState<elementProps[]>([]);

  console.log(elements);

  const addElement = (element: elementProps) => {
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

  const repositionElement = (
    id: string,
    newPosition: { left: number; top: number }
  ) => {
    setElements((prevElements) =>
      prevElements.map((element) =>
        element.id === id ? { ...element, position: newPosition } : element
      )
    );
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
}: {
  children: React.ReactNode;
}) => {
  const value = useElementContext();
  return (
    <ElementContext.Provider value={value}>{children}</ElementContext.Provider>
  );
};
