import { createContext, useState } from "react";
import { elementProps } from "../libs/types/element.type";

interface IElementContext {
  elements: elementProps[];
  addElement: (element: elementProps) => void;
}

export const ElementContext = createContext<IElementContext | undefined>(
  undefined
);

export const useElementContext = () => {
  const [elements, setElements] = useState<elementProps[]>([]);

  const addElement = (element: elementProps) => {
    setElements((prev) => [...prev, element]);
  };

  return { elements, addElement };
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
