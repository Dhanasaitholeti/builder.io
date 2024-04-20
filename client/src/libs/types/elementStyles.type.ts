import {
  BorderColorValues,
  BorderRadiusValues,
  BorderValues,
  BorderWidthValues,
  FontSizeValues,
  FontStyleValues,
  FontWeightValues,
  TextColorValues,
  TextPositionValues,
} from "../enums/text.enum";

export interface ICommonDimensionStyles {
  dimensions:{
    height:string;
    maxHeight:string;
    minHeight:string;
    width: string;
    maxWidth: string;
    minWidth:string;
  }
}


export interface ICommonStyles {
  padding:{
   padding: string;
   paddingTop: string;
   paddingLeft: string;
   paddingRight: string;
   paddingBottom: string;
  }
  margin:{
    margin: string;
    marginTop: string;
    marginLeft: string;
    marginRight: string;
    marginBottom: string;
  }
  border:{
    border: BorderValues | string;
    borderColor: BorderColorValues | string;
    borderWidth: BorderWidthValues | string;
    borderRadius: BorderRadiusValues | string;
  }
  background:{ 
    bg: string;
  }
}

export interface IparaStyles extends ICommonStyles {
  font:{
   fontSize: FontSizeValues | string;
   fontWeight: FontWeightValues | string;
   fontStyle: FontStyleValues | string; 
  }
  textPosition: TextPositionValues | string;
  textColor: TextColorValues | string;
}

export interface IimageStyles extends ICommonStyles,ICommonDimensionStyles {
  objectFit: string;
}

export interface IflexStyles extends ICommonStyles,ICommonDimensionStyles{
  flex : {
    flex: string;
    flexColumn: string;
    flexGrow: string;
    flexWrap: string;
    justifyContent: string;
    alignItems: string;
    gap: string; 
  }
 
}

export interface IgridStyles extends ICommonStyles,ICommonDimensionStyles {
  grid:{
    grid: string;
    gridColumns: string;
    gridRows: string;
    gridColumnStart: string;
    gridColumnSpan: string;
    gridColumnEnd: string;
    gridRowStart: string;
    gridRowSpan: string;
    gridRowEnd: string;
    gap: string;
  }

}
