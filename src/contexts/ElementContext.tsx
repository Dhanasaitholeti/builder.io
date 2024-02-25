import { createContext, useState } from "react";
import { elementProps } from "../libs/types/element.type";

interface IElementContext {
  elements: elementProps[];
  addElement: (element: elementProps) => void;
  changeContentOfElement: (id: string, content: any) => void;
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

  return { elements, addElement, changeContentOfElement };
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
