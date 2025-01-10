import {
  IflexStyles,
  IgridStyles,
  IimageStyles,
  IparaStyles,
} from "../libs/types/elementStyles.type";

type styles = IparaStyles | IimageStyles | IflexStyles | IgridStyles;

export const generateDynamicClassnames = (styles: styles) => {
  let dynamicClassName = "";
  const parentStyleKeys = Object.keys(styles);
  parentStyleKeys.map((key) => {
    const childstyleValues = Object.values(styles[key]);
    childstyleValues.forEach((value) => {
      if (value !== "") dynamicClassName += `  ${value}`;
    });
  });
  console.log(dynamicClassName);
  return dynamicClassName;
};
