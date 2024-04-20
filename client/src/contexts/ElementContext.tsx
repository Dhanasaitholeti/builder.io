import { createContext, useState } from "react";
import { elementProps } from "../libs/types/element.type";
import { v4 } from "uuid";
import {
  IflexStyles,
  IgridStyles,
  IimageStyles,
  IparaStyles,
} from "../libs/types/elementStyles.type";

export interface commonProviderChildren {
  children: React.ReactNode;
}

interface IElementContext {
  elements: elementProps[];
  addElement: (element: elementProps) => void;
  changeContentOfElement: (id: string, content: unknown) => void;
  removeELement: (id: string) => void;
  getElement: (id: string) => elementProps | undefined;
  repositionElement: (id: string, belowId: string) => void;
  addChildrenToElement: (parentId: string, newElement: elementProps) => void;
  updateElementStyles: (
    id: string,
    styles: IflexStyles | IgridStyles | IimageStyles | IparaStyles
  ) => void;
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
          return {
            ...element,
            content: content,
          };
        } else if (element.children && element.children.length > 0) {
          return {
            ...element,
            children: changeContentInChildren(element.children, id, content),
          };
        } else {
          return element;
        }
      });
    });
  };

  const changeContentInChildren = (
    children: elementProps[],
    id: string,
    content: any
  ): elementProps[] => {
    return children.map((child) => {
      if (id === child.id) {
        return {
          ...child,
          content: content,
        };
      } else if (child.children && child.children.length > 0) {
        return {
          ...child,
          children: changeContentInChildren(child.children, id, content),
        };
      } else {
        return child;
      }
    });
  };

  const removeELement = (id: string) => {
    const newElements = elements.filter((element) => {
      return element.id !== id;
    });
    setElements(newElements);
  };

  const repositionElement = (id: string, belowId: string) => {
    setElements((prevElements) => {
      const indexId = prevElements.findIndex((element) => element.id === id);
      const indexBelowId = prevElements.findIndex(
        (element) => element.id === belowId
      );

      if (indexId !== -1 && indexBelowId !== -1) {
        const elementToMove = prevElements[indexId];
        prevElements.splice(indexId, 1);
        prevElements.splice(indexBelowId, 0, elementToMove);
      }

      return [...prevElements];
    });
  };

  const addChildrenToElement = (parentId: string, newElement: elementProps) => {
    removeELement(newElement.id);

    setElements((prevElements) => {
      return prevElements.map((element) => {
        if (parentId === element.id && element.isChildren) {
          return {
            ...element,
            children: [...(element.children || []), newElement],
          };
        } else {
          return element;
        }
      });
    });
  };

  const getElement = (
    id: string,
    elementsList: elementProps[] = elements
  ): elementProps | undefined => {
    for (const element of elementsList) {
      if (id === element.id) {
        return element; // Found the element with the given id
      }
      if (
        element.isChildren &&
        element.children &&
        element.children.length > 0
      ) {
        const foundInChildren = getElement(id, element.children);
        if (foundInChildren) {
          return foundInChildren; // Element found in children
        }
      }
    }
    return undefined; // Element not found
  };

  const updateElementStyles = (
    id: string,
    styles: IimageStyles | IparaStyles | IgridStyles | IflexStyles
  ) => {
    const elementToUpdate = getElement(id);
    if (elementToUpdate) {
      setElements((prevElements) => {
        return prevElements.map((element) => {
          if (element.id === id) {
            return {
              ...element,
              styles: {
                ...element.styles,
                ...styles,
              },
            };
          } else if (element.children && element.children.length > 0) {
            return {
              ...element,
              children: updateStylesInChildren(element.children, id, styles),
            };
          } else {
            return element;
          }
        });
      });
    }
  };

  const updateStylesInChildren = (
    children: elementProps[],
    id: string,
    styles: IimageStyles | IparaStyles | IgridStyles | IflexStyles
  ): elementProps[] => {
    return children.map((child) => {
      if (child.id === id) {
        return {
          ...child,
          styles: {
            ...child.styles,
            ...styles,
          },
        };
      } else if (child.children && child.children.length > 0) {
        return {
          ...child,
          children: updateStylesInChildren(child.children, id, styles),
        };
      } else {
        return child;
      }
    });
  };

  return {
    elements,
    addElement,
    changeContentOfElement,
    repositionElement,
    removeELement,
    getElement,
    addChildrenToElement,
    updateElementStyles,
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
