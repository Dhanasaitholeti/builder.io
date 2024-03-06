import { createContext, useState } from "react";
import { elementProps } from "../libs/types/element.type";
import { commonProviderChildren } from "./ElementContext";

interface IEditElementContext {}

export const EditElementContext = createContext<
  IEditElementContext | undefined
>(undefined);

interface IContextState {
  edit: boolean;
  element: elementProps | null;
}

export const useEditElementContext = () => {
  const [edit, setEdit] = useState<IContextState>({
    edit: false,
    element: null,
  });

  const changeEditState = (element: elementProps) => {
    setEdit({ edit: true, element });
  };

  return [edit, changeEditState];
};

export const EditElementContextProvider = ({
  children,
}: commonProviderChildren) => {
  const value = useEditElementContext();

  return (
    <EditElementContext.Provider value={value}>
      {children}
    </EditElementContext.Provider>
  );
};
