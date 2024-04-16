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

interface ICommonStyles {
  padding: string;
  paddingTop: string;
  paddingLeft: string;
  paddingRight: string;
  paddingBottom: string;
  margin: string;
  marginTop: string;
  marginLeft: string;
  marginRight: string;
  marginBottom: string;
  border: BorderValues | string;
  borderColor: BorderColorValues | string;
  borderWidth: BorderWidthValues | string;
  borderRadius: BorderRadiusValues | string;
  bg: string;
}

export interface IparaStyles extends ICommonStyles {
  fontSize: FontSizeValues | string;
  fontWeight: FontWeightValues | string;
  fontStyle: FontStyleValues | string;
  textPosition: TextPositionValues | string;
  textColor: TextColorValues | string;
}

export interface IimageStyles extends ICommonStyles {
  height: string;
  width: string;
  objectFit: string;
}

export interface IflexStyles extends ICommonStyles {
  height: string;
  width: string;
  flex: string;
  flexColumn: string;
  flexGrow: string;
  flexWrap: string;
  justifyContent: string;
  alignItems: string;
  gap: string;
}

export interface IgridStyles extends ICommonStyles {
  height: string;
  width: string;
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
