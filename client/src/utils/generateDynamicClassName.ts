import { IflexStyles, IgridStyles, IimageStyles, IparaStyles } from "../libs/types/elementStyles.type";

export const generateDynamicClassnames = (styles: IparaStyles | IimageStyles | IflexStyles | IgridStyles) => {
    let dynamicClassName = ""
    const parentStyleKeys = Object.keys(styles);
    parentStyleKeys.map((key) => {
        const childstyleValues = Object.values(styles[key]);
        childstyleValues.forEach(value => {
            if(value !== "")
            dynamicClassName += `  ${value}`; 
        });
        
    });
    console.log(dynamicClassName);
    return dynamicClassName;
}
