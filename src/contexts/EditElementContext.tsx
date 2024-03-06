import { createContext, useState } from "react";
import { commonProviderChildren } from "./ElementContext";

interface IEditElementContext {
  editElement: boolean;
  changeEditState: (edit: boolean, elementId: string) => void;
}

export const EditElementContext = createContext<
  IEditElementContext | undefined
>(undefined);

interface IContextState {
  edit: boolean;
  elementId: string | null;
}

export const useEditElementContext = () => {
  const [editElement, setEditElement] = useState<IContextState>({
    edit: false,
    elementId: null,
  });

  const changeEditState = (edit: boolean, elementId: string) => {
    console.log(elementId);
    setEditElement({ edit, elementId });
  };

  return { editElement: editElement.edit, changeEditState };
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
