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
  padding: string;
  bg: string;
}

export interface IflexStyles extends ICommonStyles {
  height: string;
  width: string;
  padding: string;
  bg: string;
}

export interface IgridStyles extends ICommonStyles {
  height: string;
  width: string;
  padding: string;
  bg: string;
}
